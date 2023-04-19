using Gamy.Business.IoC;
using Gamy.DataAccess.Database;
using Gamy.DataAccess.IoC;
using Gamy.Entity.Modals;
using Gamy.UI.Hubs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<GamyContext>(options => options.UseSqlServer(
    builder.Configuration.GetConnectionString("GamyConnection")
    ));
builder.Services.AddIdentity<AppUser, AppRole>().AddEntityFrameworkStores<GamyContext>();
// Add services to the container.
builder.Services.AddControllersWithViews();

builder.Services.AddMvc(config =>
{
    var policy = new AuthorizationPolicyBuilder()
    .RequireAuthenticatedUser()
    .Build();
    config.Filters.Add(new AuthorizeFilter(policy));
});

builder.Services.AddMvc();

builder.Services.AddSignalR();

//builder.Services.ConfigureApplicationCookie(options =>
//{
//    options.LoginPath = "/Login/SignIn/";
//});
//Action filter
builder.Services.AddDataAccessServices();
builder.Services.AddBusinessServices();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseAuthentication();
app.UseRouting();


app.UseAuthorization();

app.UseEndpoints(endpoints =>
{
    endpoints.MapHub<ChatHub>("/chathub"); // ChatHub ismi deðiþtirilebilir
    endpoints.MapControllers();
});

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();

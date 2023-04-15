using FluentValidation;
using Gamy.Business.Abstracts;
using Gamy.Business.Concretes;
using Gamy.Business.Validators;
using Gamy.Entity.Modals;
using Microsoft.Extensions.DependencyInjection;

namespace Gamy.Business.IoC
{
    public static class ModuleInjector
    {
        public static IServiceCollection AddBusinessServices(this IServiceCollection services)
        {
            //services.AddTransient<IValidator<Project>, ProjectValidator>();

            services.AddScoped<IOrderService, OrderService>();
            services.AddScoped<IProductService, ProductService>();
            services.AddScoped<IAppUserService, AppUserService>();

            services.AddScoped<IValidator<Order>, OrderValidator>();
            services.AddScoped<IValidator<Cart>, CartValidator>();
            services.AddScoped<IValidator<CartItem>, CartItemValidator>();
            services.AddScoped<IValidator<Category>, CategoryValidator>();
            services.AddScoped<IValidator<OrderItem>, OrderItemValidator>();
            services.AddScoped<IValidator<Product>, ProductValidator>();
            services.AddScoped<IValidator<Seller>, SellerValidator>();
            //services.AddScoped<IValidator<AppUser>, UserValidator>();
            //services.AddScoped<IValidator<UserRole>, UserRoleValidator>();

            return services;
        }
    }
}

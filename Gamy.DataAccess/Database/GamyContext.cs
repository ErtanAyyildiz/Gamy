using Gamy.Entity.Modals;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Gamy.DataAccess.Database
{
    public class GamyContext : IdentityDbContext<AppUser,AppRole,int>
    {
        public GamyContext(DbContextOptions options) : base(options)
        {
        }

        public virtual DbSet<Product> Products { get; private set; }
        public virtual DbSet<Category> Categories { get; private set; }
        public virtual DbSet<Order> Orders { get; private set; }
        public virtual DbSet<OrderItem> OrderItems { get; private set; }
        public virtual DbSet<Cart> Carts { get; private set; }
        public virtual DbSet<CartItem> CartItems { get; private set; }
        public virtual DbSet<Seller> Sellers { get; private set; }
        public virtual DbSet<Comment> Comments { get; private set; }
        public virtual DbSet<SubCategory> SubCategories { get; private set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=LAPTOP-0IN5JO9S;Database=GamyDB;Trusted_Connection=True;");
            }
        }
    }
}

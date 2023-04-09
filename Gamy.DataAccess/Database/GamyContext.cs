using Gamy.Entity.Modals;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Gamy.DataAccess.Database
{
    public class GamyContext:DbContext
    {
        public GamyContext()
        {
        }
        public GamyContext(DbContextOptions options) : base(options)
        {
        }

        public virtual DbSet<User> Users { get; private set; }
        public virtual DbSet<Role> Roles { get; private set; }
        public virtual DbSet<UserRole> UserRoles { get; private set; }
        public virtual DbSet<Product> Products { get; private set; }
        public virtual DbSet<Category> Categories { get; private set; }
        public virtual DbSet<Order> Orders { get; private set; }
        public virtual DbSet<OrderItem> OrderItems { get; private set; }
        public virtual DbSet<Cart> Carts { get; private set; }
        public virtual DbSet<CartItem> CartItems { get; private set; }
        public virtual DbSet<Seller> Sellers { get; private set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=LAPTOP-0IN5JO9S;Database=GamyDB;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserRole>().HasNoKey();
        }
    }
}

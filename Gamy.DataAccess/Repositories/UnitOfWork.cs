using Gamy.DataAccess.Abstracts;
using Gamy.DataAccess.Database;
using Gamy.DataAccess.MsEntityFramework;
using Gamy.DataAccess.Repositories.IRepositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gamy.DataAccess.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly GamyContext _db;

        public UnitOfWork(GamyContext db)
        {
            _db = db;
            Cart = new CartDal(_db);
            CartItem= new CartItemDal(_db);
            Category= new CategoryDal(_db);
            Order= new OrderDal(_db);
            OrderItem= new OrderItemDal(_db);
            Product= new ProductDal(_db);
            Role= new RoleDal(_db);
            Seller= new SellerDal(_db);
            User= new UserDal(_db);
            UserRole= new UserRoleDal(_db);
        }

        public ICartDal Cart { get; private set; }
        public ICartItemDal CartItem { get; private set; }
        public ICategoryDal Category { get; private set; }
        public IOrderDal Order { get; private set; }
        public IOrderItemDal OrderItem { get; private set; }
        public IProductDal Product { get; private set; }
        public IRoleDal Role { get; private set; }
        public ISellerDal Seller { get; private set; }
        public IUserDal User { get; private set; }
        public IUserRoleDal UserRole { get; private set; }

        public void Save()
        {
            _db.SaveChanges();
        }
    }
}

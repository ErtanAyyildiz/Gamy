using Gamy.DataAccess.Abstracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gamy.DataAccess.Repositories.IRepositories
{
    public interface IUnitOfWork
    {
        ICartDal Cart { get; }
        ICartItemDal CartItem { get; }
        ICategoryDal Category { get; }
        IOrderDal Order { get; }
        IOrderItemDal OrderItem { get; }
        IProductDal Product { get; }
        IRoleDal Role { get; }
        ISellerDal Seller { get; }
        IUserDal User { get; }
        IUserRoleDal UserRole { get; }
        void Save();
    }
}

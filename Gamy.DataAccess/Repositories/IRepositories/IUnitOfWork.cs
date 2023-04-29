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
        ISellerDal Seller { get; }
        IUserRoleDal UserRole { get; }
        ICommentDal Comment { get; }
        IAppUserDal AppUser { get; }
        ISubCategoryDal SubCategory { get; }
        IDeliveryDal Delivery { get; }
        void Save();
    }
}

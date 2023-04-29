using Gamy.DataAccess.Abstracts;
using Gamy.DataAccess.Database;
using Gamy.DataAccess.Repositories;
using Gamy.Entity.Modals;

namespace Gamy.DataAccess.MsEntityFramework
{
    public class DeliveryDal : Repository<Delivery>,IDeliveryDal
    {
        private readonly GamyContext _db;
        public DeliveryDal(GamyContext db) : base(db)
        {
            _db = db;
        }
    }
}

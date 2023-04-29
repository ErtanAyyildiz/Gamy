using Gamy.Business.Abstracts;
using Gamy.DataAccess.Repositories.IRepositories;
using Gamy.Entity.Modals;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gamy.Business.Concretes
{
    public class DeliveryService : IDeliveryService
    {
        private readonly IUnitOfWork _unitOfWork;

        public DeliveryService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public void Add(Delivery entity)
        {
            _unitOfWork.Delivery.Add(entity);
            _unitOfWork.Save();
        }

        public Delivery GetByID(int id)
        {
            return _unitOfWork.Delivery.GetByID(id);
        }

        public List<Delivery> GetList()
        {
            return _unitOfWork.Delivery.GetList();
        }

        public void Remove(Delivery entity)
        {
            _unitOfWork.Delivery.Remove(entity);
            _unitOfWork.Save();
        }

        public void Update(Delivery entity)
        {
            _unitOfWork.Delivery.Update(entity);
            _unitOfWork.Save();
        }
    }
}

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
    public class AppUserService : IAppUserService
    {
        private readonly IUnitOfWork _unitOfWork;

        public AppUserService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public void Add(AppUser entity)
        {
            _unitOfWork.AppUser.Add(entity);
            _unitOfWork.Save();
        }

        public AppUser GetByID(int id)
        {
            return _unitOfWork.AppUser.GetByID(id);
        }

        public List<AppUser> GetList()
        {
            return _unitOfWork.AppUser.GetList();
        }

        public void Remove(AppUser entity)
        {
            _unitOfWork.AppUser.Remove(entity);
            _unitOfWork.Save();
        }

        public void Update(AppUser entity)
        {
            _unitOfWork.AppUser.Update(entity);
            _unitOfWork.Save();
        }
    }
}

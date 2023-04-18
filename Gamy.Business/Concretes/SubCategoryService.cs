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
    public class SubCategoryService : ISubCategoryService
    {
        private readonly IUnitOfWork _unitOfWork;

        public SubCategoryService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public void Add(SubCategory entity)
        {
            _unitOfWork.SubCategory.Add(entity);
            _unitOfWork.Save();
        }

        public SubCategory GetByID(int id)
        {
            return _unitOfWork.SubCategory.GetByID(id);
        }

        public List<SubCategory> GetList()
        {
            return _unitOfWork.SubCategory.GetList();
        }

        public List<SubCategory> GetSubCategoriesByCategory(int categoryID)
        {
            return _unitOfWork.SubCategory.GetSubCategoriesByCategory(categoryID);
        }

        public void Remove(SubCategory entity)
        {
            _unitOfWork.SubCategory.Remove(entity);
            _unitOfWork.Save();
        }

        public void Update(SubCategory entity)
        {
            _unitOfWork.SubCategory.Update(entity);
            _unitOfWork.Save();
        }
    }
}

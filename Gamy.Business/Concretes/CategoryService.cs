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
    public class CategoryService : ICategoryService
    {
        private readonly IUnitOfWork _unitOfWork;

        public CategoryService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public void Add(Category entity)
        {
            _unitOfWork.Category.Add(entity);
            _unitOfWork.Save();
        }

        public Category GetByID(int id)
        {
            return _unitOfWork.Category.GetByID(id);
        }

        public List<Category> GetList()
        {
            return _unitOfWork.Category.GetList();
        }

        public void Remove(Category entity)
        {
            _unitOfWork.Category.Remove(entity);
            _unitOfWork.Save();
        }

        public void Update(Category entity)
        {
            _unitOfWork.Category.Update(entity);
            _unitOfWork.Save();
        }
    }
}

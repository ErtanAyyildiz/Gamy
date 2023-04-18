using Enoca.DataAccess.Wrappers.Filters;
using Gamy.Business.Abstracts;
using Gamy.DataAccess.Repositories.IRepositories;
using Gamy.Entity.Modals;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Gamy.Business.Concretes
{
    public class ProductService : IProductService
    {
        private readonly IUnitOfWork _unitOfWork;

        public ProductService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public void Add(Product entity)
        {
            _unitOfWork.Product.Add(entity);
            _unitOfWork.Save();
        }

        public Product GetByID(int id)
        {
            return _unitOfWork.Product.GetByID(id);
        }

        public List<Product> GetList()
        {
            return _unitOfWork.Product.GetList();
        }

        public List<Product> GetListByFilter(Expression<Func<Product, bool>> filter)
        {
            return _unitOfWork.Product.GetListByFilter(filter);
        }

        public List<Product> GetPageData(PaginationFilter filter)
        {
            return _unitOfWork.Product.GetPageData(filter);
        }

        public Product GetProductIsSponsered()
        {
            return _unitOfWork.Product.GetProductIsSponsered();
        }

        public List<Product> GetProductsOrderByCreationDate(PaginationFilter filter)
        {
            return _unitOfWork.Product.GetProductsOrderByCreationDate(filter);
        }

        public List<Product> GetProductsOrderByNumberDescending(PaginationFilter filter)
        {
            return _unitOfWork.Product.GetProductsOrderByNumberDescending(filter);
        }

        public void Remove(Product entity)
        {
            _unitOfWork.Product.Remove(entity);
            _unitOfWork.Save();
        }

        public void Update(Product entity)
        {
            _unitOfWork.Product.Update(entity);
            _unitOfWork.Save();
        }
    }
}

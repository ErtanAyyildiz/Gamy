using Enoca.DataAccess.Wrappers.Filters;
using Gamy.Entity.Modals;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Gamy.Business.Abstracts
{
    public interface IProductService:IGenericService<Product>
    {
        public Product GetProductIsSponsered();
        public List<Product> GetListByFilter(Expression<Func<Product, bool>> filter);
        public List<Product> GetPageData(PaginationFilter filter);
        public List<Product> GetProductsOrderByNumberDescending(PaginationFilter filter);
        public List<Product> GetProductsOrderByCreationDate(PaginationFilter filter);
        public Product GetProductWithIlan(int productId);

    }
}

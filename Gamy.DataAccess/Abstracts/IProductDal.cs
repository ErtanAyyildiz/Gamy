﻿using Enoca.DataAccess.Wrappers.Filters;
using Gamy.DataAccess.Repositories.IRepositories;
using Gamy.Entity.Modals;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gamy.DataAccess.Abstracts
{
    public interface IProductDal:IRepository<Product>
    {
        public Product GetProductIsSponsered();
        public List<Product> GetPageData(PaginationFilter filter);
        public List<Product> GetProductsOrderByNumberDescending(PaginationFilter filter);
        public List<Product> GetProductsOrderByCreationDate(PaginationFilter filter);
    }
}

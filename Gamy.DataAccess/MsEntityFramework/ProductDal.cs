using Enoca.DataAccess.Wrappers.Filters;
using Gamy.DataAccess.Abstracts;
using Gamy.DataAccess.Database;
using Gamy.DataAccess.Repositories;
using Gamy.Entity.Modals;
using Microsoft.EntityFrameworkCore;

namespace Gamy.DataAccess.MsEntityFramework
{
    public class ProductDal : Repository<Product>, IProductDal
    {
        private readonly GamyContext _db;

        public ProductDal(GamyContext db) : base(db)
        {
            _db = db;

        }

        public List<Product> GetPageData(PaginationFilter filter)
        {
            return _db.Products
                .Include(p => p.SubCategory)
                .Include(p => p.User)
                .Skip((filter.PageNumber - 1) * filter.PageSize)
                .Take(filter.PageSize)
                .ToList();
        }

        //public Product GetProductIsSponsered()
        //{
        //    return _db.Products
        //        .Where(p => p.Sponsor == true)
        //        .First();
        //}

        public List<Product> GetProductsOrderByCreationDate(PaginationFilter filter)
        {
            return _db.Products
                .Include(p => p.SubCategory)
                .Include(p => p.User)
                .OrderByDescending(p => p.CreateDate)
                .Skip((filter.PageNumber - 1) * filter.PageSize)
                .Take(filter.PageSize)
                .ToList();
        }

        public List<Product> GetProductsOrderByNumberDescending(PaginationFilter filter)
        {
            return _db.Products
                .Include(p => p.SubCategory)
                .ThenInclude(c => c.Category)
                .Include(p => p.User)
                .OrderByDescending(p => p.CountClick)
                .Skip((filter.PageNumber - 1) * filter.PageSize)
                .Take(filter.PageSize)
                .ToList();
        }

        public List<Product> GetProductsWithSubCategory(int subCategoryId)
        {
            return _db.Products
                .Include(s => s.SubCategory)
                .ThenInclude(c => c.Category)
                .Where(p => p.SubCategoryId == subCategoryId)
                .ToList();
        }

        public List<Product> GetProductsWithSubCategoryByUserId(int userId)
        {
            return _db.Products
                .Include(s => s.SubCategory)
                .ThenInclude(c => c.Category)
                .Where(p => p.UserId == userId)
                .ToList();
        }

        public Product GetProductWithIlan(int productId)
        {
            return _db.Products
                .Include(u => u.User)
                .Include(c => c.Comments)
                .Include(d=>d.Deliveries)
                .Include(s => s.SubCategory)
                .ThenInclude(c => c.Category)
                .Where(p => p.Id == productId)
                .First();
        }
    }
}

using Gamy.DataAccess.Abstracts;
using Gamy.DataAccess.Database;
using Gamy.DataAccess.Repositories;
using Gamy.Entity.Modals;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gamy.DataAccess.MsEntityFramework
{
    public class SubCategoryDal : Repository<SubCategory>, ISubCategoryDal
    {
        private readonly GamyContext _db;
        public SubCategoryDal(GamyContext db) : base(db)
        {
            _db= db;
        }

        public List<SubCategory> GetSubCategoriesByCategory(int categoryID)
        {
            return _db.SubCategories
                .Include(c=>c.Category)
                .Where(s => s.CategoryId == categoryID)
                .ToList();
        }
    }
}

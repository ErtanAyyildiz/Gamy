using Gamy.DataAccess.Abstracts;
using Gamy.DataAccess.Database;
using Gamy.DataAccess.Repositories;
using Gamy.Entity.Modals;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gamy.DataAccess.MsEntityFramework
{
    public class CategoryDal:Repository<Category>,ICategoryDal
    {
        private readonly GamyContext _db;

        public CategoryDal(GamyContext db) : base(db)
        {
            _db = db;

        }
    }
}

using Gamy.DataAccess.Database;
using Gamy.DataAccess.Repositories.IRepositories;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace Gamy.DataAccess.Repositories
{
    public class Repository<T> : IRepository<T> where T : class
    {
        private readonly GamyContext _db;
        internal DbSet<T> dbSet;

        public Repository(GamyContext db)
        {
            _db = db;
            this.dbSet = _db.Set<T>();
        }

        public void Add(T entity)
        {
            dbSet.Add(entity);
        }

        public T GetByID(int id)
        {
            return dbSet.Find(id);
        }

        public IEnumerable<T> GetList()
        {
            return dbSet.ToList();
        }

        public List<T> GetListByFilter(Expression<Func<T, bool>> filter)
        {
            return dbSet.Where(filter).ToList();
        }

        public void Remove(T entity)
        {
            dbSet.Remove(entity);
        }

        public void Update(T entity)
        {
            dbSet.Update(entity);
        }
    }
}

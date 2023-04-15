using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Gamy.Business.Abstracts
{
    public interface IGenericService<T> where T : class
    {
        void Add(T entity);
        void Remove(T entity);
        void Update(T entity);
        List<T> GetList();
        T GetByID(int id);
    }
}

using Gamy.Entity.Modals;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gamy.Business.Abstracts
{
    public interface IProductService:IGenericService<Product>
    {
        public Product GetProductIsSponsered();
    }
}

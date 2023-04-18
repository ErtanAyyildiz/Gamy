using Gamy.Entity.Modals;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gamy.DTO.ProductDTOs
{
    public class CategoryProductDTO
    {
        public List<Product> Products { get; set; }
        public string SubCategoryName { get; set; }
    }
}

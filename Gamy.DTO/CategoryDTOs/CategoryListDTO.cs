using Gamy.Entity.Modals;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gamy.DTO.CategoryDTOs
{
    public class CategoryListDTO
    {
        public List<Category> Categories { get; set; }
        public int CategoryId { get; set; }
    }
}

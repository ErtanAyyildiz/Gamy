using Gamy.Entity.Modals;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gamy.DTO.IlanDTOs
{
    public class CategoriesSubCategoriesDTO
    {
        public List<SubCategory> SubCategories{ get; set; }
        public List<Category> Categories { get; set; }
    }
}

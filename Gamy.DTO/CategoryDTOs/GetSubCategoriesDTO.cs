using Gamy.Entity.Modals;

namespace Gamy.DTO.CategoryDTOs
{
    public class GetSubCategoriesDTO
    {
        public List<SubCategory> SubCategories { get; set; }
        public string CategoryName { get; set; }
    }
}

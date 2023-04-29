using Gamy.Business.Abstracts;
using Gamy.Business.Concretes;
using Gamy.DTO.CategoryDTOs;
using Gamy.DTO.IlanDTOs;
using Microsoft.AspNetCore.Mvc;

namespace Gamy.UI.ViewComponents.Ilan
{
    public class SubKategorySelector : ViewComponent
    {
        private readonly ISubCategoryService _subCategoryService;

        public SubKategorySelector(ISubCategoryService subCategoryService)
        {
            _subCategoryService = subCategoryService;
        }

        public IViewComponentResult Invoke(int categoryId)
        {
            var items=_subCategoryService.GetSubCategoriesByCategory(categoryId);
            return View(items);
        }
    }
}

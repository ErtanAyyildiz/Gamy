using Gamy.Business.Abstracts;
using Gamy.DTO.CategoryDTOs;
using Gamy.DTO.IlanDTOs;
using Microsoft.AspNetCore.Mvc;

namespace Gamy.UI.ViewComponents.Ilan
{
    public class KategorySelector:ViewComponent
    {
        private readonly ICategoryService _categoryService;

        public KategorySelector(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }

        public IViewComponentResult Invoke()
        {
            //CategoryListDTO items = new CategoryListDTO();
            //items.CategoryId = categoryId;
            //items.Categories = _categoryService.GetList();

            return View();
        }
    }
}

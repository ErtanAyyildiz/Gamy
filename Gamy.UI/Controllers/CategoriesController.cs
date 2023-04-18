using Gamy.Business.Abstracts;
using Gamy.DTO.CategoryDTOs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Gamy.UI.Controllers
{
    [AllowAnonymous]
    public class CategoriesController : Controller
    {
        private readonly ISubCategoryService _subCategoryService;
        private readonly ICategoryService _categoryService;

        public CategoriesController(ICategoryService categoryService, ISubCategoryService subCategoryService)
        {
            _categoryService = categoryService;
            _subCategoryService = subCategoryService;   
        }

        public IActionResult Index()
        {
            var categories = _categoryService.GetList();
            return View(categories);
        }
        [HttpGet("category/{categoryName}/{categoryId:int}")]
        public IActionResult GetSubCategories(string categoryName, int categoryId)
        {
            var subCategories = _subCategoryService.GetSubCategoriesByCategory(categoryId);
            GetSubCategoriesDTO subCategoriesDTO = new GetSubCategoriesDTO
            {
                SubCategories = subCategories,
                CategoryName = categoryName,
            };
            return View(subCategoriesDTO);
        }
    }
}

using Gamy.Business.Abstracts;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Gamy.UI.Controllers
{
    [AllowAnonymous]
    public class CategoryController : Controller
    {
        private readonly IProductService _productService;
        private readonly ICategoryService _categoryService;

        public CategoryController(IProductService productService, ICategoryService categoryService)
        {
            _productService = productService;
            _categoryService = categoryService;
        }

        [HttpGet("category/{categoryName}/{categoryId:int}/{subCategoryId:int}")]
        public IActionResult Index(string categoryName, int categoryId, int subCategoryId)
        {
            var products = _productService.GetListByFilter(x=>x.SubCategoryId==subCategoryId);
            return View();
        }
    }
}

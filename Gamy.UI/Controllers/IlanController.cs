using Enoca.DataAccess.Wrappers.Filters;
using Gamy.Business.Abstracts;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Gamy.UI.Controllers
{
    [AllowAnonymous]
    public class IlanController : Controller
    {
        private readonly IProductService _productService;

        public IlanController(IProductService productService)
        {
            _productService = productService;
        }
        [HttpGet("product/{productName}/{productId:int}")]
        public IActionResult Index(string productName, int productId)
        {
            PaginationFilter paginationFilter = new PaginationFilter(1, 12);
            var product=_productService.GetProductWithIlan(productId);
            product.SubCategory.Products = _productService.GetPageData(paginationFilter);
            return View(product);
        }


    }
}

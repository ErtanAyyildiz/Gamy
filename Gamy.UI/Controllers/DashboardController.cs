using Gamy.Business.Abstracts;
using Microsoft.AspNetCore.Mvc;

namespace Gamy.UI.Controllers
{
    public class DashboardController : Controller
    {
        private readonly IProductService _productService;

        public DashboardController(IProductService productService)
        {
            _productService = productService;
        }

        public IActionResult Index()
        {
            var userId= HttpContext.User.Claims.First().Value;
            var products = _productService.GetProductsWithSubCategory(Convert.ToInt32(userId));
            return View(products);
        }

        public IActionResult Onay()
        {
            return View();
        }
    }
}

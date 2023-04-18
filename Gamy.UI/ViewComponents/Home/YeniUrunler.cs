using Enoca.DataAccess.Wrappers.Filters;
using Gamy.Business.Abstracts;
using Microsoft.AspNetCore.Mvc;

namespace Gamy.UI.ViewComponents.Home
{
    public class YeniUrunler : ViewComponent
    {
        private readonly IProductService _productService;

        public YeniUrunler(IProductService productService)
        {
            _productService = productService;
        }

        public IViewComponentResult Invoke()
        {
            var validFiter = new PaginationFilter();
            var yenidDataProduct = _productService.GetProductsOrderByCreationDate(validFiter);
            if (yenidDataProduct != null)
            {
                return View(yenidDataProduct);
            }
            return View();
        }
    }
}

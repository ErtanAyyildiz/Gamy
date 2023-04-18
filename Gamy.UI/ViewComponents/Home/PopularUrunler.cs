using Enoca.DataAccess.Wrappers;
using Enoca.DataAccess.Wrappers.Filters;
using Gamy.Business.Abstracts;
using Gamy.Entity.Modals;
using Microsoft.AspNetCore.Mvc;

namespace Gamy.UI.ViewComponents.Home
{
    public class PopularUrunler : ViewComponent
    {
        private readonly IProductService _productService;

        public PopularUrunler(IProductService productService)
        {
            _productService = productService;
        }

        public IViewComponentResult Invoke()
        {
            var validFiter = new PaginationFilter();
            var populardDataProduct = _productService.GetProductsOrderByNumberDescending(validFiter);
            if (populardDataProduct != null)
            {
                return View(populardDataProduct);
            }
            return View();
        }
    }
}

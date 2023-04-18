using Enoca.DataAccess.Wrappers.Filters;
using Gamy.Business.Abstracts;
using Microsoft.AspNetCore.Mvc;

namespace Gamy.UI.ViewComponents.Home
{
    public class VitrinUrunler : ViewComponent
    {
        private readonly IProductService _productService;

        public VitrinUrunler(IProductService productService)
        {
            _productService = productService;
        }
        public IViewComponentResult Invoke()
        {
            var validFiter = new PaginationFilter();
            var pagedDataProduct = _productService.GetPageData(validFiter);
            var vitrinUruns = _productService.GetListByFilter(x => x.Vitrin == true);
            if (pagedDataProduct != null)
            {
                return View(vitrinUruns);
            }
            return View();
        }
    }
}

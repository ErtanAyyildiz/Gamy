using Gamy.Business.Abstracts;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Gamy.UI.ViewComponents.Home
{
    public class IndexMainSlider : ViewComponent
    {
        private readonly IProductService _productService;
        private readonly IAppUserService _userService;
        public IndexMainSlider(IProductService productService, IAppUserService userService)
        {
            _productService = productService;
            _userService = userService;
        }

        public IViewComponentResult Invoke()
        {
            //var sponsorproduct = _productService.GetProductIsSponsered();
            //ViewBag.SponsorTitle = sponsorproduct.Name;
            //ViewBag.SponsorPrice = sponsorproduct.Price;
            //var user = _userService.GetByID(sponsorproduct.UserId);
            //ViewBag.UserName = user.UserName;
            return View();
        }
    }
}

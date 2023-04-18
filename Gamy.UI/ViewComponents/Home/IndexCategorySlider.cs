using Microsoft.AspNetCore.Mvc;

namespace Gamy.UI.ViewComponents.Home
{
    public class IndexCategorySlider : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View();
        }
    }
}

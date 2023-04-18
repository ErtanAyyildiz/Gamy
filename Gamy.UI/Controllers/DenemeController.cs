using Microsoft.AspNetCore.Mvc;

namespace Gamy.UI.Controllers
{
    public class DenemeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}

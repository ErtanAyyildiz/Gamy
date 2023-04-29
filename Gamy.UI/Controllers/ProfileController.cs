using Microsoft.AspNetCore.Mvc;

namespace Gamy.UI.Controllers
{
    public class ProfileController : Controller
    {
        [HttpGet]
        public IActionResult Index(string userName)
        {
            return View();
        }
    }
}

using Microsoft.AspNetCore.Mvc;

namespace Gamy.UI.Controllers
{
    public class MessagesController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}

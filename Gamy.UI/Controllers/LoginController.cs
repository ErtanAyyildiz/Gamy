using Gamy.DTO.UserDTOs;
using Gamy.Entity.Modals;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NuGet.Protocol.Plugins;

namespace Gamy.UI.Controllers
{
    [AllowAnonymous]
    public class LoginController : Controller
    {
        private readonly SignInManager<AppUser> _signInManager;
        private readonly UserManager<AppUser> _userManager;

        public LoginController(SignInManager<AppUser> signInManager, UserManager<AppUser> userManager)
        {
            _signInManager = signInManager;
            _userManager = userManager;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Index(string username, string password, bool rememberMe)
        {
            //var user = await _userManager.Users.Where(u => u.UserName == username).FirstOrDefaultAsync();
            if (String.IsNullOrEmpty(username))
            {
                TempData["ErrorMessage"] = "Kullanıcı adı veya parola Boş Geçilemez!";
                return RedirectToAction("Index", "Home");
            }

            if (String.IsNullOrEmpty(password))
            {
                TempData["ErrorMessage"] = "Kullanıcı adı veya parola Boş Geçilemez!";
                return RedirectToAction("Index", "Home");
            }

            var result = await _signInManager.PasswordSignInAsync(username, password, rememberMe, lockoutOnFailure: false);

            if (result.Succeeded)
            {
                TempData["ErrorMessage"] = "Başarılı giriş yaptınız...";
                return RedirectToAction("Index", "Home");
            }
            else if (result.IsNotAllowed)
            {
                TempData["ErrorMessage"] = "Bu kullanıcı hesabı geçici olarak kilitlenmiştir.";
                return RedirectToAction("Index", "Home");

            }
            else if (result.IsLockedOut)
            {
                TempData["ErrorMessage"] = "Bu kullanıcı hesabı kilitlenmiştir.";
                return RedirectToAction("Index", "Home");
            }
            else
            {
                TempData["ErrorMessage"] = "Kullanıcı adı veya parola hatalı!";
                return RedirectToAction("Index", "Home");
            }
        }
    }
}

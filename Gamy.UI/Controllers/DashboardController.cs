using Gamy.Business.Abstracts;
using Gamy.DTO.UserDTOs;
using Gamy.Entity.Modals;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Text;

namespace Gamy.UI.Controllers
{
    public class DashboardController : Controller
    {
        private readonly IProductService _productService;
        private readonly IAppUserService _appUserService;
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;

        public DashboardController(IProductService productService, IAppUserService appUserService, UserManager<AppUser> userManager, SignInManager<AppUser> signInManager)
        {
            _productService = productService;
            _appUserService = appUserService;
            _userManager = userManager;
            _signInManager = signInManager;
        }

        public IActionResult Index()
        {
            var userId = HttpContext.User.Claims.First().Value;
            var products = _productService.GetProductsWithSubCategoryByUserId(Convert.ToInt32(userId));
            return View(products);
        }

        public IActionResult Onay()
        {
            return View();
        }

        public IActionResult HakkimdaGuncelle(string about)
        {
            var userId = HttpContext.User.Claims.First().Value;
            var product = _appUserService.GetByID(Convert.ToInt32(userId));
            product.AboutMe = about;
            _appUserService.Update(product);

            return View();
        }

        public async Task<IActionResult> SifreGuncelle(ChangePasswordDTO p)
        {
            var user = await _userManager.GetUserAsync(User);

            var result = await _userManager.ChangePasswordAsync(user, p.OldPassword, p.NewPassword);
            if (result.Succeeded)
            {
                TempData["ErrorMessage"] = "Şifre Başarı ile değiştirildi...";
                await _signInManager.RefreshSignInAsync(user);
                return RedirectToAction("Index", "Dashboard");
            }
            else
            {
                var str = "";
                foreach (var error in result.Errors)
                {
                    str += error.Description;
                }
                TempData["ErrorMessage"] = str;
                return RedirectToAction("Index", "Dashboard");
            }
        }

        public async Task<IActionResult> EmailGuncelle(ChangeEmailDTO p)
        {
            var user=await _userManager.GetUserAsync(User);

            var currentEmail = user.Email;

            if (currentEmail.Equals(p.NewEmail))
            {
                TempData["ErrorMessage"] = "Yeni e-posta adresi, mevcut e-posta adresiyle aynı olamaz.";
                return RedirectToAction("Index", "Dashboard");
            }
            else if (!currentEmail.Equals(p.OldEmail))
            {
                TempData["ErrorMessage"] = "Eski e-posta adresi, mevcut e-posta adresiyle uyuşmuyor.";
                return RedirectToAction("Index", "Dashboard");
            }
            else if (!p.NewEmail.Equals(p.ConfirmEmail))
            {
                TempData["ErrorMessage"] = "Yeni e-posta adresi ile (Tekrar) Birbiriyle uyuşmuyor.";
                return RedirectToAction("Index", "Dashboard");
            }
            user.Email = p.NewEmail;
            var result=await _userManager.UpdateAsync(user);
            if (result.Succeeded)
            {
                TempData["ErrorMessage"] = "e-posta değişiklik işlemi başarı ile gerçekleştirilmiştir.";
                return RedirectToAction("Index", "Dashboard");
            }
            else
            {
                var str = "";
                foreach (var error in result.Errors)
                {
                    str += error.Description;
                }
                TempData["ErrorMessage"] = str;
                return RedirectToAction("Index", "Dashboard");
            }
        }


        [HttpPost]
        public IActionResult ChargeBalance(decimal balance)
        {
            // Gpay ödeme işlemi için gerekli parametreleri belirle
            string apiKey = "AIzaSyCNK1GInC4wJahFg8GRQM_cLfJXmSImH84";
            string merchantId = "YOUR_MERCHANT_ID_HERE";
            decimal amount = balance;
            string currencyCode = "TRY";

            // Gpay API'ye ödeme isteği gönder ve sonucu al
            var client = new HttpClient();
            var response = client.PostAsync("https://api.gpay.com/payment",
                new StringContent(
                    $"apiKey={apiKey}&merchantId={merchantId}&amount={amount}&currencyCode={currencyCode}",
                    Encoding.UTF8,
                    "application/x-www-form-urlencoded")
            ).Result;

            // Gpay API'den gelen sonucu oku
            var result = response.Content.ReadAsStringAsync().Result;

            // Ödeme işlemi başarılıysa kullanıcının bakiyesini güncelle
            if (result == "SUCCESS")
            {
                var user = _userManager.GetUserAsync(User).Result;
                user.Balance += balance;
                _userManager.UpdateAsync(user).Wait();

                // Bakiye yüklemesi başarılı mesajını göster
                TempData["Message"] = $"Bakiyeniz başarıyla yüklendi. Yeni bakiyeniz: {user.Balance:C}";

                // Ana sayfaya yönlendir
                return RedirectToAction("Index");
            }

            // Ödeme işlemi başarısız olduysa hata mesajını göster
            TempData["Error"] = "Ödeme işlemi başarısız oldu.";

            // Aynı sayfaya geri dön
            return View();
        }
    }
}

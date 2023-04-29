using Enoca.DataAccess.Wrappers.Filters;
using Gamy.Business.Abstracts;
using Gamy.Business.Services;
using Gamy.DTO.IlanDTOs;
using Gamy.Entity.Modals;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System.IO;
using System.Security.Claims;

namespace Gamy.UI.Controllers
{
    [AllowAnonymous]
    public class IlanController : Controller
    {
        private readonly SignInManager<AppUser> _signInManager;
        private readonly IProductService _productService;
        private readonly ICategoryService _categoryService;
        private readonly ISubCategoryService _subCategoryService;
        private readonly IDeliveryService _deliveryService;
        private readonly IIsActiveService _isActiveService;
        private readonly IWebHostEnvironment _webHostEnvironment;

        public IlanController(IProductService productService, ICategoryService categoryService, ISubCategoryService subCategoryService, IWebHostEnvironment webHostEnvironment, IIsActiveService isActiveService, IDeliveryService deliveryService, SignInManager<AppUser> signInManager)
        {
            _productService = productService;
            _categoryService = categoryService;
            _subCategoryService = subCategoryService;
            _signInManager = signInManager;
            _isActiveService = isActiveService;
            _webHostEnvironment = webHostEnvironment;
            _deliveryService = deliveryService;
        }
        [HttpGet("product/{productName}/{productId:int}")]
        public IActionResult Index(string productName, int productId)
        {
            PaginationFilter paginationFilter = new PaginationFilter(1, 12);
            var product = _productService.GetProductWithIlan(productId);
            product.SubCategory.Products = _productService.GetPageData(paginationFilter);
            return View(product);
        }

        [HttpGet("ilan/update/{productId:int}")]
        public IActionResult Update(int productId)
        {
            var items = new IlanProductCategoriesDTO();
            items.Product = _productService.GetProductWithIlan(productId);
            items.Categories = _categoryService.GetList();
            items.SubCategories = _subCategoryService.GetList();

            return View(items);
        }

        [HttpGet]
        public IActionResult GetSubCategories(int categoryId)
        {
            var subCategories = _subCategoryService.GetSubCategoriesByCategory(categoryId);
            var result = subCategories.Select(c => new
            {
                id = c.Id,
                name = c.Name
            }).ToList();
            return Json(result);
        }

        [HttpGet("ilan/productedit/{subCategoryId:int}/{productId:int}")]
        public IActionResult ProductEdit(int subCategoryId, int productId)
        {
            var items = _productService.GetProductWithIlan(productId);
            items.SubCategoryId = subCategoryId;
            _productService.Update(items);

            return View(items);
        }

        [HttpPost]
        public IActionResult ProductEdit(int Id, int type, string Name, string Description, int DeliveryTime, decimal ilan_fiyat, string[] addmore, IFormFile? ProductImage)
        {
            var items = _productService.GetProductWithIlan(Id);
            if (type == 1)
            {
                items.StokluUrun = false;
            }
            if (type == 2)
            {
                items.StokluUrun = true;
            }
            items.Name = Name;
            items.Description = Description;
            items.DeliveryTime = DeliveryTime;
            items.Price = ilan_fiyat;
            List<Delivery> deliveries = new List<Delivery>();
            for (int i = 0; i < items.Deliveries.Count(); i++)
            {
                items.Deliveries[i].DeliveryText = addmore[i];
            }
            for (int i = items.Deliveries.Count(); i < addmore.Length; i++)
            {
                Delivery delivery = new Delivery();
                delivery.ProductId = items.Id;
                delivery.DeliveryText = addmore[items.Deliveries.Count()];
                deliveries.Add(delivery);
                _deliveryService.Add(delivery);
            }
            if (ProductImage != null && ProductImage.Length > 0)
            {
                string fileName = Guid.NewGuid().ToString() + Path.GetExtension(ProductImage.FileName);
                string filePath = Path.Combine(_webHostEnvironment.WebRootPath, "images", fileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    ProductImage.CopyToAsync(stream);
                }

                items.ImageUrl =/* "/wwwroot/images/" +*/ fileName;
            }


            _productService.Update(items);

            return RedirectToAction("BoostEdit", "Ilan", new { productId = items.Id });
        }

        [HttpGet]
        public IActionResult BoostEdit(int productId)
        {
            ViewBag.ProductId = productId;
            return View();
        }

        [HttpPost]
        public IActionResult BoosEdit(int productId, int vitrin_tarih, int one_cikar_tarih)
        {
            var product = _productService.GetProductWithIlan(productId);
            if (product.VitrinDateTime > DateTime.Now)
            {
                int gun = vitrin_tarih; // örnek olarak 5 gün ekleme yapacak şekilde tanımlandı
                DateTime yeniTarih = product.VitrinDateTime.Value.AddDays(gun);
                product.VitrinDateTime = yeniTarih;
                // veritabanındaki tarihi güncelleme işlemi
            }
            else
            {
                int gun = vitrin_tarih;
                var dateTime=DateTime.Now;
                product.VitrinDateTime = dateTime.AddDays(gun);
            }
            if (product.OneCikanDateTime > DateTime.Now)
            {
                int gun = one_cikar_tarih; // örnek olarak 5 gün ekleme yapacak şekilde tanımlandı
                DateTime yeniTarih = product.OneCikanDateTime.Value.AddDays(gun);
                product.OneCikanDateTime=yeniTarih;
                // veritabanındaki tarihi güncelleme işlemi
            }
            else
            {
                int gun = one_cikar_tarih;
                var dateTime = DateTime.Now;
                product.OneCikanDateTime = dateTime.AddDays(gun);
            }
            _productService.Update(product);

            return View();
        }

        public IActionResult Insert()
        {
            CategoriesSubCategoriesDTO dto=new CategoriesSubCategoriesDTO();
            dto.Categories = _categoryService.GetList();
            dto.SubCategories = _subCategoryService.GetList();
            return View(dto);
        }
        [HttpGet("ilan/productinsert/{subCategoryId:int}")]
        public IActionResult ProductInsert(int subCategoryId)
        {
            var subCategory = _subCategoryService.GetByID(subCategoryId);
            return View(subCategory);
        }

        [HttpPost]
        public IActionResult ProductInsert(CreateIlanDTO dto, IFormFile ProductImage)
        {
            var userId = HttpContext.User.Claims.First().Value;
            dto.UserId =Convert.ToInt32(userId);

            if (ProductImage != null && ProductImage.Length > 0)
            {
                string fileName = Guid.NewGuid().ToString() + Path.GetExtension(ProductImage.FileName);
                string filePath = Path.Combine(_webHostEnvironment.WebRootPath, "images", fileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    ProductImage.CopyToAsync(stream);
                }

                dto.ImageUrl =/* "/wwwroot/images/" +*/ fileName;
            }

            TempData["dto"] = JsonConvert.SerializeObject(dto);


            return RedirectToAction("BoostInsert","Ilan");
        }

        [HttpGet]
        public IActionResult BoostInsert()
        {
            return View();
        }

        [HttpPost]
        public IActionResult BoostInsert(int vitrin_tarih, int one_cikar_tarih)
        {
            var dto = JsonConvert.DeserializeObject<CreateIlanDTO>((string)TempData["dto"]);

            Product product = new()
            {
                Name=dto.Name,
                Description=dto.Description,
                Availability = true,
                CreateDate = DateTime.Now,
                DeliveryTime = dto.DeliveryTime,
                ImageUrl = dto.ImageUrl,
                SubCategoryId = dto.SubCategoryId,
                Price = dto.Price,
                StokluUrun = dto.StokluUrun,
                UserId=dto.UserId,
                WarrantyPeriod=29,
                ProductType="deneme"
            };

            if (dto.type == 1)
            {
                product.StokluUrun = false;
            }
            if (dto.type == 2)
            {
                product.StokluUrun = true;
            }

            if (vitrin_tarih!=0 || !vitrin_tarih.Equals(0))
            {
                int gun = vitrin_tarih;
                var dateTime = DateTime.Now;
                product.VitrinDateTime = dateTime.AddDays(gun);
                product.Vitrin = true;
            }
            else
            {
                product.Vitrin = false;
            }
            if (one_cikar_tarih!=0 || !one_cikar_tarih.Equals(0))
            {
                int gun = one_cikar_tarih;
                var dateTime = DateTime.Now;
                product.OneCikanDateTime = dateTime.AddDays(gun);
                product.OneCikanUrun = true;
            }
            else
            {
                product.OneCikanUrun = false;
            }

            _productService.Add(product);

            var productId = product.Id;
            for (int i = 0; i < dto.addmore.Length; i++)
            {
                Delivery delivery = new Delivery();
                delivery.ProductId = productId;
                delivery.DeliveryText = dto.addmore[i];
                _deliveryService.Add(delivery);
            }
            
            return RedirectToAction("Index","Home");
        }

    }
}

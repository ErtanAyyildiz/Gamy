using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gamy.Entity.Modals
{
    public class Product:BaseEntity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string ImageUrl { get; set; }
        public decimal Price { get; set; }
        public int StockAmount { get; set; }
        public bool Availability { get; set; }
        public int UserId { get; set; }
        public AppUser User { get; set; }
        public DateTime CreateDate { get; set; } = DateTime.Now;
        public DateTime FinishDate { get; set; }
        public int DeliveryTime { get; set; }
        public int WarrantyPeriod { get; set; }
        public string ProductType { get; set; }
        public bool OneCikanUrun { get; set; }
        public bool Vitrin { get; set; }
        public bool Firsat { get; set; }
        public bool Sponsor { get; set; }
        public int CountClick { get; set; }
        public List<Comment> Comments { get; set; }
        public SubCategory SubCategory { get; set; }
        public int SubCategoryId { get; set; }

    }
}

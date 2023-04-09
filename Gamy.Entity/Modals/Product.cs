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
        public decimal Price { get; set; }
        public int StockAmount { get; set; }
        public string SellerId { get; set; }
        public int CategoryId { get; set; }
        public Seller Seller { get; set; }
    }
}

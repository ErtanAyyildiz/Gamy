using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gamy.Entity.Modals
{
    public class Order:BaseEntity
    {
        public string CustomerId { get; set; }
        public string SellerId { get; set; }
        public decimal TotalPrice { get; set; }
        public DateTime OrderDate { get; set; }
        public User Customer { get; set; }
        public Seller Seller { get; set; }
    }
}

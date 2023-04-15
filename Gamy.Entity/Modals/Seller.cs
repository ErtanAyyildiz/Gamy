using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gamy.Entity.Modals
{
    public class Seller:BaseEntity
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public List<Product> Products { get; set; }
        public List<Order> Orders { get; set; }
        public AppUser User { get; set; }
        public List<Comment> Comments { get; set; }
    }
}

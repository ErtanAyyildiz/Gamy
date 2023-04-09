using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gamy.Entity.Modals
{
    public class Cart:BaseEntity
    {
        public List<CartItem> Items { get; set; }
        public User User { get; set; }
    }
}

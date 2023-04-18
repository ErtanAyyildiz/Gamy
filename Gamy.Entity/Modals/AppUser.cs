using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gamy.Entity.Modals
{
    public class AppUser:IdentityUser<int>
    {
        public string NameSurname { get; set; }
        public bool IsSeller { get; set; }
        public DateTime BirthDateTime { get; set; }

        public List<Product> Products { get; set; }
        public List<Order> Orders { get; set; }
        public List<Comment> Comments { get; set; }
    }
}

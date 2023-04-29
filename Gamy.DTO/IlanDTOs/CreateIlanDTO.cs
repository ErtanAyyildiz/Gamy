using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gamy.DTO.IlanDTOs
{
    public class CreateIlanDTO
    {
        public int SubCategoryId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string ImageUrl { get; set; }
        public int DeliveryTime { get; set; }
        public decimal Price { get; set; }
        public bool StokluUrun { get; set; } = true;
        public string[] addmore { get; set; }
        //public int vitrin_tarih { get; set; }
        //public int one_cikar_tarih { get; set; }
        public int type { get; set; }
        public int UserId { get; set; }

        //userID
        //Availability
        //WarrantyPeriod
        //ProductType
        //vitrin
        //onecikan
    }
}

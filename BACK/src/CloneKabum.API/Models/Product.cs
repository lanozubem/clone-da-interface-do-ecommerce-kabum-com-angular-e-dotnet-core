using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace CloneKabum.API.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double oldPrice { get; set; }
        public double Price { get; set; }
        public int Quantity { get; set; }
        public string ImageUrl { get; set; }
        public string Description { get; set; }
        public bool OnPromotion { get; set; }
        public double Discount { get; set; }
    }
}
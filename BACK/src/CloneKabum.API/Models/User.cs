using System.Collections.Generic;

namespace CloneKabum.API.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Password { get; set; }
        public string ImageUrl { get; set; }
        public List<Product> ProductFavorit { get; set; }
    }
}
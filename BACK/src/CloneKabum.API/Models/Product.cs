namespace CloneKabum.API.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Manufacturer { get; set; }
        public double OldPrice { get; set; }
        public double Price { get; set; }
        public int Quantity { get; set; }
        public bool OnPromotion { get; set; }
        public int Discount { get; set; }
        public string imageUrl { get; set; }
    }
}
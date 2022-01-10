namespace CloneKabum.API.Models
{
    public class Address
    {
        public int Id { get; set; }
        public string ZIP { get; set; }
        public string PublicPlace { get; set; }
        public string Number { get; set; }
        public string District { get; set; }
        public string City { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public string UF{ get; set; }
    }
}
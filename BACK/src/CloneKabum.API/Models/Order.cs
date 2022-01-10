using System;

namespace CloneKabum.API.Models
{
    public class Order
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public int AddressId { get; set; }
        public Address Address { get; set; }
        public string Status { get; set; }
        public string FormOfPayment { get; set; }
        public DateTime Data { get; set; }
    }
}
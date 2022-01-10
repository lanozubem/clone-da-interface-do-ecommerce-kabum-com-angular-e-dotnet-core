using System.Collections.Generic;
using System.Linq;
using CloneKabum.API.Models;

namespace CloneKabum.API.Repositories
{
    public static class OrderRepository
    {
        public static List<Order> Orders = new List<Order>
        {

            new Order
            {
                Id = 1,
                UserId = 1,
                AddressId = 1,
                FormOfPayment = "PIX",
                Status = "Aguardando pagamento",
                Data = System.DateTime.Now,
            },

        };

        public static List<Order> GetOrders(User user) => Orders.Where(order => order.UserId == user.Type).ToList();
    }
}
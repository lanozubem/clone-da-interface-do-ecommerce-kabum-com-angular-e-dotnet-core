using System.Collections.Generic;
using CloneKabum.API.Models;

namespace CloneKabum.API.Repositories
{
    public class AddressRepository
    {
        public static List<Address> Addresses = new List<Address>
        {

            new Address
            {
                Id = 1,
                UserId = 1,
                ZIP = "55380-000",
                PublicPlace = "Rua Rita Alves Espíndola",
                Number = "18",
                District = "Vila Pombos",
                City = "Cachoeirinha",
                UF = "PE"
            },

        };
    }
}
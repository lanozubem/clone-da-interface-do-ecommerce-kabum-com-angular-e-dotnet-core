using System.Collections.Generic;
using System.Linq;
using CloneKabum.API.Models;

namespace CloneKabum.API.Repositories
{
    public class UserRepository
    {
        private static int _nextInt = 2;

        public static List<User> Users = new List<User>
        {
            new User
            {
                Id = 1,
                Email = "zubemluano@gmail.com",
                Phone = "81 91234-5678",
                Name = "Luano",
                Password = "loop",
                ImageUrl = "https://media-exp1.licdn.com/dms/image/C4E03AQEU3PdkA8XZRA/profile-displayphoto-shrink_200_200/0/1641794881830?e=1647475200&v=beta&t=ddDT3O4-45ysFiPqAPj5Xwj1GTHqNQlYzzmbXJsPSWU",
                ProductFavorit = new List<Product>(){
                    new Product()
                    {
                        Id = 4,
                        Name = "Memória XPG Spectrix D45G, RGB, 8GB, 3600MHz, DDR4, CL18, Preta - AX4U36008G18I-CBKD45G",
                        Description = "",
                        Manufacturer = "XPG",
                        OldPrice = 399.88,
                        Price = 299.9,
                        Quantity = 0,
                        OnPromotion = true,
                        Discount = 11,
                        imageUrl = "https://images.kabum.com.br/produtos/fotos/194492/memoria-xpg-spectrix-d45g-rgb-8gb-3600mhz-ddr4-cl18-preta-ax4u36008g18i-cbkd45g_1632507273_gg.jpg"
                    },
                     new Product
                    {
                        Id = 5,
                        Name = "Monitor Gamer LG Ultra Gear 27' IPS, Wide, 240 Hz, Full HD, 1ms, FreeSync Premium, HDR 10, 99% sRGB, HDMI/DisplayPort, VESA - 27GN750-B.AWZ",
                        Description = "",
                        Manufacturer = "LG",
                        OldPrice = 3.945,
                        Price = 2.359,
                        Quantity = 86,
                        OnPromotion = true,
                        Discount = 33,
                        imageUrl = "https://images.kabum.com.br/produtos/fotos/156100/monitor-gamer-lg-ultragear-27-ips-240hz-full-hd-hdr10-hdmi-displayport-1ms-nvidia-gsync-e-amd-freesync-premium-27gn750-b-awz_1619796396_gg.jpg"
                    },
                    new Product(){}
                },
            },
        };


        public static void AddUser(User user)
        {
            user.Id = _nextInt++;
            // if a lista não for inicializada não será possível atribuir produtos  a lista de favoritos
            user.ProductFavorit = new List<Product>();
            user.ProductFavorit.Add(new Product());
            Users.Add(user);
        }

        // ** adiciona um produto a lista de produtos favoritos do usuário **
        // verifica se usuário e produto existem
        // se existirem é adicionado o produto a lista do usuario
        public static void AddFavoritProduct(int userId, int productId)
        {

            var userExist = new UserRepository().Get(userId);
            var productExist = ProductRepository.Get(productId);

            if (userExist != null && productExist != null)
            {
                System.Console.WriteLine("ADICIONADO");
                userExist.ProductFavorit.Add(productExist);
            }
        }

        public static void RemoveFavoriteProduct(int userId, int productId)
        {

            var userExist = new UserRepository().Get(userId);
            var favorited = userExist.ProductFavorit.FirstOrDefault(f => f.Id == productId);

            if (favorited.Id == productId)
            {
                System.Console.WriteLine("REMOVIDO");
                userExist.ProductFavorit.Remove(favorited);
            }
        }

        public User GetByEmail(string email)
        {
            return Users.Where(x => x.Email.ToLower() == email.ToLower())
                .FirstOrDefault();
        }

        public User Get(int id) => Users.FirstOrDefault(u => u.Id == id);

        public List<Product> GetFavorits(int userId)
        {
            var userExist = new UserRepository().Get(userId);
            if (userExist is null)
                return null;

            var products = new List<Product>();

            // Aqui ignoramos aquele objeto nulo que adicionamos a instanciação da lista quando o usuário efetua registro no sistema
            foreach (var item in userExist.ProductFavorit)
            {
                // Aqui atribui-se a uma nova lista os objetos não nulos
                if (!string.IsNullOrEmpty(item.Name))
                {
                    products.Add(item);
                }
            }

            return products;
        }

        public void Update(User user)
        {
            var index = Users.FindIndex(u => u.Id == user.Id);

            if (index == -1)
                return;

            Users[index] = user;
        }
    }
}
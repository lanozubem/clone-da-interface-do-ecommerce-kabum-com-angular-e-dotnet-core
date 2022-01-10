using System.Collections.Generic;
using System.Linq;
using CloneKabum.API.Models;

namespace CloneKabum.API.Repositories
{
    public static class ProductRepository
    {
        private static int _nextId = 10;
        public static List<Product> Products = new List<Product>
        {

            new Product
            {
                Id = 1,
                Name = "Notebook Gamer Acer Aspire Nitro 5 AMD Ryzen 5-4600H, GeForce GTX 1650, 8GB RAM, SSD 512GB NVMe, 15.6 IPS FHD, W10 - AN515-44-R54Q",
                Description = "",
                Manufacturer = "Acer",
                OldPrice = 9.022,
                Price = 5.899,
                Quantity = 25,
                OnPromotion = true,
                Discount = 31,
                imageUrl = "https://images.kabum.com.br/produtos/fotos/184889/notebook-gamer-ace-nitro-5-amd-ryzen-r5-4600h-six-core-nvidia-geforce-gtx-1650-8gb-ram-ssd-512gb-15-6-win10-preto-an515-44-r54q_1628006097_gg.jpg"
            },
            new Product
            {
                Id = 2,
                Name = "Gabinete Gamer Asus TUF Gaming GT501 Mid Tower, Aura Sync RGB, com FAN, Lateral em Vidro - 90DC0012-B40000",
                Description = "",
                Manufacturer = "Asus",
                OldPrice = 2.117,
                Price = 1.699,
                Quantity = 6,
                OnPromotion = true,
                Discount = 5,
                imageUrl = "https://images.kabum.com.br/produtos/fotos/114480/gabinete-gamer-asus-tuf-gaming-gt501-mid-tower-aura-sync-rgb-com-fan-lateral-em-vidro-90dc0012-b40000_1595512514_gg.jpg"
            },
            new Product
            {
                Id = 3,
                Name = "Mesa Gamer Alpha Gamer Raya, Black - AGRAYA",
                Description = "",
                Manufacturer = "Alpha Gamer",
                OldPrice = 1.263,
                Price = 999.95,
                Quantity = 41,
                OnPromotion = true,
                Discount = 16,
                imageUrl = "https://images.kabum.com.br/produtos/fotos/148168/mesa-gamer-alpha-gamer-raya-black-agraya_1614027076_gg.jpg"
            },
            new Product
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
            new Product
            {
                Id = 6,
                Name = "Webcam Full HD Logitech StreamCam Plus com Microfone, Conexão USB-C e Tripé Incluso, Compatível Logitech Capture - 960-001280",
                Description = "",
                Manufacturer = "Logitech",
                OldPrice = 1.764,
                Price = 1.199,
                Quantity = 24,
                OnPromotion = true,
                Discount = 20,
                imageUrl = "https://images.kabum.com.br/produtos/fotos/112860/webcam-logitech-streamcam-plus-full-hd-resolucao-1080p-a-60-fps-audio-estereo-com-microfones-conexao-usb-tipo-c-960-001280_1590085557_gg.jpg"
            },
            new Product
            {
                Id = 7,
                Name = "Controle Sem fio PS5 DualSense",
                Description = "",
                Manufacturer = "SONY",
                OldPrice = 439.90,
                Price = 395.91,
                Quantity = 55,
                OnPromotion = true,
                Discount = 10,
                imageUrl = "https://images.kabum.com.br/produtos/fotos/115801/controle-sem-fio-ps5-dualsense_1598897393_gg.jpg"
            },
            new Product
            {
                Id = 8,
                Name = "Headset Gamer HyperX Cloud Alpha, Drivers 50mm, Múltiplas Plataformas, P2 e P3, Preto e Vermelho - HX-HSCA-RD/AM",
                Description = "",
                Manufacturer = "HyperX",
                OldPrice = 858.71,
                Price = 549.90,
                Quantity = 954,
                OnPromotion = true,
                Discount = 24,
                imageUrl = "https://images.kabum.com.br/produtos/fotos/92357/92357_index_gg.jpg"
            },
            new Product
            {
                Id = 9,
                Name = "Teclado Mecânico Gamer HyperX Alloy Origins Core, RGB, Switch HyperX Red, ABNT2 - HX-KB7RDX-BR",
                Description = "",
                Manufacturer = "HyperX",
                OldPrice = 823.41,
                Price = 469.90,
                Quantity = 45,
                OnPromotion = false,
                Discount = 32,
                imageUrl = "https://images.kabum.com.br/produtos/fotos/105009/teclado-mecanico-gamer-hyperx-alloy-origins-core-rgb-hx-kb7rdx-br_1574693479_gg.jpg"
            },

        };

        public static List<Product> GetProducts() => Products;

        public static Product Get(int id) => Products.FirstOrDefault(p => p.Id == id);

        public static void Create(Product product)
        {
            product.Id = _nextId++;
            Products.Add(product);
        }
    }
}
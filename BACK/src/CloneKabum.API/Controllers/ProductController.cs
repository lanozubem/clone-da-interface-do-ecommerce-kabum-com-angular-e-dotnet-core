using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using CloneKabum.API.Models;

namespace CloneKabum.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController : ControllerBase
    {

        private IEnumerable<Product> _products = new Product[]{
            new Product() {
                    Id = 1,
                    Name = "Notebook Gamer Gigabyte G5 Intel Core i5-10500H, 16GB, SSD 512GB, 15,6´ FHD 240Hz, Nvidia RTX 3060 6GB, Windows 10 Home, Preto - KC-5BR2130SH",
                    oldPrice = 15.488,
                    Price = 10.499,
                    Quantity= 36,
                    ImageUrl = "28",
                    Description = "Notebook Gamer G5. Além do Gaming! “Definindo o novo padrão para entretenimento geral, fornecendo um belo equilíbrio entre games, entretenimento e recursos de trabalho. Bem-vindo ao seu novo local. O notebook gaming G5 combina jogos, entretenimento, trabalho e muito mais! Seu poderoso processador Intel® Core™ i5 de décima geração permite que você lide facilmente com várias tarefas ao mesmo tempo. Além disso, possui uma tela de até 240Hz, saída para exibição de 3 telas, slot integrado para cartão SD, capacidade de armazenamento de 6TB e tecnologia Wi-Fi 6 de última geração; com uma ferramenta para cada tarefa, este notebook pode estar ao seu lado enquanto você passa por diferentes funções, apoiando você no dia a dia. Garanta seu notebook Gamer G5 no KaBuM!",
                    OnPromotion = true,
                    Discount = 25
               },
               new Product() {
                    Id = 2,
                    Name = "Controle Sem fio PS5 DualSense",
                    oldPrice = 527,
                    Price = 395,
                    Quantity = 25,
                    ImageUrl = "ttps://images.kabum.com.br/produtos/fotos/115801/controle-sem-fio-ps5-dualsense_1598897393_gg.jpg",
                    Description = "",
                    OnPromotion = true,
                    Discount = 27
               },
               new Product() {
                    Id = 3,
                    Name = "Fonte XPG Core Reactor, 750W, 80 Plus Gold Modular",
                    oldPrice = 1058,
                    Price = 749,
                    Quantity = 456,
                    ImageUrl = "https://images.kabum.com.br/produtos/fotos/103281/fonte-xpg-core-reactor-750w-80-plus-gold-modular_1571153415_gg.jpg",
                    Description = "",
                    OnPromotion = true,
                    Discount = 16
               },
               new Product() {
                    Id = 4,
                    Name = "Ultrabook XPG Xenia XE Gaming 15.6´, Intel Core i5 1135G7, 8GB, SSD 1TB, Iris Xe, Touch Glass, Amazon Alexa - XENIAXe15TI5G11GXELX-SGCUS",
                    oldPrice = 14.999,
                    Price = 7.999,
                    Quantity = 10,
                    ImageUrl = "https://images.kabum.com.br/produtos/fotos/148805/ultrabook-xpg-xenia-xe-gaming-15-6-intel-core-i5-1135g7-8gb-ssd-1tb-iris-xe-touch-glass-amazon-alexa-xeniaxe15ti5g11gxelx-sgcus_1615228458_gg.jpg",
                    Description = "",
                    OnPromotion = true,
                    Discount = 43
               },
               new Product() {
                    Id = 5,
                    Name = "Memória XPG Spectrix D45G, RGB, 8GB, 3600MHz, DDR4, CL18, Preta - AX4U36008G18I-CBKD45G",
                    oldPrice = 399,
                    Price = 279,
                    Quantity = 306,
                    ImageUrl = "https://images.kabum.com.br/produtos/fotos/194492/memoria-xpg-spectrix-d45g-rgb-8gb-3600mhz-ddr4-cl18-preta-ax4u36008g18i-cbkd45g_1632507273_gg.jpg",
                    Description = "",
                    OnPromotion = true,
                    Discount = 17
               },
               new Product() {
                    Id = 6,
                    Name = "Monitor LG 29' IPS, Ultra Wide, Full HD, HDMI, VESA, Ajuste de Ângulo, HDR 10, 99% sRGB, FreeSync, Som Integrado - 29WK600",
                    oldPrice = 2.408,
                    Price = 1.767,
                    Quantity = 30,
                    ImageUrl = "https://images.kabum.com.br/produtos/fotos/97920/97920_5_1533849338_gg.jpg",
                    Description = "",
                    OnPromotion = true,
                    Discount = 18
               },
               new Product() {
                    Id = 7,
                    Name = "Pc Gamer Completo Fácil I7, 16GB RAM, Gtx 1050ti 4GB, HD 1TB, Monitor 21.5, Teclado, Mouse, Headset, Fonte 500w",
                    oldPrice = 6.679,
                    Price = 5.544,
                    Quantity = 61,
                    ImageUrl = "https://images.kabum.com.br/produtos/fotos/sync_mirakl/271830/Pc-Gamer-Completo-F-cil-I7-16GB-RAM-Gtx-1050ti-4GB-HD-1TB-Monitor-21-5-Teclado-Mouse-Headset-Fonte-500w_1639572203_gg.jpg",
                    Description = "",
                    OnPromotion = true,
                    Discount = 7
               },
               new Product() {
                    Id = 8,
                    Name = "Processador AMD Ryzen 5 5600G, 3.9GHz (4.4GHz Max Turbo), AM4, Vídeo Integrado, 6 Núcleos - 100-100000252BOX",
                    oldPrice = 2.411,
                    Price = 1.734,
                    Quantity = 152,
                    ImageUrl = "https://images.kabum.com.br/produtos/fotos/181088/processador-amd-ryzen-5-5600g-3-9ghz-4-4ghz-max-turbo-am4-video-integrado-6-nucleos-100-100000252box_1627588230_gg.jpg",
                    Description = "",
                    OnPromotion = true,
                    Discount = 15
               },
               new Product() {
                    Id = 9,
                    Name = "Smartphone Motorola Moto Edge 20, 5G, 128GB, 108MP, 6.7, Capa Protetora, Preto - XT2143-1",
                    oldPrice = 4.209,
                    Price = 3.198,
                    Quantity = 5,
                    ImageUrl = "https://images.kabum.com.br/produtos/fotos/219451/smartphone-motorola-xt2143-1-moto-edge-20-128gb-108mp-6-7-capa-protetora-preto-par00031br_1631969943_gg.jpg",
                    Description = "",
                    OnPromotion = true,
                    Discount = 20
               },
        };


        [HttpGet]
        public IEnumerable<Product> Get()
        {
            return _products;
        }
    }
}

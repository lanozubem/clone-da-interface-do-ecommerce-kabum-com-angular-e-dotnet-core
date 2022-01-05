import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  produtos: any = [
    {
      "id": 1,
      "name": "Controle Sem fio PS5 DualSense",
      "desconto": 27,
      "qtd": 525,
      "oldPrice": 527,
      "price": 395,
      "imageUrl": "https://images.kabum.com.br/produtos/fotos/115801/controle-sem-fio-ps5-dualsense_1598897393_gg.jpg"
    },
    {
      "id": 2,
      "name": "Fonte XPG Core Reactor, 750W, 80 Plus Gold Modular",
      "desconto": 16,
      "qtd": 456,
      "oldPrice": 1058,
      "price": 749,
      "imageUrl": "https://images.kabum.com.br/produtos/fotos/103281/fonte-xpg-core-reactor-750w-80-plus-gold-modular_1571153415_gg.jpg"
    },
    {
      "id": 3,
      "name": "Ultrabook XPG Xenia XE Gaming 15.6´, Intel Core i5 1135G7, 8GB, SSD 1TB, Iris Xe, Touch Glass, Amazon Alexa - XENIAXe15TI5G11GXELX-SGCUS",
      "desconto": 43,
      "qtd": 2,
      "oldPrice": 14.999,
      "price": 7.999,
      "imageUrl": "https://images.kabum.com.br/produtos/fotos/148805/ultrabook-xpg-xenia-xe-gaming-15-6-intel-core-i5-1135g7-8gb-ssd-1tb-iris-xe-touch-glass-amazon-alexa-xeniaxe15ti5g11gxelx-sgcus_1615228458_gg.jpg"
    },
    {
      "id": 4,
      "name": "Memória XPG Spectrix D45G, RGB, 8GB, 3600MHz, DDR4, CL18, Preta - AX4U36008G18I-CBKD45G",
      "desconto": 17,
      "qtd": 306,
      "oldPrice": 399.88,
      "price": 279.90,
      "imageUrl": "https://images.kabum.com.br/produtos/fotos/194492/memoria-xpg-spectrix-d45g-rgb-8gb-3600mhz-ddr4-cl18-preta-ax4u36008g18i-cbkd45g_1632507273_gg.jpg"
    },
    {
      "id": 5,
      "name": "Monitor LG 29' IPS, Ultra Wide, Full HD, HDMI, VESA, Ajuste de Ângulo, HDR 10, 99% sRGB, FreeSync, Som Integrado - 29WK600",
      "desconto": 18,
      "qtd": 242,
      "oldPrice": 2.408,
      "price": 1.767,
      "imageUrl": "https://images.kabum.com.br/produtos/fotos/97920/97920_5_1533849338_gg.jpg"
    },
    {
      "id": 6,
      "name": "Pc Gamer Completo Fácil I7, 16GB RAM, Gtx 1050ti 4GB, HD 1TB, Monitor 21.5, Teclado, Mouse, Headset, Fonte 500w",
      "desconto": 7,
      "qtd": 61,
      "oldPrice": 6.679,
      "price": 5.544,
      "imageUrl": "https://images.kabum.com.br/produtos/fotos/sync_mirakl/271830/Pc-Gamer-Completo-F-cil-I7-16GB-RAM-Gtx-1050ti-4GB-HD-1TB-Monitor-21-5-Teclado-Mouse-Headset-Fonte-500w_1639572203_gg.jpg"
    },
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departaments-slider',
  templateUrl: './departaments-slider.component.html',
  styleUrls: ['./departaments-slider.component.css']
})
export class DepartamentsSliderComponent implements OnInit {

  categorias = [
    {
      "id": 1,
      "name": "HARDWARE",
      "imageUrl": "https://static.kabum.com.br/conteudo/categorias/HARDWARE.png"
    },
    {
      "id": 2,
      "name": "PERIFÉRICOS",
      "imageUrl": "https://static.kabum.com.br/conteudo/categorias/PERIFERICOS.png"
    },
    {
      "id": 3,
      "name": "GAMES",
      "imageUrl": "https://static.kabum.com.br/conteudo/categorias/GAMER.png"
    },
    {
      "id": 4,
      "name": "CADEIRAS",
      "imageUrl": "https://static.kabum.com.br/conteudo/categorias/CADEIRAS.png"
    },
    {
      "id": 5,
      "name": "COMPUTADORES",
      "imageUrl": "https://static.kabum.com.br/conteudo/categorias/COMPUTADORES.png"
    },
    {
      "id": 6,
      "name": "TV",
      "imageUrl": "https://static.kabum.com.br/conteudo/categorias/TV.png"
    },
    {
      "id": 7,
      "name": "CELULAR & TELEFONE",
      "imageUrl": "https://static.kabum.com.br/conteudo/categorias/CELULAR-TELEFONE.png"
    },
    {
      "id": 8,
      "name": "BENEFÍCIO",
      "imageUrl": "https://static.kabum.com.br/conteudo/categorias/beneficio.png"
    },
    {
      "id": 9,
      "name": "SERVIÇOS DIGITAIS",
      "imageUrl": "https://static.kabum.com.br/conteudo/categorias/SERVICOS-DIGITAIS.png"
    },
    {
      "id": 10,
      "name": "ELETRODOMÉSTICOS",
      "imageUrl": "https://static.kabum.com.br/conteudo/categorias/ELETRODOMESTICOS.png"
    },
    {
      "id": 11,
      "name": "ÁUDIO",
      "imageUrl": "https://static.kabum.com.br/conteudo/categorias/AUDIO.png"
    },
    {
      "id": 12,
      "name": "CONECTIVIDADE",
      "imageUrl": "https://static.kabum.com.br/conteudo/categorias/CONECTIVIDADE.png"
    },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  navegateTo1(xb: any, xa: any) {
    document.getElementById("carrossel")?.scrollBy(xb, xa);
  }
}

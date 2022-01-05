import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.css']
})
export class ProdutoDetalheComponent implements OnInit {

  produto = {
    "name": 'Product Name',
    "imageUrl": "https://images.kabum.com.br/produtos/fotos/128648/controle-microsoft-xbox-sem-fio-branco-qas-00007_1601326573_gg.jpg",
    "desconto": 12,
    "qtd": -1,
    "oldPrice": 1.220,
    "price": 654
  };

  constructor() { }

  ngOnInit(): void {
  }

}

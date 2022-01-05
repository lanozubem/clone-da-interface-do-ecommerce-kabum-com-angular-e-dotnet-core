import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Models/product';
import { ProductsService } from '../Services/products.service';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.css']
})
export class ProdutoDetalheComponent implements OnInit {

  produto!: Product;

  constructor(
    private productServices: ProductsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getProduct();  
  }

  getProduct() {
    this.route.params.subscribe(params => {
      this.productServices.getProduct(params['id']).subscribe(
        p => this.produto = p
      )
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Models/product';
import { ProductsService } from '../Services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  produtos: Array<Product> = new Array();
  
  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productsService.getProducts()
    .subscribe(
      p => this.produtos = p
    )
  }

}

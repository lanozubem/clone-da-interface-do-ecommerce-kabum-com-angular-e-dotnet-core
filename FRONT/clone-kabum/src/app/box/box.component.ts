import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/product';
import { ProductsService } from '../Services/products.service';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {


  produtos: Array<Product> = new Array<Product>();

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      p => this.produtos = p
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../Models/product';
import { ProductsService } from '../Services/products.service';
import { SessionStorageService } from '../Services/session-storage.service';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.css']
})
export class ProdutoDetalheComponent implements OnInit {

  produto = {} as Product;

 /*  unliked = "favorite_border"; */
  liked = "favorite_border";


  constructor(
    private productServices: ProductsService,
    private sessionStorage: SessionStorageService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.route.params.subscribe(params => {
      this.productServices.getProduct(params['id'])
        .subscribe(p => {
          this.produto = p;
        },
          error => this.router.navigate(['404'])
        )
    })
  }

  addFavorit() {
    let userLogged = JSON.parse(this.sessionStorage.get("userLogged"));
    if (userLogged != null) {
      this.productServices.addFavorite(userLogged.id, this.produto).subscribe(
        d => {
          this.liked = "favorite";
        },
        error => alert("Erro ao estabelecer conexão com a base de dados!")
      )
    } else {
      this.router.navigate(['login']);
    }
  }

}

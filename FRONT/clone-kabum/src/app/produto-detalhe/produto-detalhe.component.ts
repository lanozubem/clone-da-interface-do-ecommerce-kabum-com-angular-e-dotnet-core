import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { window } from 'rxjs';
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
  likedControl = false;
  io: boolean = true;
  numFavorits = 0;

  constructor(
    private productServices: ProductsService,
    private sessionStorage: SessionStorageService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getProduct();
    this.getFavorits();
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

  addingOrRemovingProductFavorit() {
    if (this.sessionStorage.get("isAuth") == "true") {
      if (this.io == false) {
        this.addFavorit();
      } else {
        this.removeFavoriteProduct(this.produto.id);
      }
    } else {
      this.router.navigate(['login']);
    }
  }

  private addFavorit() {
    let userLogged = JSON.parse(this.sessionStorage.get("userLogged"));
    if (userLogged != null) {
      this.productServices.addFavorite(userLogged.id, this.produto).subscribe(
        d => {
          this.productServices.getNumFavorits(this.numFavorits);
          this.likedControl = !this.likedControl;
          if (this.likedControl) {
            this.liked = "favorite";
          } else {
            this.liked = "favorite_border";
          }
          location.reload();
        },
        error => alert("Erro ao estabelecer conexão com a base de dados!")
      )
    } else {
      this.router.navigate(['login']);
    }
  }

  /* 
    Novamente, certamente esta é o pior dos cenários para se obter o id do objeto contido na lista de produtos do usuário mas é o que temos por enquanto não aprendo NGRX.
    Melhorias em futuros FIXS.
  */
  private getFavorits() {
    let userLogged = JSON.parse(this.sessionStorage.get("userLogged"));
    if (userLogged.id != undefined) {
      this.productServices.getFavorits(userLogged.id).subscribe(
        f => {
          this.productServices.getNumFavorits(f.length);
          let p = {} as Product;
          f.forEach(element => {
            if (element.id == this.produto.id) {
              p = element;
            }
          });

          if (p?.id == this.produto.id) {
            this.likedControl = true;
            this.io = this.likedControl;
            this.liked = "favorite";
          } else {
            this.likedControl = false;
            this.io = this.likedControl;
            this.liked = "favorite_border";
          }
        },
        () => alert("Erro ao estabelecer conexão com a base de dados!")
      )
    }
  }

  private removeFavoriteProduct(id: number) {
    let userLogged = JSON.parse(this.sessionStorage.get("userLogged"));
    if (userLogged.id != undefined) {
      this.productServices.removeFavoriteProduct(userLogged.id, id).subscribe(
        () => { this.getFavorits(); location.reload(); },
        () => alert("Erro ao estabelecer conexão com a base de dados!")
      )
    }
  }
}

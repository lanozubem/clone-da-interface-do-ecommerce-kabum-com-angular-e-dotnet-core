import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/product';
import { ProductsService } from '../Services/products.service';
import { SessionStorageService } from '../Services/session-storage.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  produtos: Array<Product> = new Array();
  id: number = 0;
  constructor(
    private produtosService: ProductsService,
    private sessionStorage: SessionStorageService
  ) { }

  ngOnInit(): void {
    this.getFavorits();
  }

  getFavorits() {
    let userLogged = JSON.parse(this.sessionStorage.get("userLogged"));
    if (userLogged.id != undefined) {
      this.produtosService.getFavorits(userLogged.id).subscribe(
        f => {
          this.produtos = f;
        },
        () => alert("Erro ao estabelecer conexão com a base de dados!")
      )
    }
  }

  removeFavoriteProduct(id: number) {
    let userLogged = JSON.parse(this.sessionStorage.get("userLogged"));
    if (userLogged.id != undefined) {
      this.produtosService.removeFavoriteProduct(userLogged.id, id).subscribe(
        () => this.getFavorits(),
        () => alert("Erro ao estabelecer conexão com a base de dados!")
      )
    }
  }
}

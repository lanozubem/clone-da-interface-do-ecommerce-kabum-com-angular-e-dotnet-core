import { Component, OnInit, Output, EventEmitter, Input, ɵɵqueryRefresh } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Models/user';
import { LoginService } from '../Services/login.service';
import { ProductsService } from '../Services/products.service';
import { SessionStorageService } from '../Services/session-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() openSidenav = new EventEmitter<boolean>();

  isAuthenticated = false;
  userLogged!: User;
  numFavorits = 0;
  
  constructor(
    private router: Router,
    private loginService: LoginService,
    private sessionStorage: SessionStorageService,
    private produtosService: ProductsService
  ) { }

  ngOnInit(): void {
    this.userLogged = JSON.parse(this.sessionStorage.get("userLogged"));
    if (this.sessionStorage.get("isAuth") == "true") {
      this.isAuthenticated = true;

      // obtendo o nº de itens favoritos
      this.produtosService.sendNumFavorit.subscribe(
        n=> this.numFavorits = n
      )
      // No e-commerce KaBuM! o nome no perfil não engloba o sobrenome
      // então, aqui obtemos apenas o primeiro nome
      let name = this.userLogged.name;
      this.userLogged.name = this.userLogged.name.slice(0, name.concat(" ").indexOf(" "));
    } else {
      this.isAuthenticated = false;
      this.numFavorits = 0;
    }
  }

  getFavorits() {
    let userLogged = JSON.parse(this.sessionStorage.get("userLogged"));
    if (userLogged.id != undefined) {
      this.produtosService.getFavorits(userLogged.id).subscribe(
        f => {
            this.numFavorits = f.length
        },
        () => alert("Erro ao estabelecer conexão com a base de dados!")
      )
    }
  }

  // Este método através do EventEmitter emitirá um evento contendo o valor booleano
  // true para o componente app-sidenav que conseguintemente abrirá a aba do sidenav 
  sidenavOpened() {
    this.openSidenav.emit(true);
  }

  loggout() {
    this.loginService.loggout();
  }
}

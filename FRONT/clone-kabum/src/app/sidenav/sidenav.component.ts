import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Models/user';
import { LoginService } from '../Services/login.service';
import { SessionStorageService } from '../Services/session-storage.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  opened: boolean = false;

  userLogged!: User;
  isAuthenticated = false;

  constructor(
    private loginService: LoginService,
    private sessionStorage: SessionStorageService
  ) { }

  ngOnInit(): void {
    this.userLogged = JSON.parse(this.sessionStorage.get("userLogged"));

    // No e-commerce KaBuM! o nome no perfil não engloba o sobrenome
    // então, aqui obtemos apenas o primeiro nome
    let name = this.userLogged.name;
    this.userLogged.name = this.userLogged.name.slice(0, name.concat(" ").indexOf(" "));

    this.sessionStorage.get("isAuth") == "true" ? this.isAuthenticated = true : this.isAuthenticated = false;
  }

  // Este método receberá do componente app-header um evento contendo o valor booleano true
  // que fará com que o sidenav sejá aberto 
  isToOpen(open: boolean) {
    this.opened = open;
  }

  loggout() {
    this.loginService.loggout();
  }
}

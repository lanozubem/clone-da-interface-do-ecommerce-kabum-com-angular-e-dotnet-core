import { Component, OnInit } from '@angular/core';
import { User } from '../Models/user';
import { LoginService } from '../Services/login.service';
import { SessionStorageService } from '../Services/session-storage.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  userLogged!: User;
  order = false;

  isAuthenticated = false;

  constructor(
    private loginService: LoginService,
    private sessionStorage: SessionStorageService
  ) { }

  ngOnInit(): void {
    if (this.sessionStorage.get("isAuth") == "true") {
      let objJSON = JSON.parse(this.sessionStorage.get("userLogged"));
      this.userLogged = objJSON;
      this.isAuthenticated = true;
    } else {
      this.sessionStorage.clear();
    }
  }

}

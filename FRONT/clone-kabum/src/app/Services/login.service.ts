import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../Models/product';
import { User } from '../Models/user';
import { SessionStorageService } from './session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly urlToken = environment["apiTokenLogin"];
  private readonly urlRegisterUser = environment["apiRegisterUser"];
  private readonly urlUpdateUser = environment["apiUpdateUser"];

  private userIsAuth = false;
  private userLogged: any;

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      "accept": "*"
    })
  }

  constructor(
    private httpClient: HttpClient,
    private sessionStorage: SessionStorageService,
    private router: Router
  ) { }

  /* LOGIN */
  login(user: User) {
    return this.httpClient.post(this.urlToken, user);
  }

  /* REGISTER */
  registerUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.urlRegisterUser, JSON.stringify(user), this.httpOptions)
  }

  /* UPDATE */
  updateUser(user: User): Observable<User> {
    return this.httpClient.put<User>(this.urlUpdateUser + "/" + user.id, JSON.stringify(user), this.httpOptions)
  }

  userIsAuthenticated(): boolean {
    return this.userIsAuth;
  }

  setUserAuthenticated(authenticate: boolean) {
    this.userIsAuth = authenticate;
    if (authenticate) {
      this.initializerValues();
    }
  }

  getUserLogged(): User {
    return this.userLogged;
  }

  setUserLogged(user: User) {
    this.userLogged = user;
  }

  private initializerValues() {
    if (this.userIsAuth) {
      this.sessionStorage.setObject("userLogged", this.getUserLogged());
      this.sessionStorage.set("isAuth", "true");
    } else {
      this.sessionStorage.clear();
    }
  }

  loggout() {
    this.sessionStorage.clear();
    location.reload(); // essa talvez não seja a melhor maneira de recarregar os dados do usuário, mas enquanto não aprendo NGRX será essa a solução.
    this.router.navigate(['/']);
  }

  refreshPage() {
    location.reload(); // essa talvez não seja a melhor maneira de recarregar os dados do usuário, mas enquanto não aprendo NGRX será essa a solução.
  }

}

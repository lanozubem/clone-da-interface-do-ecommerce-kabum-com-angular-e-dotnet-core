import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticated: boolean = false;

  constructor() { }

  public getToken() {
    sessionStorage.getItem('token');
  }

  public setToken(token: any) {
    sessionStorage.setItem('token', token);
  }

  public clearToken(){
    sessionStorage.removeItem('token');
  }
}

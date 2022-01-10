import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly urlToken = environment["apiTokenLogin"];
  private readonly urlRegisterUser = environment["apiRegisterUser"];

  tokenUsuario: any;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      "accept": "*",
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      'Access-Control-Allow-Headers': 'X-Requested-With,content-type'
    })
  }

  constructor(private httpClient: HttpClient) { }


  login(data: any) {
    return this.httpClient.post(this.urlToken, data);
  }

  registerUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.urlRegisterUser, JSON.stringify(user), this.httpOptions)
  }

}

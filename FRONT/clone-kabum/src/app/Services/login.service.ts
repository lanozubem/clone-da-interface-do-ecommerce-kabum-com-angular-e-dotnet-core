import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly urlBackEnd = environment["apiBackEnd"];
  private readonly urlToken = environment["apiToken"];
  tokenUsuario: any;

  constructor(
    private httpClient: HttpClient) {
  }

  login(data: any) {
    return this.httpClient.post(this.urlToken, data);
  }
}

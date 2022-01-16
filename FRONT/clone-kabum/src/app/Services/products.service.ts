import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private API = "https://localhost:5001/api/v1/products";
  private readonly urlGetFavorits = environment["apiGetFavorits"];
  private readonly urlAddFavorit = environment["apiAddFavorit"];

  constructor(
    private http: HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API)
  }

  getProduct(id: any): Observable<Product> {
    return this.http.get<Product>(this.API + "/" + id)
  }

  saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.API, JSON.stringify(product), this.httpOptions)
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(this.API + "/" + product.id, JSON.stringify(product), this.httpOptions)
  }

  deleteCar(product: Product) {
    return this.http.delete<Product>(this.API + '/' + product.id, this.httpOptions)
  }


  /* List of Favorites */

  getFavorits(id: any): Observable<Product[]> {
    return this.http.get<Product[]>(this.urlGetFavorits + "/" + id + "?userId=" + id)
  }

  addFavorite(userId: number, product: Product): Observable<Product> {
    return this.http.post<Product>(this.urlAddFavorit + "/" + userId + "?userId=" + userId + "&productId=" + product.id, this.httpOptions)
  }

  removeFavoriteProduct(userId: number, productId: number) {
    return this.http.delete<Product>(this.urlAddFavorit + '/' + userId + "?userId=" + userId + "&productId=" + productId, this.httpOptions)
  }

}

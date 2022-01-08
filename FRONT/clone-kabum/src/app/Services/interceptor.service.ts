import { HttpEvent, HttpHandler, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class InterceptorService {
  constructor(
    private authService: AuthService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let headers;

    if (req.body instanceof FormData) {
      headers: new HttpHeaders(
        {
          contentType: 'false',
          processData: 'false',
          Authorization: 'Bearer' + this.authService.getToken()
        }
      )
    } else {
      headers: new HttpHeaders()
        .append("accept", "application/json")
        .append("Content-Type", "application/json")
        .append("Authorization", "Bearer " + this.authService.getToken());
    }

    let request = req.clone({ headers });

    return next.handle(request).pipe(
      map((event) => {
        return event
      })
    )
  }
}

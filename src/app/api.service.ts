import { from, Observable, throwError } from 'rxjs';
import { environment } from './../environments/environment';
import {
  HttpClient,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Injectable } from "@angular/core";
import { mergeMap, catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  URL: string = environment.API_URL
  TOKEN: string = '';

  constructor(private http: HttpClient) {}

  getToken = new Promise((resolve, reject) => {
    resolve(this.TOKEN)
  })

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return from(this.getToken).pipe(mergeMap(token=>{
      request = request.clone({
        setHeaders: {
          "Content-Type": "application/json",

        }
      });

      return next.handle(request).pipe(map((event: HttpEvent<any>)=>{
        if (event instanceof HttpResponse) {
          console.log(event.body); //retorna os dados da requisição
          console.log(event.headers)
        }

        return event;
      }), catchError(error=>{
        console.log(error);
        return throwError(error);
      }));
    }));
  }

  get(route: string) {
    return this.http.get(`${this.URL}${route}`)
  }

  post(route: string, params: {}) {
    return this.http.post(`${this.URL}${route}`, params)
  }

  update(route: string, params: {}) {
    return this.http.put(`${this.URL}${route}`, params)
  }

  delete(route: string) {
    return this.http.delete(`${this.URL}${route}`)
  }
}

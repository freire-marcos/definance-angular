import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL: any = environment.API_URL;

  constructor(private http: HttpClient) {}

  getById(id: number) {
    return this.http.get(`${this.API_URL}/${id}`, {
      headers: {
        "Content-Type": "application/json"
      }
    })
  }
}

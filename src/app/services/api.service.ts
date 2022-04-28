import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL: any = environment.API_URL;

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }
}

import { retry, catchError } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Despesa } from './../models/despesa';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";

@Injectable()
export class DespesaService {
  apiUrl = environment.API_URL;

  constructor(private http: HttpClient) {}

  getDespesaById(id: number): Observable<Despesa> {
    return this.http.get<Despesa>(`${this.apiUrl}despesa/${id}`)
  }

  getDespesas(): Observable<Despesa> {
    return this.http.get<Despesa>(`${this.apiUrl}despesas/`, {
      headers: {
        "Content-Type": "application/json"
      }
    })
  }
}

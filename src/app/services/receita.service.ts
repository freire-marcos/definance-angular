import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Receita } from '../models/receita';

@Injectable()
export class ReceitaService {
  apiUrl = environment.API_URL;

  constructor(private http: HttpClient) {}

  getReceitaById(id: number): Observable<Receita> {
    return this.http.get<Receita>(`${this.apiUrl}receita/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  getReceitas(): Observable<Receita> {
    return this.http.get<Receita>(`${this.apiUrl}receitas/`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

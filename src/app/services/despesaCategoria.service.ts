import { DespesaCategoria } from './../models/despesaCategoria';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from "@angular/core";

@Injectable()
export class DespesaCategoriaService {
  apiUrl = environment.API_URL;

  constructor(private http: HttpClient) {}

  getDespesaCategoriaById(id: number): Observable<DespesaCategoria> {
    return this.http.get<DespesaCategoria>(`${this.apiUrl}despesa-categoria/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  getDespesaCategorias(): Observable<DespesaCategoria> {
    return this.http.get<DespesaCategoria>(`${this.apiUrl}despesa-categorias/`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  postDespesaCategoria(descricao: string): Observable<DespesaCategoria> {
    return this.http.post<DespesaCategoria>(`${this.apiUrl}despesa-categoria`, descricao, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  updateDespesaCategoria(id: number, descricao: string): Observable<DespesaCategoria>{
    return this.http.put<DespesaCategoria>(`${this.apiUrl}despesa/${id}`, descricao, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  deleteDespesaCategoria(id: number): Observable<DespesaCategoria> {
    return this.http.delete<DespesaCategoria>(`${this.apiUrl}${id}`);
  }
}

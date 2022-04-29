import { Observable } from 'rxjs';
import { DespesaSubcategoria } from './../models/despesaSubcategoria';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from "@angular/core";

@Injectable()
export class DespesaSubcategoriaService {

  apiUrl = environment.API_URL;

  constructor(private http: HttpClient) {}

  getDespesaSubcategoriaById(id: number): Observable<DespesaSubcategoria> {
    return this.http.get<DespesaSubcategoria>(`${this.apiUrl}despesa-subcategoria/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  getDespesaSubcategorias(): Observable<DespesaSubcategoria[]> {
    return this.http.get<DespesaSubcategoria[]>(`${this.apiUrl}despesa-subcategorias/`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  postDespesaSubcategoria(descricao: string): Observable<DespesaSubcategoria> {
    return this.http.post<DespesaSubcategoria>(`${this.apiUrl}despesa-subcategoria/`, descricao, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  updateDespesaSubcategoria(id: number, descricao: string): Observable<DespesaSubcategoria> {
    return this.http.post<DespesaSubcategoria>(`${this.apiUrl}despesa-subcategoria/${id}`, descricao, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  deleteDespesaSubcategoria(id: number): Observable<DespesaSubcategoria> {
    return this.http.delete<DespesaSubcategoria>(`${this.apiUrl}despesa-subcategoria/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
}

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
    return this.http.get<Despesa>(`${this.apiUrl}despesa/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  getDespesas(): Observable<Despesa> {
    return this.http.get<Despesa>(`${this.apiUrl}despesas/`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  postDespesa(despesaData: {
    descricao: string,
    valor: number,
    data: Date | string,
    pessoaId: number,
    categoriaId: number,
    subcategoriaId: number,
  }): Observable<Despesa> {
    return this.http.post<Despesa>(`${this.apiUrl}despesa`, despesaData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  updateDespesa(id: number, despesaData: {
    descricao: string;
    valor: number;
    data: Date | string;
    pessoaId: number;
    categoriaId: number;
    subcategoriaId: number;
  }): Observable<Despesa>{
    return this.http.put<Despesa>(`${this.apiUrl}despesa/${id}`, despesaData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  deleteDespesa(id: number): Observable<Despesa> {
    return this.http.delete<Despesa>(`${this.apiUrl}${id}`);
  }
}

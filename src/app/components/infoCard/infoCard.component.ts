import { map } from 'rxjs/operators';
import { ApiService } from './../../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infoCard',
  templateUrl: './infoCard.component.html',
  styleUrls: ['./infoCard.component.css']
})
export class InfoCardComponent implements OnInit {
  listaCustos: any = [];
  custoTotal: any = 0;

  listaReceitas: any = [];
  receitaTotal: any = 0;

  isModalDespesasVisible: boolean = false;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.loadCustos();
    this.loadReceitas();
  }

  async loadCustos() {
    return await this.api.get('despesas').subscribe(data => {
      this.listaCustos = data;
      this.somaCustos();
    });
  }

  setModalDespesasVisible() {
    this.isModalDespesasVisible = !this.isModalDespesasVisible;
  }

  somaCustos() {
    return this.listaCustos.forEach((custo: any) => {
      return this.custoTotal += custo.valor;
    })
  }

  somaReceitas() {
    return this.listaReceitas.forEach((receita: any) => {
      return this.receitaTotal += receita.valor;
    });
  }

  loadReceitas() {
    return this.api.get('receitas').subscribe(data => {
      this.listaReceitas = data;
      this.somaReceitas();
    })
  }
}

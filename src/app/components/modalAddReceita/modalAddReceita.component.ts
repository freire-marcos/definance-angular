import { ApiService } from './../../api.service';
import { Despesa } from './../../models/despesa';
import { DespesaService } from './../../services/despesa.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modalAddReceita',
  templateUrl: './modalAddReceita.component.html',
  styleUrls: ['./modalAddReceita.component.css']
})
export class ModalAddReceitaComponent implements OnInit {
  public newReceitaForm!: FormGroup;
  isModalReceitaVisible: boolean = false;

  receitaList: Despesa[] = [];

  constructor(
    private readonly despesaService: DespesaService,
    private api: ApiService
  ) { }

  ngOnInit(): void {
    // this.newReceitaForm = this.fb.group({
    //   descricao: ['', [Validators.required]],
    //   valor: [null, [Validators.required]],
    //   data: [null, [Validators.required]],
    //   categoria: [null, [Validators.required]],
    //   recorrente: [null, [Validators.required]]
    // })

    this.api.get('despesa-categorias').subscribe(data => {
      console.log(data);
    });
  }

  showReceitaModal() {
    this.isModalReceitaVisible = true;
  };

  handleCancelReceita(): void {
    this.isModalReceitaVisible = false;
  };

  async handleReceitaSubmit() {
    // this.receitaList = [];
    // await this.despesaService.getDespesas().subscribe(data => {
    //   this.receitaList.push(data)
    // });
    // return console.log(this.receitaList)
  };

}

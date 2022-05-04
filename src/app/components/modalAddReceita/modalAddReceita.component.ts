import { ApiService } from './../../api.service';
import { DespesaService } from './../../services/despesa.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modalAddReceita',
  templateUrl: './modalAddReceita.component.html',
  styleUrls: ['./modalAddReceita.component.css']
})
export class ModalAddReceitaComponent implements OnInit {
  newReceitaForm!: FormGroup;
  isModalReceitaVisible: boolean = false;

  receitaCategorias: any = [];
  postData: any = '';

  constructor(
    private readonly despesaService: DespesaService,
    private api: ApiService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
      this.loadReceitaCategorias();

      this.newReceitaForm = this.fb.group({
        descricao: ['', Validators.required],
        valor: [null, Validators.required],
        data: [null, Validators.required],
        categoriaId: [null, Validators.required],
        pessoaId: [1, []]
      });

  }

  showReceitaModal() {
    this.isModalReceitaVisible = true;
  };

  handleCancelReceita(): void {
    this.isModalReceitaVisible = false;
  };

  loadReceitaCategorias() {
    return this.api.get('receita-categorias').subscribe(data => {
      this.receitaCategorias = data
    })
  }

  async handleReceitaSubmit(form: any) {
    return await this.api.post('receita/', form).subscribe(() => {
      this.newReceitaForm.reset();
      this.newReceitaForm.patchValue({pessoaId: 1})
      this.isModalReceitaVisible = false;
    });

  };
}

import { ApiService } from './../../api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modalAddDespesa',
  templateUrl: './modalAddDespesa.component.html',
  styleUrls: ['./modalAddDespesa.component.css']
})
export class ModalAddDespesaComponent implements OnInit {
  isLoading: boolean = false;
  isModalCustoVisible: boolean = false;
  newDespesaForm!: FormGroup;

  despesaCategoriaList: any = [];
  despesaSubcategoriaList: any = [];

  constructor(
    private api: ApiService,
    private fb: FormBuilder,
    ) { }

  ngOnInit() {
    this.loadDespesaCategoria();
    this.loadDespesaSubcategoria();

    this.newDespesaForm = this.fb.group({
      descricao: ['', Validators.required],
      valor: [null, Validators.required],
      data: [null, Validators.required],
      pessoaId: [1, []],
      categoriaId: [null, Validators.required],
      subCategoriaId: [null, Validators.required],
    });
  }

  showCustoModal(): void {
    this.isModalCustoVisible = true;
  };

  handleCancelCusto(): void {
    this.isModalCustoVisible = false;
  };

  async loadDespesaCategoria() {
    this.isLoading = true
    return await this.api.get('despesa-categorias').subscribe(data => {
      this.despesaCategoriaList = data;
      this.isLoading = false;
    });
  }

  async loadDespesaSubcategoria() {
    this.isLoading = true;
    return await this.api.get('despesa-subcategorias').subscribe(data => {
      this.despesaSubcategoriaList = data;
      this.isLoading = false;
    })
  }

  async handleSubmit(form: any) {
    return await this.api.post('despesa/', form).subscribe(() => {
      this.newDespesaForm.reset();
      this.newDespesaForm.patchValue({pessoaId: 1})
      this.isModalCustoVisible = false;
    });
  }
}

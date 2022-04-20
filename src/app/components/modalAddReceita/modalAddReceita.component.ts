import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modalAddReceita',
  templateUrl: './modalAddReceita.component.html',
  styleUrls: ['./modalAddReceita.component.css']
})
export class ModalAddReceitaComponent implements OnInit {
  public newReceitaForm = FormGroup;
  isModalReceitaVisible: boolean = false;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  showReceitaModal() {
    this.isModalReceitaVisible = true;
  };

  handleCancelReceita(): void {
    this.isModalReceitaVisible = false;
  };

  handleReceitaOk(): void {
    console.log('ok');
  };

}

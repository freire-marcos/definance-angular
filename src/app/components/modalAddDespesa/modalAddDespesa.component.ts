import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modalAddDespesa',
  templateUrl: './modalAddDespesa.component.html',
  styleUrls: ['./modalAddDespesa.component.css']
})
export class ModalAddDespesaComponent implements OnInit {
  isModalCustoVisible: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showCustoModal(): void {
    this.isModalCustoVisible = true;
  };

  handleCancelCusto(): void {
    this.isModalCustoVisible = false;
  };

  handleCustoOk(): void {
    console.log('ok');
  };

}

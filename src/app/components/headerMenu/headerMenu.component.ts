import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headerMenu',
  templateUrl: './headerMenu.component.html',
  styleUrls: ['./headerMenu.component.css']
})
export class HeaderMenuComponent implements OnInit {
  isModalCustoVisible: boolean = false;
  isModalReceitaVisible: boolean = false;

  constructor() { }

  ngOnInit() {
  };

  showCustoModal(): void {
    this.isModalCustoVisible = true;
  };

  handleCancelCusto(): void {
    this.isModalCustoVisible = false;
  };

  handleCustoOk(): void {
    console.log('ok');
  };

  showReceitaModal() {
    this.isModalReceitaVisible = true;
  };

  handleCancelReceita(): void {
    this.isModalReceitaVisible = false;
  };

  handleReceitaOk(): void {
    console.log('ok');
  };

};

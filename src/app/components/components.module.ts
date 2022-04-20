import { ModalAddDespesaComponent } from './modalAddDespesa/modalAddDespesa.component';
import { ModalAddReceitaComponent } from './modalAddReceita/modalAddReceita.component';
import { HeaderMenuComponent } from './headerMenu/headerMenu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components.component';
import { DemoNgZorroAntdModule } from '../ng-zorro-antd.module'


@NgModule({
  imports: [
    CommonModule,
    DemoNgZorroAntdModule
  ],
  declarations: [
    ComponentsComponent,
    HeaderMenuComponent,
    ModalAddReceitaComponent,
    ModalAddDespesaComponent
  ],
  exports: [
    HeaderMenuComponent
  ]
})
export class ComponentsModule { }

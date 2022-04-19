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
  declarations: [ComponentsComponent, HeaderMenuComponent],
  exports: [HeaderMenuComponent]
})
export class ComponentsModule { }

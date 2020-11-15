import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductComponent} from './components/product/product.component';
import {DemoDiRouting} from "@app/demo-di/demo-di-routing.module";


@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    DemoDiRouting
  ]
})
export class DemoDiModule { }

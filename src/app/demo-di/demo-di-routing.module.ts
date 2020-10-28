import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ProductComponent} from '@app/demo-di/components/product/product.component';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    data: { pageTitle: 'Product Demo' }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class DemoDiRouting { }

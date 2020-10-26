import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { DemoReactiveComponent } from './demo-reactive/demo-reactive.component';
import {TemplateDrivenComponent} from '@app/demo-form/template-driven/template-driven.component';

const routes: Routes = [
  {
      path: 'reactive',
    component: DemoReactiveComponent,
    data: { pageTitle: 'Reactive Form Demo' }
  },
  {
    path: 'template-driven',
    component: TemplateDrivenComponent,
    data: { pageTitle: 'template driven Form Demo' }
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

export class DemoReactiveFormRoutingModule { }

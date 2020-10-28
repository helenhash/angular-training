import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DemoDataBindingComponent} from '@app/demo-comp-template/demo-data-binding/demo-data-binding.component';
import {DemoDirectiveComponent} from '@app/demo-comp-template/demo-directive/demo-directive.component';
import { DemoHookComponent } from './demo-hook/demo-hook.component';
import {DemoPipeComponent} from '@app/demo-comp-template/demo-pipe/demo-pipe.component';
import {DemoCompInteractionComponent} from '@app/demo-comp-template/demo-comp-interaction/demo-comp-interaction.component';

const routes: Routes = [
  {
    path: 'data-binding',
    component: DemoDataBindingComponent,
    data: { pageTitle: 'Data Binding' }
  },
  {
    path: 'directives',
    component: DemoDirectiveComponent,
    data: { pageTitle: 'Directive Demo' }
  },
  {
    path: 'pipes',
    component: DemoPipeComponent,
    data: { pageTitle: 'Pipes Demo' }
  },
  {
    path: 'lifecycle',
    component: DemoHookComponent,
    data: { pageTitle: 'Hook Lifecycle Demo' }
  },
  {
    path: 'interaction',
    component: DemoCompInteractionComponent,
    data: { pageTitle: 'Component Interaction Demo' }
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

export class DemoCompTemplateRoutingModule { }

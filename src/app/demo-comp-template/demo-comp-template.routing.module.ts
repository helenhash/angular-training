import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DemoTempSyntaxComponent} from '@app/demo-comp-template/demo-temp-syntax/demo-temp-syntax.component';
import {DemoUserInputComponent} from '@app/demo-comp-template/demo-user-input/demo-user-input.component';
import {DemoDirectiveComponent} from '@app/demo-comp-template/demo-directive/demo-directive.component';
import { DemoHookComponent } from './demo-hook/demo-hook.component';

const routes: Routes = [
  {
    path: 'temp-syntax',
    component: DemoTempSyntaxComponent,
    data: { pageTitle: 'Component and Template Demo' }
  },
  {
    path: 'user-action',
    component: DemoUserInputComponent,
    data: { pageTitle: 'Component and Template Demo' }
  },
  {
    path: 'directives',
    component: DemoDirectiveComponent,
    data: { pageTitle: 'Directive Demo' }
  },
  {
    path: 'hook-demo',
    component: DemoHookComponent,
    data: { pageTitle: 'Hook Lifecycle Demo' }
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

import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginComponent} from '@app/login/components/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: {pageTitle: 'Login'}
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

export class LoginRouting {
}

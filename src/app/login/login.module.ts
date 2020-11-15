import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from '@app/login/components/login.component';
import {LoginRouting} from "@app/login/login-routing.module";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRouting,
    ReactiveFormsModule
  ]
})
export class LoginModule { }

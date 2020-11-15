import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DemoReactiveComponent} from './demo-reactive/demo-reactive.component';
import {ProfileEditorComponent} from './components/profile-editor/profile-editor.component';
import {NameEditorComponent} from './components/name-editor/name-editor.component';
import {DemoFormRoutingModule} from './demo-form-routing.module';
import {TemplateDrivenComponent} from '@app/demo-form/template-driven/template-driven.component';
import {ForbiddenValidatorDirective} from "@app/demo-form/validation/forbidden-validator.directive";

@NgModule({
  declarations: [
    DemoReactiveComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    TemplateDrivenComponent,
    ForbiddenValidatorDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DemoFormRoutingModule,
    FormsModule
  ]
})
export class DemoFormModule { }

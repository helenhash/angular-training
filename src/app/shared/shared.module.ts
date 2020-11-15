import {CommonModule} from '@angular/common';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {DatePickerComponent} from '@app/shared/components/date-picker/date-picker.component';
import {
  CusModalComponent,
  ModalActionComponent,
  ModalContentComponent,
} from '@app/shared/components/my-modal/cus-modal.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatchHeightDirective} from './directives/match-height.directive';
import {PhonePipe} from './pipes/phone.pipe';
import {ConfirmModalComponent} from './components/confirm-modal/confirm-modal.component';
import {ExpandMenuDirective} from "@app/shared/directives/expand-menu.directive";
import { SimpleModalComponent } from './components/simple-modal/simple-modal.component';


const MODAL_CLASSES = [ModalActionComponent, CusModalComponent, ModalContentComponent];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  declarations: [
    PhonePipe,
    MatchHeightDirective,
    MODAL_CLASSES,
    DatePickerComponent,
    CusModalComponent,
    ConfirmModalComponent,
    ExpandMenuDirective,
    SimpleModalComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NgbModule,
    PhonePipe,
    MatchHeightDirective,
    MODAL_CLASSES,
    DatePickerComponent,
    ExpandMenuDirective
  ],
  providers: [
    PhonePipe
  ],
  entryComponents: [
    ConfirmModalComponent,
    SimpleModalComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SharedModule { }

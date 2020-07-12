import {CommonModule} from '@angular/common';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HebDatePickerComponent} from '@app/shared/components/heb-date-picker/heb-date-picker.component';
import {
  HebModalActionComponent,
  HebModalComponent,
  HebModalContentComponent,
  HebModalFooterComponent,
  HebModalHeaderComponent
} from '@app/shared/components/heb-modal/heb-modal.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatchHeightDirective} from './directives/match-height.directive';
import {PhonePipe} from './pipes/phone.pipe';
import {ZmoveConfirmModalComponent} from './components/zmove-confirm-modal/zmove-confirm-modal.component';


const HEB_MODAL_CLASSES = [HebModalActionComponent, HebModalComponent, HebModalContentComponent,
  HebModalHeaderComponent, HebModalFooterComponent];

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
    HEB_MODAL_CLASSES,
    HebDatePickerComponent,
    HebModalComponent,
    ZmoveConfirmModalComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NgbModule,
    PhonePipe,
    MatchHeightDirective,
    HEB_MODAL_CLASSES,
    HebDatePickerComponent,
  ],
  providers: [
    PhonePipe
  ],
  entryComponents: [
    ZmoveConfirmModalComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SharedModule { }

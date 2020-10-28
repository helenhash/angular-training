import {Component, ContentChild, ContentChildren, EventEmitter, Input, Output, QueryList, TemplateRef, ViewChild} from '@angular/core';


@Component({
  selector: 'modal-content',
  template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `
})
export class ModalContentComponent {
  @ViewChild(TemplateRef, {static: true}) template: TemplateRef<any>;

  constructor() {
  }
}

@Component({
  selector: 'modal-action',
  template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `
})
export class ModalActionComponent {
  @ViewChild(TemplateRef, {static: true}) template: TemplateRef<any>;

  constructor() {
  }
}

@Component({
  selector: 'cus-modal',
  templateUrl: './cus-modal.component.html',
  styleUrls: ['./cus-modal.component.scss']
})
export class CusModalComponent {

  @Input('title') title = '';
  @Input('showClose') showClose = false;

  @Output() onHeaderClose = new EventEmitter<null>();

  @ContentChild(ModalContentComponent, { read: true, static: false }) modalContent: ModalContentComponent | null;
  @ContentChildren(ModalActionComponent) modalActions: QueryList<ModalActionComponent>;

  constructor() { }

}

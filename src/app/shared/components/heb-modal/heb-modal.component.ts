import {Component, ContentChild, ContentChildren, EventEmitter, Input, Output, QueryList, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'heb-modal-header',
  template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `
})
export class HebModalHeaderComponent {
  @ViewChild(TemplateRef, {static: true}) template: TemplateRef<any>;

  constructor() {
  }
}

@Component({
  selector: 'heb-modal-content',
  template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `
})
export class HebModalContentComponent {
  @ViewChild(TemplateRef, {static: true}) template: TemplateRef<any>;

  constructor() {
  }
}

@Component({
  selector: 'heb-modal-action',
  template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `
})
export class HebModalActionComponent {
  @ViewChild(TemplateRef, {static: true}) template: TemplateRef<any>;

  constructor() {
  }
}

@Component({
  selector: 'heb-modal-footer',
  template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `
})
export class HebModalFooterComponent {
  @ViewChild(TemplateRef, {static: true}) template: TemplateRef<any>;

  constructor() {
  }
}

@Component({
  selector: 'heb-modal',
  templateUrl: './heb-modal.component.html',
  styleUrls: ['./heb-modal.component.scss']
})
export class HebModalComponent {

  @Input('title') title = '';
  @Input('showClose') showClose = false;

  @Output() onHeaderClose = new EventEmitter<null>();

  @ContentChild(HebModalHeaderComponent, { read: true, static: false }) modalHeader: HebModalHeaderComponent | null;
  @ContentChild(HebModalContentComponent, { read: true, static: false }) modalContent: HebModalContentComponent | null;
  @ContentChild(HebModalFooterComponent, { read: true, static: false }) modalFooter: HebModalFooterComponent | null;
  @ContentChildren(HebModalActionComponent) modalActions: QueryList<HebModalActionComponent>;

  constructor() { }

}

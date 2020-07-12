import { Component, OnInit } from '@angular/core';
export type EditorType = 'name' | 'profile';

@Component({
  selector: 'demo-reactive',
  templateUrl: './demo-reactive.component.html',
  styleUrls: ['./demo-reactive.component.scss']
})
export class DemoReactiveComponent {

  editor: EditorType = 'name';

  get showNameEditor() {
    return this.editor === 'name';
  }

  get showProfileEditor() {
    return this.editor === 'profile';
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }

}

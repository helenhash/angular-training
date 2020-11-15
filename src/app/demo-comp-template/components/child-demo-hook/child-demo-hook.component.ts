import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'child-demo-hook',
  templateUrl: './child-demo-hook.component.html',
  styleUrls: ['./child-demo-hook.component.scss']
})
export class ChildDemoHookComponent implements OnInit, OnChanges {

  @Input()
  test: string;

  constructor() { }

  ngOnInit() {
    console.log('init ChildDemoHookComponent');
  }

  ngOnChanges() {
    console.log(this.test);
  }
}

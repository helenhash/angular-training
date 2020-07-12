import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-hook',
  templateUrl: './demo-hook.component.html',
  styleUrls: ['./demo-hook.component.scss']
})
export class DemoHookComponent implements OnInit {

  testDemo: string;
  constructor() { }

  ngOnInit() {
    this.testDemo = 'demo lifecycle hook - first value';
  }

}

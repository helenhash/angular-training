import { Component, OnInit } from '@angular/core';
import {Hero} from '@app/demo-comp-template/hero';

@Component({
  selector: 'demo-temp-syntax',
  templateUrl: './demo-temp-syntax.component.html',
  styleUrls: ['./demo-temp-syntax.component.scss']
})
export class DemoTempSyntaxComponent implements OnInit {

  title = 'Test 1';
  name = 'Angular 5';
  isSpecial = true;

  constructor() { }

  ngOnInit() {
  }

}

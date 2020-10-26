import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-temp-syntax',
  templateUrl: './demo-data-binding.component.html',
  styleUrls: ['./demo-data-binding.component.scss']
})
export class DemoDataBindingComponent implements OnInit {

  title = 'Test 1';
  name = 'Angular 5';
  isSpecial = true;
  clickMessage = '';
  values = '';
  text = '';

  constructor() { }

  ngOnInit() {
  }

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }

  onKey1(event: KeyboardEvent) { // with type info
    this.values += (event.target as HTMLInputElement).value + ' | ';
  }

  onKey2(value: string) {
    this.values += value + ' | ';
  }

  onEnter(value: string) { this.text = value; }
}

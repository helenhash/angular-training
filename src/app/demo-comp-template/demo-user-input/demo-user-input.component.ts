import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-user-input',
  templateUrl: './demo-user-input.component.html',
  styleUrls: ['./demo-user-input.component.scss']
})
export class DemoUserInputComponent implements OnInit {
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

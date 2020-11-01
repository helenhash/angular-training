import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-pipe',
  templateUrl: './demo-pipe.component.html',
  styleUrls: ['./demo-pipe.component.scss']
})
export class DemoPipeComponent implements OnInit {
  birthday = new Date(1988, 3, 15); // April 15, 1988
  toggle = true; // start with true == shortDate

  power = 5;
  factor = 1;

  get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle; }

  constructor() { }

  ngOnInit() {
  }

}

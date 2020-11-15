import {Component, OnInit} from '@angular/core';
import {heroes} from '@app/demo-comp-template/hero';

@Component({
  selector: 'demo-directive',
  templateUrl: './demo-directive.component.html',
  styleUrls: ['./demo-directive.component.scss']
})
export class DemoDirectiveComponent implements OnInit {
  color: string;

  heroes = heroes;
  hero = this.heroes[0];
  condition = false;

  constructor() { }

  ngOnInit() {
  }

}

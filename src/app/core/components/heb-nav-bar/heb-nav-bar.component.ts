import {
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {AppConstants} from '@app/app.constants';
import {HebRoute} from '@app/app-routing.module';


@Component({
  selector: 'heb-nav-bar',
  templateUrl: './heb-nav-bar.component.html',
  styleUrls: ['./heb-nav-bar.component.scss']
})
export class HebNavBarComponent implements OnInit {

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  constructor() {
  }

  ngOnInit() {
  }


}

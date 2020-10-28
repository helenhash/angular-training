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
import {DemoRoute, RouteConstants} from '@app/app-routing.module';


@Component({
  selector: 'com-nav-bar',
  templateUrl: './common-nav-bar.component.html',
  styleUrls: ['./common-nav-bar.component.scss']
})
export class CommonNavBarComponent implements OnInit {

  navbarOpen = false;
  routes: DemoRoute[] = RouteConstants.ROUTES

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  constructor() {
  }

  ngOnInit() {
  }


}

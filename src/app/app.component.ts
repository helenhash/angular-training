import {Component, Input} from '@angular/core';
import {DemoRoute, RouteConstants} from "@app/app-routing.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  @Input() menu: 'side' | 'horizontal' | 'navBar' | 'overlay' | 'none' = 'side';
  @Input() routes: DemoRoute[] = RouteConstants.ROUTES;
  @Input() navBarRoutes: DemoRoute[];
}

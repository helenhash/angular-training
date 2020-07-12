import {Component, Input} from '@angular/core';
import {HebRoute, RouteConstants} from "@app/app-routing.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  @Input() menu: 'side' | 'horizontal' | 'navBar' | 'overlay' | 'none' = 'side';
  @Input() routes: HebRoute[] = RouteConstants.ROUTES;
  @Input() navBarRoutes: HebRoute[];
}

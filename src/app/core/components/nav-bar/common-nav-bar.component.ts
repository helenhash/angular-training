import {Component, OnInit} from '@angular/core';
import {DemoRoute, RouteConstants} from '@app/app-routing.module';
import {AuthService} from "@app/login/service/auth.service";
import {Router} from "@angular/router";
import {User} from "@app/login/model/user";


@Component({
  selector: 'com-nav-bar',
  templateUrl: './common-nav-bar.component.html',
  styleUrls: ['./common-nav-bar.component.scss']
})
export class CommonNavBarComponent implements OnInit {

  navbarOpen = false;
  routes: DemoRoute[] = RouteConstants.ROUTES
  currentUser: User;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  constructor(private authService: AuthService, private router: Router) {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

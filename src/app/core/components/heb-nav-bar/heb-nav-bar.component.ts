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

  @Input() pageTitle = '';
  // @Input() currentUser: AuthModel;
  @Input() showToggle = false;
  @Input() showMenuToggle = false;
  @Input() isSideNavOpen: boolean;
  @Input() routes: HebRoute[];

  @Output() toggleSideNav = new EventEmitter<any>();
  @Output() toggleMenuConfig = new EventEmitter<any>();
  @Output() logoutClick = new EventEmitter<any>();

  // @ContentChild(HebNavBarPageInfoComponent) navBarPageInfo: HebNavBarPageInfoComponent | null;
  // @ContentChild(HebNavBarUserPanelComponent) navBarUserPanel: HebNavBarUserPanelComponent | null;
  // @ContentChild(HebNavBarUserActionComponent) navBarUserAction: HebNavBarUserActionComponent | null;
  // @ContentChild(HebNavBarUserInfoComponent) navBarUserInfo: HebNavBarUserInfoComponent | null;
  // @ContentChildren(HebNavBarActionComponent) navBarActions: QueryList<HebNavBarActionComponent>;

  appConstants = AppConstants;
  appName = 'Angular Demo';
  constructor() {
  }

  ngOnInit() {
  }

  /**
   * Side nav button click handler.
   */
  toggleSideNavClick() {
    this.toggleSideNav.emit();
  }

  /**
   * Logout
   */
  logout() {
    this.logoutClick.emit();
  }

}

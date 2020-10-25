import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RouterConfig} from '@app/app.constants';
import {HomeComponent} from "@app/home/home.component";

export class RouteConstants {
  // this object drives the side menu, use sub menu for collapse-able side menu
  public static ROUTES: HebRoute[] = [
    {
      text: RouterConfig.COMP_DEMO.title, icon: 'warehouse', url: RouterConfig.COMP_DEMO.link,
      access: [], isCollapsed: false
    },
    {
      text: RouterConfig.FORM_DEMO.title, icon: 'truck-moving',
      url: RouterConfig.FORM_DEMO.link, access: [], isCollapsed: false,
    }
  ];
}

export interface HebRoute {
  text: string;
  icon: string;
  url: string;
  access: string[];
  isCollapsed: boolean;
  subMenu?: HebSubRoute[];
}

export interface HebSubRoute {
  text: string;
  url: string;
  access: string[];
}

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: RouterConfig.COMP_DEMO.path,
    loadChildren: () => {
      return import('./demo-comp-template/demo-comp-template.module').then(mod => mod.DemoCompTemplateModule);
    },
  },
  {
    path: RouterConfig.FORM_DEMO.path,
    loadChildren: () => {
      return import('./demo-form/demo-reactive-form.module').then(mod => mod.DemoReactiveFormModule);
    },
  },
  {
    path: RouterConfig.NOT_FOUND.path,
    loadChildren: './page-not-found/page-not-found.module#PageNotFoundModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

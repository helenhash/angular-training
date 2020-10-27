import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RouterConfig} from '@app/app.constants';
import {HomeComponent} from '@app/home/home.component';

export class RouteConstants {
  // this object drives the side menu, use sub menu for collapse-able side menu
  public static ROUTES: DemoRoute[] = [
    {
      id: 'comp_demo', text: RouterConfig.COMP_DEMO.title, icon: '1', url: RouterConfig.COMP_DEMO.link,
      access: [], isCollapsed: false, subMenu: [{text: 'Demo', url: RouterConfig.COMP_DEMO.link, access: []}]
    },
    {
      id: 'form_demo', text: RouterConfig.FORM_DEMO.title, icon: '2',
      url: RouterConfig.FORM_DEMO.link, access: [], isCollapsed: false,
    },
    {
      id: 'di_demo', text: RouterConfig.DI_DEMO.title, icon: '3',
      url: RouterConfig.DI_DEMO.link, access: [], isCollapsed: false,
    }
  ];
}

export interface DemoRoute {
  id: string;
  text: string;
  icon: string;
  url: string;
  access: string[];
  isCollapsed: boolean;
  subMenu?: SubRoute[];
}

export interface SubRoute {
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
    path: RouterConfig.DI_DEMO.path,
    loadChildren: () => {
      return import('./demo-di/demo-di.module').then(mod => mod.DemoDiModule);
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

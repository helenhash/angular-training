import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RouterConfig} from '@app/app.constants';
import {HomeComponent} from '@app/home/home.component';

export class RouteConstants {
  // this object drives the side menu, use sub menu for collapse-able side menu
  public static ROUTES: DemoRoute[] = [
    {
      text: RouterConfig.COMP_DEMO.title, icon: '1', url: RouterConfig.COMP_DEMO.link,
      access: [], isCollapsed: false,
      subMenu: [{text: RouterConfig.DATA_BIND.title, url: RouterConfig.DATA_BIND.link, access: []},
        {text: RouterConfig.PIPES.title, url: RouterConfig.PIPES.link, access: []},
        {text: RouterConfig.DIRECTIVES.title, url: RouterConfig.DIRECTIVES.link, access: []},
        {text: RouterConfig.HOOK.title, url: RouterConfig.HOOK.link, access: []},
        {text: RouterConfig.COMP_INTERACTION.title, url: RouterConfig.COMP_INTERACTION.link, access: []}]
    },
    {
      text: RouterConfig.FORM_DEMO.title, icon: '2',
      url: RouterConfig.FORM_DRIVEN_DEMO.link, access: [], isCollapsed: false,
      subMenu: [{text: RouterConfig.FORM_DRIVEN_DEMO.title, url: RouterConfig.FORM_DRIVEN_DEMO.link, access: []},
        {text: RouterConfig.FORM_REACTIVE_DEMO.title, url: RouterConfig.FORM_REACTIVE_DEMO.link, access: []}]
    },
    {
      text: RouterConfig.DI_DEMO.title, icon: '3',
      url: RouterConfig.DI_DEMO.link, access: [], isCollapsed: false,
    }
  ];
}

export interface DemoRoute {
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
      return import('./demo-form/demo-form.module').then(mod => mod.DemoFormModule);
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

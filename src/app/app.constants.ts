export const AppConstants = {
  APPLICATION_NAME: 'Javascript Application Framework',
  BASE_API_URL: '/zonemove_api',
  // token
  TOKEN_KEY: 'X-HEB-JAF-TOKEN',
  ACK: 'ACK',
  VIEW: 'VIEW',
  ENABLE_STORE_LOCATIONS: true,
  LOG_OFF_ICON: 'sign-out'
};

export interface RouteLink {
  path: string;
  link: string;
}

export const RouterConfig = {
  HOME: {path: '', link: '/'},
  COMP_DEMO: {path: 'comp-temp', link: '/comp-temp', title: 'Component and Template Demo'},
  DATA_BIND: {path: 'comp-temp/data-binding', link: '/comp-temp/data-binding', title: 'Data Binding Demo'},
  PIPES: {path: 'comp-temp/pipes', link: '/comp-temp/pipes', title: 'Pipes Demo'},
  DIRECTIVES: {path: 'comp-temp/directives', link: '/comp-temp/directives', title: 'Directives Demo'},
  HOOK: {path: 'comp-temp/lifecycle', link: '/comp-temp/lifecycle', title: 'Component Lifecycle Demo'},
  COMP_INTERACTION: {path: 'comp-temp/interaction', link: '/comp-temp/interaction', title: 'Component Interaction Demo'},
  FORM_DEMO: {path: 'form', link: '/form', title: 'Form And Validation Demo'},
  FORM_DRIVEN_DEMO: {path: 'form/reactive', link: '/form/reactive', title: 'Reactive Form Demo'},
  FORM_REACTIVE_DEMO: {path: 'form/template-driven', link: '/form/template-driven', title: 'Template driven Form Demo'},
  DI_DEMO: {path: 'di', link: '/di', title: 'Dependency Injection'},
  NOT_FOUND: {path: '**', link: null, title: 'Page Not Found'}
};

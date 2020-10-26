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
  COMP_DEMO: {path: 'comp-demp', link: '/comp-demp', title: 'Component and Template Demo'},
  FORM_DEMO: {path: 'form', link: '/form', title: 'Form and Validation Demo'},
  DI_DEMO: {path: 'di', link: '/di', title: 'Dependency Injection'},
  NOT_FOUND: {path: '**', link: null, title: 'Page Not Found'}
};

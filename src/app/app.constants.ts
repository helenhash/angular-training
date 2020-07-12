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
  LOGIN: {path: '', link: '/'},
  HOME: {path: '', link: '/'},
  COMP_DEMO: {path: 'comp-demp', link: '/comp-demp', title: 'Component and Template Demo'},
  FORM_DEMO: {path: 'form', link: '/form', title: 'Form and Validation Demo'},
  STORE_MOVE: {path: 'store-move', link: '/store-move', title: 'Store Move'},
  STORE_SETUP: {path: 'store-setup', link: '/store-setup', title: 'Store Setup'},
  ZONE_MAINTENANCE: {path: 'zone-maintenance', link: '/zone-maintenance', title: 'Zone Maintenance'},
  NOT_FOUND: {path: '**', link: null, title: 'Page Not Found'}
};

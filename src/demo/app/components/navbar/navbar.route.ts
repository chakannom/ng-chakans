import { Route } from '@angular/router';
import { NavbarComponent } from './navbar.component';

export const NAVBAR_ROUTE: Route = {
  path: 'navbar',
  component: NavbarComponent,
  data: {
    authorities: [],
    pageTitle: 'globla.title'
  }
};

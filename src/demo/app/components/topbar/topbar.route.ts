import { Route } from '@angular/router';
import { TopbarComponent } from './topbar.component';

export const TOPBAR_ROUTE: Route = {
  path: 'topbar',
  component: TopbarComponent,
  data: {
    authorities: [],
    pageTitle: 'globla.title'
  }
};

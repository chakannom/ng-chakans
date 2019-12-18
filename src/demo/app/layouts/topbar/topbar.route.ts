import { Route } from '@angular/router';
import { TopbarForLayoutComponent } from './topbar.component';

export const TOPBAR_ROUTE_FOR_LAYOUT: Route = {
  path: '',
  component: TopbarForLayoutComponent,
  outlet: 'topbar'
};

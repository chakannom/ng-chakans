import { Routes } from '@angular/router';
import { NAVBAR_ROUTE, TOPBAR_ROUTE, SIDEBAR_ROUTE } from './';

export const COMPONENTS_ROUTES: Routes = [
  {
    path: 'components',
    children: [NAVBAR_ROUTE, TOPBAR_ROUTE, SIDEBAR_ROUTE]
  }
];

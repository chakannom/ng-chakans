import { Routes } from '@angular/router';
import { NAVBAR_ROUTE } from './';

export const COMPONENTS_ROUTES: Routes = [
  {
    path: 'components',
    children: [NAVBAR_ROUTE]
  }
];

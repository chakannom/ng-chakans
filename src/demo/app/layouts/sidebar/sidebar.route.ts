import { Route } from '@angular/router';
import { SidebarForLayoutComponent } from './sidebar.component';

export const SIDEBAR_ROUTE_FOR_LAYOUT: Route = {
  path: '',
  component: SidebarForLayoutComponent,
  outlet: 'sidebar'
};

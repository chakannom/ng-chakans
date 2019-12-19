import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home';
import { CksMainWithHeadComponent, CksMainWithSideAndHeadComponent } from '../../main/public_api';
import { SIDEBAR_ROUTE_FOR_LAYOUT } from './layouts/sidebar/sidebar.route';
import { TOPBAR_ROUTE_FOR_LAYOUT } from './layouts/topbar/topbar.route';

const layoutRoutes: Routes = [
  {
    path: 'with-head',
    component: CksMainWithHeadComponent,
    children: [{ path: '', component: HomeComponent, pathMatch: 'full' }, TOPBAR_ROUTE_FOR_LAYOUT]
  },
  {
    path: 'with-side-and-head',
    component: CksMainWithSideAndHeadComponent,
    children: [{ path: '', component: HomeComponent, pathMatch: 'full' }, SIDEBAR_ROUTE_FOR_LAYOUT, TOPBAR_ROUTE_FOR_LAYOUT]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(layoutRoutes, { enableTracing: true })],
  exports: [RouterModule]
})
export class NgChakansAppRoutingModule {}

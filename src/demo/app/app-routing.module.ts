import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainWithHeadComponent } from './layouts/main/with-head/main-with-head.component';
import { HomeComponent } from './home';
import { CksMainWithSideAndHeadComponent } from '../../main/public_api';
import { SIDEBAR_ROUTE_FOR_LAYOUT } from './layouts/sidebar/sidebar.route';
import { TOPBAR_ROUTE_FOR_LAYOUT } from './layouts/topbar/topbar.route';

const layoutRoutes: Routes = [
  {
    path: 'with-head',
    component: MainWithHeadComponent,
    children: [{ path: '', component: HomeComponent, pathMatch: 'full' }]
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

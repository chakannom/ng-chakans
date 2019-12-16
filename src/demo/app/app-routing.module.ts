import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainWithHeadComponent } from './layouts/main/with-head/main-with-head.component';
import { HomeComponent } from './home';
import { MainWithSideAndHeadComponent } from './layouts/main/with-side-and-head/main-with-side-and-head.component';

const layoutRoutes: Routes = [
  {
    path: 'with-head',
    component: MainWithHeadComponent,
    children: [{ path: '', component: HomeComponent, pathMatch: 'full' }]
  },
  {
    path: 'with-side-and-head',
    component: MainWithSideAndHeadComponent,
    children: [{ path: '', component: HomeComponent, pathMatch: 'full' }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(layoutRoutes, { enableTracing: true })],
  exports: [RouterModule]
})
export class NgChakansAppRoutingModule {}

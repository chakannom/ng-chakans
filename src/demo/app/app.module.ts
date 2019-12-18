import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgChakansModule } from '../../main/public_api';
import { NgChakansAppRoutingModule } from './app-routing.module';
import { NgChakansHomeModule } from './home/home.module';
import { NgChakansComponentsModule } from './components/components.module';
import { MainComponent } from './layouts';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fontAwesomeIcons } from './font-awesome-icons';
import { MainWithHeadComponent } from './layouts/main/with-head/main-with-head.component';
import { SidebarForLayoutComponent } from './layouts/sidebar/sidebar.component';
import { TopbarForLayoutComponent } from './layouts/topbar/topbar.component';

export function translatePartialLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'i18n/', `.json`);
}

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translatePartialLoader,
        deps: [HttpClient]
      }
    }),
    NgChakansModule.forRoot({ serverApiUrl: '/' }),
    NgChakansAppRoutingModule,
    NgChakansHomeModule,
    NgChakansComponentsModule
  ],
  declarations: [MainComponent, MainWithHeadComponent, SidebarForLayoutComponent, TopbarForLayoutComponent],
  providers: [],
  bootstrap: [MainComponent]
})
export class NgChakansAppModule {
  constructor(iconLibrary: FaIconLibrary) {
    iconLibrary.addIconPacks(fas, far);
    iconLibrary.addIcons(...fontAwesomeIcons);
  }
}

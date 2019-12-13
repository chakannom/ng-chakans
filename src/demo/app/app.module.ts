import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgChakansModule } from '../../main/public_api';
import { NgChakansHomeModule } from './home/home.module';
import { NgChakansComponentsModule } from './components/components.module';
import { MainComponent } from './layouts';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fontAwesomeIcons } from './font-awesome-icons';

export function translatePartialLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'i18n/', `.json`);
}

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([], { enableTracing: true }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translatePartialLoader,
        deps: [HttpClient]
      }
    }),
    NgChakansModule.forRoot({ serverApiUrl: '/' }),
    NgChakansHomeModule,
    NgChakansComponentsModule
  ],
  declarations: [MainComponent],
  providers: [],
  bootstrap: [MainComponent]
})
export class NgChakansAppModule {
  constructor(iconLibrary: FaIconLibrary) {
    iconLibrary.addIconPacks(fas, far);
    iconLibrary.addIcons(...fontAwesomeIcons);
  }
}

import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgChakansModule } from '../../main/public_api';
import { NgChakansHomeModule } from './home/home.module';
import { NgChakansComponentsModule } from './components/components.module';
import { CksMainComponent } from './layouts';
import { HttpClientModule, HttpClient } from '@angular/common/http';

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
  declarations: [CksMainComponent],
  providers: [],
  bootstrap: [CksMainComponent]
})
export class NgChakansAppModule {}

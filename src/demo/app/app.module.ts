import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgChakansModule } from '../../main/public_api';
import { NgChakansHomeModule } from './home/home.module';
import { NgChakansComponentsModule } from './components/components.module';
import { CksMainComponent } from './layouts';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { enableTracing: true }),
    TranslateModule.forRoot(),
    NgChakansModule.forRoot({ serverApiUrl: '/' }),
    NgChakansHomeModule,
    NgChakansComponentsModule
  ],
  declarations: [CksMainComponent],
  providers: [],
  bootstrap: [CksMainComponent]
})
export class NgChakansAppModule {}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgChakansModule } from '../../main/public_api';
import { CksAppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot([]), NgChakansModule.forRoot({ serverApiUrl: '/' })],
  declarations: [CksAppComponent],
  providers: [],
  bootstrap: [CksAppComponent]
})
export class SampleAppModule {}

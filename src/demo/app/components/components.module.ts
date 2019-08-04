import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgChakansModule } from '../../../main/public_api';
import { NavbarComponent, COMPONENTS_ROUTES } from './';

@NgModule({
  imports: [RouterModule.forChild(COMPONENTS_ROUTES), FontAwesomeModule, NgChakansModule],
  declarations: [NavbarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NgChakansComponentsModule {}

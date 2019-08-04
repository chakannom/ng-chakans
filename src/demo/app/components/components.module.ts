import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavbarComponent, COMPONENTS_ROUTES } from './';

@NgModule({
  imports: [RouterModule.forChild(COMPONENTS_ROUTES)],
  declarations: [NavbarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NgChakansComponentsModule {}

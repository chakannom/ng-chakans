import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { CksModuleConfig } from './config';
import { CksConfigService } from './config.service';
import { CKS_COMPONENTS, CKS_DIRECTIVES, CKS_LAYOUTS } from './cks-components';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, FontAwesomeModule, NgbModule, RouterModule, TranslateModule],
  declarations: [...CKS_COMPONENTS, ...CKS_DIRECTIVES, ...CKS_LAYOUTS],
  entryComponents: [],
  exports: [...CKS_COMPONENTS, ...CKS_DIRECTIVES, ...CKS_LAYOUTS, TranslateModule]
})
export class NgChakansModule {
  static forRoot(moduleConfig: CksModuleConfig): ModuleWithProviders {
    return {
      ngModule: NgChakansModule,
      providers: [
        { provide: CksModuleConfig, useValue: moduleConfig },
        {
          provide: CksConfigService,
          useClass: CksConfigService,
          deps: [CksModuleConfig]
        }
      ]
    };
  }
  static forChild(moduleConfig: CksModuleConfig): ModuleWithProviders {
    return {
      ngModule: NgChakansModule,
      providers: [{ provide: CksModuleConfig, useValue: moduleConfig }]
    };
  }
}

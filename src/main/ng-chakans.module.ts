/*
 Copyright 2013-2019 the original author or authors from the JHipster project.
 * Modified by ChaKanNom 2019.07.31

 This file is part of the JHipster project, see https://www.jhipster.tech/
 for more information.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CksModuleConfig } from './config';
import { CksConfigService } from './config.service';
import { CksDynamicComponent } from './components/dynamic/dynamic.component';
import { CksMainWithHeadComponent } from './layouts/main/with-head/main-with-head.component';
import { CksMainWithSideAndHeadComponent } from './layouts/main/with-side-and-head/main-with-side-and-head.component';
import { CKS_COMPONENTS, CKS_DIRECTIVES, CKS_LAYOUTS } from './cks-components';
import { CksMissingTranslationHandler } from './config/cks-missing-translation.config';

@NgModule({
  imports: [CommonModule, FontAwesomeModule, NgbModule, RouterModule, TranslateModule],
  declarations: [...CKS_COMPONENTS, ...CKS_DIRECTIVES, ...CKS_LAYOUTS],
  entryComponents: [CksDynamicComponent, CksMainWithHeadComponent, CksMainWithSideAndHeadComponent],
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

export function translatePartialLoader(http: HttpClient, prefix = 'i18n/', suffix = '.json?buildTimestamp=0') {
  return new TranslateHttpLoader(http, prefix, suffix);
}

export function missingTranslationHandler(configService: CksConfigService) {
  return new CksMissingTranslationHandler(configService);
}

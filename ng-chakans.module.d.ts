import { ModuleWithProviders } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CksModuleConfig } from './config';
import { CksConfigService } from './config.service';
import { CksMissingTranslationHandler } from './config/cks-missing-translation.config';
export declare class NgChakansModule {
    static forRoot(moduleConfig: CksModuleConfig): ModuleWithProviders;
    static forChild(moduleConfig: CksModuleConfig): ModuleWithProviders;
}
export declare function translatePartialLoader(http: HttpClient, prefix?: string, suffix?: string): TranslateHttpLoader;
export declare function missingTranslationHandler(configService: CksConfigService): CksMissingTranslationHandler;

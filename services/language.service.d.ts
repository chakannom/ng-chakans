import { TranslateService } from '@ngx-translate/core';
import { CksConfigService } from '../config.service';
export declare class CksLanguageService {
    private translateService;
    private configService;
    currentLang: string;
    constructor(translateService: TranslateService, configService: CksConfigService);
    init(): void;
    changeLanguage(languageKey: string): void;
    getCurrentLanguage(): string;
}

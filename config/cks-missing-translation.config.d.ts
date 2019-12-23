import { MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';
import { CksConfigService } from '../config.service';
export declare class CksMissingTranslationHandler implements MissingTranslationHandler {
    private configService;
    constructor(configService: CksConfigService);
    handle(params: MissingTranslationHandlerParams): string;
}

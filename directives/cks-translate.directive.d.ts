import { ElementRef, OnChanges, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CksConfigService } from '../config.service';
/**
 * A wrapper directive on top of the translate pipe as the inbuilt translate directive from ngx-translate is too verbose and buggy
 */
export declare class CksTranslateDirective implements OnChanges, OnInit, OnDestroy {
    private configService;
    private el;
    private translateService;
    cksTranslate: string;
    translateValues: any;
    private readonly directiveDestroyed;
    constructor(configService: CksConfigService, el: ElementRef, translateService: TranslateService);
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
    private getTranslation;
}

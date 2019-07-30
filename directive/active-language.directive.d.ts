import { OnInit, ElementRef, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
export declare class CksActiveLanguageDirective implements OnInit {
    private el;
    private renderer;
    private translateService;
    cksActiveLanguage: string;
    constructor(el: ElementRef, renderer: Renderer2, translateService: TranslateService);
    ngOnInit(): void;
    updateActiveFlag(selectedLanguage: any): void;
}

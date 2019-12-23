import * as tslib_1 from "tslib";
/*
 Copyright 2013-2019 the original author or authors from the JHipster project.
 * Modified by ChaKanNom 2019.12.23

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
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CksConfigService } from '../config.service';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
import * as i2 from "../config.service";
let CksLanguageService = class CksLanguageService {
    constructor(translateService, configService) {
        this.translateService = translateService;
        this.configService = configService;
        this.currentLang = 'ko';
    }
    init() {
        const config = this.configService.getConfig();
        this.currentLang = config.defaultI18nLang;
        this.translateService.setDefaultLang(this.currentLang);
        this.translateService.use(this.currentLang);
    }
    changeLanguage(languageKey) {
        this.currentLang = languageKey;
        this.configService.CONFIG_OPTIONS.defaultI18nLang = languageKey;
        this.translateService.use(this.currentLang);
    }
    getCurrentLanguage() {
        return this.currentLang;
    }
};
CksLanguageService.ctorParameters = () => [
    { type: TranslateService },
    { type: CksConfigService }
];
CksLanguageService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CksLanguageService_Factory() { return new CksLanguageService(i0.ɵɵinject(i1.TranslateService), i0.ɵɵinject(i2.CksConfigService)); }, token: CksLanguageService, providedIn: "root" });
CksLanguageService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], CksLanguageService);
export { CksLanguageService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWNoYWthbnMvIiwic291cmNlcyI6WyJzZXJ2aWNlcy9sYW5ndWFnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBa0JHO0FBQ0gsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUtyRCxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFrQjtJQUc3QixZQUFvQixnQkFBa0MsRUFBVSxhQUErQjtRQUEzRSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBRi9GLGdCQUFXLEdBQUcsSUFBSSxDQUFDO0lBRStFLENBQUM7SUFFbkcsSUFBSTtRQUNGLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDOUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDO1FBQzFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxjQUFjLENBQUMsV0FBbUI7UUFDaEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsZUFBZSxHQUFHLFdBQVcsQ0FBQztRQUNoRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0NBQ0YsQ0FBQTs7WUFsQnVDLGdCQUFnQjtZQUF5QixnQkFBZ0I7OztBQUhwRixrQkFBa0I7SUFIOUIsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLGtCQUFrQixDQXFCOUI7U0FyQlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiBDb3B5cmlnaHQgMjAxMy0yMDE5IHRoZSBvcmlnaW5hbCBhdXRob3Igb3IgYXV0aG9ycyBmcm9tIHRoZSBKSGlwc3RlciBwcm9qZWN0LlxuICogTW9kaWZpZWQgYnkgQ2hhS2FuTm9tIDIwMTkuMTIuMjNcblxuIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBKSGlwc3RlciBwcm9qZWN0LCBzZWUgaHR0cHM6Ly93d3cuamhpcHN0ZXIudGVjaC9cbiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cblxuIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuXG5pbXBvcnQgeyBDa3NDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vY29uZmlnLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDa3NMYW5ndWFnZVNlcnZpY2Uge1xuICBjdXJyZW50TGFuZyA9ICdrbyc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlLCBwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENrc0NvbmZpZ1NlcnZpY2UpIHt9XG5cbiAgaW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnKCk7XG4gICAgdGhpcy5jdXJyZW50TGFuZyA9IGNvbmZpZy5kZWZhdWx0STE4bkxhbmc7XG4gICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnNldERlZmF1bHRMYW5nKHRoaXMuY3VycmVudExhbmcpO1xuICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS51c2UodGhpcy5jdXJyZW50TGFuZyk7XG4gIH1cblxuICBjaGFuZ2VMYW5ndWFnZShsYW5ndWFnZUtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jdXJyZW50TGFuZyA9IGxhbmd1YWdlS2V5O1xuICAgIHRoaXMuY29uZmlnU2VydmljZS5DT05GSUdfT1BUSU9OUy5kZWZhdWx0STE4bkxhbmcgPSBsYW5ndWFnZUtleTtcbiAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UudXNlKHRoaXMuY3VycmVudExhbmcpO1xuICB9XG5cbiAgZ2V0Q3VycmVudExhbmd1YWdlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudExhbmc7XG4gIH1cbn1cbiJdfQ==
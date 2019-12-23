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
var CksLanguageService = /** @class */ (function () {
    function CksLanguageService(translateService, configService) {
        this.translateService = translateService;
        this.configService = configService;
        this.currentLang = 'ko';
    }
    CksLanguageService.prototype.init = function () {
        var config = this.configService.getConfig();
        this.currentLang = config.defaultI18nLang;
        this.translateService.setDefaultLang(this.currentLang);
        this.translateService.use(this.currentLang);
    };
    CksLanguageService.prototype.changeLanguage = function (languageKey) {
        this.currentLang = languageKey;
        this.configService.CONFIG_OPTIONS.defaultI18nLang = languageKey;
        this.translateService.use(this.currentLang);
    };
    CksLanguageService.prototype.getCurrentLanguage = function () {
        return this.currentLang;
    };
    CksLanguageService.ctorParameters = function () { return [
        { type: TranslateService },
        { type: CksConfigService }
    ]; };
    CksLanguageService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CksLanguageService_Factory() { return new CksLanguageService(i0.ɵɵinject(i1.TranslateService), i0.ɵɵinject(i2.CksConfigService)); }, token: CksLanguageService, providedIn: "root" });
    CksLanguageService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        })
    ], CksLanguageService);
    return CksLanguageService;
}());
export { CksLanguageService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWNoYWthbnMvIiwic291cmNlcyI6WyJzZXJ2aWNlcy9sYW5ndWFnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBa0JHO0FBQ0gsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUtyRDtJQUdFLDRCQUFvQixnQkFBa0MsRUFBVSxhQUErQjtRQUEzRSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBRi9GLGdCQUFXLEdBQUcsSUFBSSxDQUFDO0lBRStFLENBQUM7SUFFbkcsaUNBQUksR0FBSjtRQUNFLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDOUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDO1FBQzFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCwyQ0FBYyxHQUFkLFVBQWUsV0FBbUI7UUFDaEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsZUFBZSxHQUFHLFdBQVcsQ0FBQztRQUNoRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsK0NBQWtCLEdBQWxCO1FBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7O2dCQWpCcUMsZ0JBQWdCO2dCQUF5QixnQkFBZ0I7OztJQUhwRixrQkFBa0I7UUFIOUIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLGtCQUFrQixDQXFCOUI7NkJBaEREO0NBZ0RDLEFBckJELElBcUJDO1NBckJZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gQ29weXJpZ2h0IDIwMTMtMjAxOSB0aGUgb3JpZ2luYWwgYXV0aG9yIG9yIGF1dGhvcnMgZnJvbSB0aGUgSkhpcHN0ZXIgcHJvamVjdC5cbiAqIE1vZGlmaWVkIGJ5IENoYUthbk5vbSAyMDE5LjEyLjIzXG5cbiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgSkhpcHN0ZXIgcHJvamVjdCwgc2VlIGh0dHBzOi8vd3d3LmpoaXBzdGVyLnRlY2gvXG4gZm9yIG1vcmUgaW5mb3JtYXRpb24uXG5cbiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcblxuaW1wb3J0IHsgQ2tzQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL2NvbmZpZy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ2tzTGFuZ3VhZ2VTZXJ2aWNlIHtcbiAgY3VycmVudExhbmcgPSAna28nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSwgcHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDa3NDb25maWdTZXJ2aWNlKSB7fVxuXG4gIGluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWdTZXJ2aWNlLmdldENvbmZpZygpO1xuICAgIHRoaXMuY3VycmVudExhbmcgPSBjb25maWcuZGVmYXVsdEkxOG5MYW5nO1xuICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS5zZXREZWZhdWx0TGFuZyh0aGlzLmN1cnJlbnRMYW5nKTtcbiAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UudXNlKHRoaXMuY3VycmVudExhbmcpO1xuICB9XG5cbiAgY2hhbmdlTGFuZ3VhZ2UobGFuZ3VhZ2VLZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuY3VycmVudExhbmcgPSBsYW5ndWFnZUtleTtcbiAgICB0aGlzLmNvbmZpZ1NlcnZpY2UuQ09ORklHX09QVElPTlMuZGVmYXVsdEkxOG5MYW5nID0gbGFuZ3VhZ2VLZXk7XG4gICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnVzZSh0aGlzLmN1cnJlbnRMYW5nKTtcbiAgfVxuXG4gIGdldEN1cnJlbnRMYW5ndWFnZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRMYW5nO1xuICB9XG59XG4iXX0=
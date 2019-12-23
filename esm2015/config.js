import * as tslib_1 from "tslib";
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
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
let CksModuleConfig = class CksModuleConfig {
    constructor() {
        this.serverApiUrl = '/';
        this.i18nEnabled = false;
        this.defaultI18nLang = 'ko';
        this.noi18nMessage = 'translation-not-found';
    }
};
CksModuleConfig.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CksModuleConfig_Factory() { return new CksModuleConfig(); }, token: CksModuleConfig, providedIn: "root" });
CksModuleConfig = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], CksModuleConfig);
export { CksModuleConfig };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctY2hha2Fucy8iLCJzb3VyY2VzIjpbImNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtCRztBQUNILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDLElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFINUI7UUFJRSxpQkFBWSxHQUFHLEdBQUcsQ0FBQztRQUNuQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixvQkFBZSxHQUFHLElBQUksQ0FBQztRQUN2QixrQkFBYSxHQUFHLHVCQUF1QixDQUFDO0tBQ3pDO0NBQUEsQ0FBQTs7QUFMWSxlQUFlO0lBSDNCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxlQUFlLENBSzNCO1NBTFksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gQ29weXJpZ2h0IDIwMTMtMjAxOSB0aGUgb3JpZ2luYWwgYXV0aG9yIG9yIGF1dGhvcnMgZnJvbSB0aGUgSkhpcHN0ZXIgcHJvamVjdC5cbiAqIE1vZGlmaWVkIGJ5IENoYUthbk5vbSAyMDE5LjA3LjMxXG5cbiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgSkhpcHN0ZXIgcHJvamVjdCwgc2VlIGh0dHBzOi8vd3d3LmpoaXBzdGVyLnRlY2gvXG4gZm9yIG1vcmUgaW5mb3JtYXRpb24uXG5cbiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ2tzTW9kdWxlQ29uZmlnIHtcbiAgc2VydmVyQXBpVXJsID0gJy8nO1xuICBpMThuRW5hYmxlZCA9IGZhbHNlO1xuICBkZWZhdWx0STE4bkxhbmcgPSAna28nO1xuICBub2kxOG5NZXNzYWdlID0gJ3RyYW5zbGF0aW9uLW5vdC1mb3VuZCc7XG59XG4iXX0=
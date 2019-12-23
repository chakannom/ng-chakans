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
import { CksModuleConfig } from './config';
import * as i0 from "@angular/core";
import * as i1 from "./config";
var CksConfigService = /** @class */ (function () {
    function CksConfigService(moduleConfig) {
        this.CONFIG_OPTIONS = tslib_1.__assign({}, new CksModuleConfig(), moduleConfig);
    }
    CksConfigService.prototype.getConfig = function () {
        return this.CONFIG_OPTIONS;
    };
    CksConfigService.ctorParameters = function () { return [
        { type: CksModuleConfig }
    ]; };
    CksConfigService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CksConfigService_Factory() { return new CksConfigService(i0.ɵɵinject(i1.CksModuleConfig)); }, token: CksConfigService, providedIn: "root" });
    CksConfigService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        })
    ], CksConfigService);
    return CksConfigService;
}());
export { CksConfigService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1jaGFrYW5zLyIsInNvdXJjZXMiOlsiY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQkc7QUFDSCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxVQUFVLENBQUM7OztBQUszQztJQUdFLDBCQUFZLFlBQThCO1FBQ3hDLElBQUksQ0FBQyxjQUFjLHdCQUNkLElBQUksZUFBZSxFQUFFLEVBQ3JCLFlBQVksQ0FDaEIsQ0FBQztJQUNKLENBQUM7SUFFRCxvQ0FBUyxHQUFUO1FBQ0UsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7O2dCQVQwQixlQUFlOzs7SUFIL0IsZ0JBQWdCO1FBSDVCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxnQkFBZ0IsQ0FhNUI7MkJBdENEO0NBc0NDLEFBYkQsSUFhQztTQWJZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gQ29weXJpZ2h0IDIwMTMtMjAxOSB0aGUgb3JpZ2luYWwgYXV0aG9yIG9yIGF1dGhvcnMgZnJvbSB0aGUgSkhpcHN0ZXIgcHJvamVjdC5cbiAqIE1vZGlmaWVkIGJ5IENoYUthbk5vbSAyMDE5LjA3LjMxXG5cbiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgSkhpcHN0ZXIgcHJvamVjdCwgc2VlIGh0dHBzOi8vd3d3LmpoaXBzdGVyLnRlY2gvXG4gZm9yIG1vcmUgaW5mb3JtYXRpb24uXG5cbiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENrc01vZHVsZUNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ2tzQ29uZmlnU2VydmljZSB7XG4gIENPTkZJR19PUFRJT05TOiBDa3NNb2R1bGVDb25maWc7XG5cbiAgY29uc3RydWN0b3IobW9kdWxlQ29uZmlnPzogQ2tzTW9kdWxlQ29uZmlnKSB7XG4gICAgdGhpcy5DT05GSUdfT1BUSU9OUyA9IHtcbiAgICAgIC4uLm5ldyBDa3NNb2R1bGVDb25maWcoKSxcbiAgICAgIC4uLm1vZHVsZUNvbmZpZ1xuICAgIH07XG4gIH1cblxuICBnZXRDb25maWcoKTogQ2tzTW9kdWxlQ29uZmlnIHtcbiAgICByZXR1cm4gdGhpcy5DT05GSUdfT1BUSU9OUztcbiAgfVxufVxuIl19
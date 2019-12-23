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
var CksModuleConfig = /** @class */ (function () {
    function CksModuleConfig() {
        this.serverApiUrl = '/';
        this.i18nEnabled = false;
        this.defaultI18nLang = 'ko';
        this.noi18nMessage = 'translation-not-found';
    }
    CksModuleConfig.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CksModuleConfig_Factory() { return new CksModuleConfig(); }, token: CksModuleConfig, providedIn: "root" });
    CksModuleConfig = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        })
    ], CksModuleConfig);
    return CksModuleConfig;
}());
export { CksModuleConfig };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctY2hha2Fucy8iLCJzb3VyY2VzIjpbImNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtCRztBQUNILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDO0lBSEE7UUFJRSxpQkFBWSxHQUFHLEdBQUcsQ0FBQztRQUNuQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixvQkFBZSxHQUFHLElBQUksQ0FBQztRQUN2QixrQkFBYSxHQUFHLHVCQUF1QixDQUFDO0tBQ3pDOztJQUxZLGVBQWU7UUFIM0IsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLGVBQWUsQ0FLM0I7MEJBN0JEO0NBNkJDLEFBTEQsSUFLQztTQUxZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuIENvcHlyaWdodCAyMDEzLTIwMTkgdGhlIG9yaWdpbmFsIGF1dGhvciBvciBhdXRob3JzIGZyb20gdGhlIEpIaXBzdGVyIHByb2plY3QuXG4gKiBNb2RpZmllZCBieSBDaGFLYW5Ob20gMjAxOS4wNy4zMVxuXG4gVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIEpIaXBzdGVyIHByb2plY3QsIHNlZSBodHRwczovL3d3dy5qaGlwc3Rlci50ZWNoL1xuIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuXG4gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENrc01vZHVsZUNvbmZpZyB7XG4gIHNlcnZlckFwaVVybCA9ICcvJztcbiAgaTE4bkVuYWJsZWQgPSBmYWxzZTtcbiAgZGVmYXVsdEkxOG5MYW5nID0gJ2tvJztcbiAgbm9pMThuTWVzc2FnZSA9ICd0cmFuc2xhdGlvbi1ub3QtZm91bmQnO1xufVxuIl19
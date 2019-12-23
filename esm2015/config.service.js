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
let CksConfigService = class CksConfigService {
    constructor(moduleConfig) {
        this.CONFIG_OPTIONS = Object.assign({}, new CksModuleConfig(), moduleConfig);
    }
    getConfig() {
        return this.CONFIG_OPTIONS;
    }
};
CksConfigService.ctorParameters = () => [
    { type: CksModuleConfig }
];
CksConfigService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CksConfigService_Factory() { return new CksConfigService(i0.ɵɵinject(i1.CksModuleConfig)); }, token: CksConfigService, providedIn: "root" });
CksConfigService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], CksConfigService);
export { CksConfigService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1jaGFrYW5zLyIsInNvdXJjZXMiOlsiY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQkc7QUFDSCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxVQUFVLENBQUM7OztBQUszQyxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtJQUczQixZQUFZLFlBQThCO1FBQ3hDLElBQUksQ0FBQyxjQUFjLHFCQUNkLElBQUksZUFBZSxFQUFFLEVBQ3JCLFlBQVksQ0FDaEIsQ0FBQztJQUNKLENBQUM7SUFFRCxTQUFTO1FBQ1AsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7Q0FDRixDQUFBOztZQVY0QixlQUFlOzs7QUFIL0IsZ0JBQWdCO0lBSDVCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxnQkFBZ0IsQ0FhNUI7U0FiWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuIENvcHlyaWdodCAyMDEzLTIwMTkgdGhlIG9yaWdpbmFsIGF1dGhvciBvciBhdXRob3JzIGZyb20gdGhlIEpIaXBzdGVyIHByb2plY3QuXG4gKiBNb2RpZmllZCBieSBDaGFLYW5Ob20gMjAxOS4wNy4zMVxuXG4gVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIEpIaXBzdGVyIHByb2plY3QsIHNlZSBodHRwczovL3d3dy5qaGlwc3Rlci50ZWNoL1xuIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuXG4gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDa3NNb2R1bGVDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENrc0NvbmZpZ1NlcnZpY2Uge1xuICBDT05GSUdfT1BUSU9OUzogQ2tzTW9kdWxlQ29uZmlnO1xuXG4gIGNvbnN0cnVjdG9yKG1vZHVsZUNvbmZpZz86IENrc01vZHVsZUNvbmZpZykge1xuICAgIHRoaXMuQ09ORklHX09QVElPTlMgPSB7XG4gICAgICAuLi5uZXcgQ2tzTW9kdWxlQ29uZmlnKCksXG4gICAgICAuLi5tb2R1bGVDb25maWdcbiAgICB9O1xuICB9XG5cbiAgZ2V0Q29uZmlnKCk6IENrc01vZHVsZUNvbmZpZyB7XG4gICAgcmV0dXJuIHRoaXMuQ09ORklHX09QVElPTlM7XG4gIH1cbn1cbiJdfQ==
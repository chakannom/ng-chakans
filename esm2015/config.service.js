import * as tslib_1 from "tslib";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1jaGFrYW5zLyIsInNvdXJjZXMiOlsiY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7O0FBSzNDLElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0lBRzNCLFlBQVksWUFBOEI7UUFDeEMsSUFBSSxDQUFDLGNBQWMscUJBQ2QsSUFBSSxlQUFlLEVBQUUsRUFDckIsWUFBWSxDQUNoQixDQUFDO0lBQ0osQ0FBQztJQUVELFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQztDQUNGLENBQUE7O1lBVjRCLGVBQWU7OztBQUgvQixnQkFBZ0I7SUFINUIsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLGdCQUFnQixDQWE1QjtTQWJZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENrc01vZHVsZUNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ2tzQ29uZmlnU2VydmljZSB7XG4gIENPTkZJR19PUFRJT05TOiBDa3NNb2R1bGVDb25maWc7XG5cbiAgY29uc3RydWN0b3IobW9kdWxlQ29uZmlnPzogQ2tzTW9kdWxlQ29uZmlnKSB7XG4gICAgdGhpcy5DT05GSUdfT1BUSU9OUyA9IHtcbiAgICAgIC4uLm5ldyBDa3NNb2R1bGVDb25maWcoKSxcbiAgICAgIC4uLm1vZHVsZUNvbmZpZ1xuICAgIH07XG4gIH1cblxuICBnZXRDb25maWcoKTogQ2tzTW9kdWxlQ29uZmlnIHtcbiAgICByZXR1cm4gdGhpcy5DT05GSUdfT1BUSU9OUztcbiAgfVxufVxuIl19
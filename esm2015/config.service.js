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
CksConfigService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CksConfigService_Factory() { return new CksConfigService(i0.ɵɵinject(i1.CksModuleConfig)); }, token: CksConfigService, providedIn: "root" });
CksConfigService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [CksModuleConfig])
], CksConfigService);
export { CksConfigService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1jaGFrYW5zLyIsInNvdXJjZXMiOlsiY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7O0FBSzNDLElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0lBRzNCLFlBQVksWUFBOEI7UUFDeEMsSUFBSSxDQUFDLGNBQWMscUJBQ2QsSUFBSSxlQUFlLEVBQUUsRUFDckIsWUFBWSxDQUNoQixDQUFDO0lBQ0osQ0FBQztJQUVELFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQztDQUNGLENBQUE7O0FBYlksZ0JBQWdCO0lBSDVCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7NkNBSTJCLGVBQWU7R0FIL0IsZ0JBQWdCLENBYTVCO1NBYlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2tzTW9kdWxlQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDa3NDb25maWdTZXJ2aWNlIHtcbiAgQ09ORklHX09QVElPTlM6IENrc01vZHVsZUNvbmZpZztcblxuICBjb25zdHJ1Y3Rvcihtb2R1bGVDb25maWc/OiBDa3NNb2R1bGVDb25maWcpIHtcbiAgICB0aGlzLkNPTkZJR19PUFRJT05TID0ge1xuICAgICAgLi4ubmV3IENrc01vZHVsZUNvbmZpZygpLFxuICAgICAgLi4ubW9kdWxlQ29uZmlnXG4gICAgfTtcbiAgfVxuXG4gIGdldENvbmZpZygpOiBDa3NNb2R1bGVDb25maWcge1xuICAgIHJldHVybiB0aGlzLkNPTkZJR19PUFRJT05TO1xuICB9XG59XG4iXX0=
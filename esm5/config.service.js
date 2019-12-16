import * as tslib_1 from "tslib";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1jaGFrYW5zLyIsInNvdXJjZXMiOlsiY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7O0FBSzNDO0lBR0UsMEJBQVksWUFBOEI7UUFDeEMsSUFBSSxDQUFDLGNBQWMsd0JBQ2QsSUFBSSxlQUFlLEVBQUUsRUFDckIsWUFBWSxDQUNoQixDQUFDO0lBQ0osQ0FBQztJQUVELG9DQUFTLEdBQVQ7UUFDRSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQzs7Z0JBVDBCLGVBQWU7OztJQUgvQixnQkFBZ0I7UUFINUIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLGdCQUFnQixDQWE1QjsyQkFuQkQ7Q0FtQkMsQUFiRCxJQWFDO1NBYlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2tzTW9kdWxlQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDa3NDb25maWdTZXJ2aWNlIHtcbiAgQ09ORklHX09QVElPTlM6IENrc01vZHVsZUNvbmZpZztcblxuICBjb25zdHJ1Y3Rvcihtb2R1bGVDb25maWc/OiBDa3NNb2R1bGVDb25maWcpIHtcbiAgICB0aGlzLkNPTkZJR19PUFRJT05TID0ge1xuICAgICAgLi4ubmV3IENrc01vZHVsZUNvbmZpZygpLFxuICAgICAgLi4ubW9kdWxlQ29uZmlnXG4gICAgfTtcbiAgfVxuXG4gIGdldENvbmZpZygpOiBDa3NNb2R1bGVDb25maWcge1xuICAgIHJldHVybiB0aGlzLkNPTkZJR19PUFRJT05TO1xuICB9XG59XG4iXX0=
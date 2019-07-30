import * as tslib_1 from "tslib";
import { NgModule, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CksModuleConfig } from './config';
import { CksConfigService } from './config.service';
import { CKS_COMPONENTS, CKS_DIRECTIVES } from './cks-components';
import { CksNavbarService, CksRouteService, CksProfileService, CksSidebarService } from './service';
import { CksActiveLanguageDirective } from './directive';
import { CksNavbarComponent, CksPageRibbonComponent, CksSidebarComponent } from './component';
var NgChakansModule = /** @class */ (function () {
    function NgChakansModule() {
    }
    NgChakansModule_1 = NgChakansModule;
    NgChakansModule.forRoot = function (moduleConfig) {
        return {
            ngModule: NgChakansModule_1,
            providers: [
                { provide: CksModuleConfig, useValue: moduleConfig },
                {
                    provide: CksConfigService,
                    useClass: CksConfigService,
                    deps: [CksModuleConfig]
                },
                {
                    provide: CksProfileService,
                    useClass: CksProfileService,
                    deps: [CksConfigService, HttpClient]
                },
                {
                    provide: CksRouteService,
                    useClass: CksRouteService,
                    deps: [Router]
                },
                {
                    provide: CksActiveLanguageDirective,
                    useClass: CksActiveLanguageDirective,
                    deps: [ElementRef, Renderer2, TranslateService]
                },
                {
                    provide: CksNavbarComponent,
                    useClass: CksNavbarComponent,
                    deps: [CksNavbarService, CksRouteService]
                },
                {
                    provide: CksPageRibbonComponent,
                    useClass: CksPageRibbonComponent,
                    deps: [CksProfileService]
                },
                {
                    provide: CksSidebarComponent,
                    useClass: CksSidebarComponent,
                    deps: [CksSidebarService, CksRouteService]
                }
            ]
        };
    };
    NgChakansModule.forChild = function (moduleConfig) {
        return {
            ngModule: NgChakansModule_1,
            providers: [{ provide: CksModuleConfig, useValue: moduleConfig }]
        };
    };
    var NgChakansModule_1;
    NgChakansModule = NgChakansModule_1 = tslib_1.__decorate([
        NgModule({
            imports: [CommonModule, NgbModule, FontAwesomeModule, TranslateModule],
            declarations: tslib_1.__spread(CKS_DIRECTIVES, CKS_COMPONENTS),
            entryComponents: [],
            exports: tslib_1.__spread(CKS_DIRECTIVES, CKS_COMPONENTS, [TranslateModule])
        })
    ], NgChakansModule);
    return NgChakansModule;
}());
export { NgChakansModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctY2hha2Fucy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1jaGFrYW5zLyIsInNvdXJjZXMiOlsibmctY2hha2Fucy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNwRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDekQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLHNCQUFzQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBUTlGO0lBQUE7SUFrREEsQ0FBQzt3QkFsRFksZUFBZTtJQUNuQix1QkFBTyxHQUFkLFVBQWUsWUFBNkI7UUFDMUMsT0FBTztZQUNMLFFBQVEsRUFBRSxpQkFBZTtZQUN6QixTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUU7Z0JBQ3BEO29CQUNFLE9BQU8sRUFBRSxnQkFBZ0I7b0JBQ3pCLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLElBQUksRUFBRSxDQUFDLGVBQWUsQ0FBQztpQkFDeEI7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsSUFBSSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsVUFBVSxDQUFDO2lCQUNyQztnQkFDRDtvQkFDRSxPQUFPLEVBQUUsZUFBZTtvQkFDeEIsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQztpQkFDZjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsMEJBQTBCO29CQUNuQyxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxJQUFJLEVBQUUsQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixDQUFDO2lCQUNoRDtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsa0JBQWtCO29CQUMzQixRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixJQUFJLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxlQUFlLENBQUM7aUJBQzFDO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxzQkFBc0I7b0JBQy9CLFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLElBQUksRUFBRSxDQUFDLGlCQUFpQixDQUFDO2lCQUMxQjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsbUJBQW1CO29CQUM1QixRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixJQUFJLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxlQUFlLENBQUM7aUJBQzNDO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUNNLHdCQUFRLEdBQWYsVUFBZ0IsWUFBNkI7UUFDM0MsT0FBTztZQUNMLFFBQVEsRUFBRSxpQkFBZTtZQUN6QixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxDQUFDO1NBQ2xFLENBQUM7SUFDSixDQUFDOztJQWpEVSxlQUFlO1FBTjNCLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxDQUFDO1lBQ3RFLFlBQVksbUJBQU0sY0FBYyxFQUFLLGNBQWMsQ0FBQztZQUNwRCxlQUFlLEVBQUUsRUFBRTtZQUNuQixPQUFPLG1CQUFNLGNBQWMsRUFBSyxjQUFjLEdBQUUsZUFBZSxFQUFDO1NBQ2pFLENBQUM7T0FDVyxlQUFlLENBa0QzQjtJQUFELHNCQUFDO0NBQUEsQUFsREQsSUFrREM7U0FsRFksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5nYk1vZHVsZSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lTW9kdWxlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2FuZ3VsYXItZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlLCBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBDa3NNb2R1bGVDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyBDa3NDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBDS1NfQ09NUE9ORU5UUywgQ0tTX0RJUkVDVElWRVMgfSBmcm9tICcuL2Nrcy1jb21wb25lbnRzJztcbmltcG9ydCB7IENrc05hdmJhclNlcnZpY2UsIENrc1JvdXRlU2VydmljZSwgQ2tzUHJvZmlsZVNlcnZpY2UsIENrc1NpZGViYXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlJztcbmltcG9ydCB7IENrc0FjdGl2ZUxhbmd1YWdlRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ2tzTmF2YmFyQ29tcG9uZW50LCBDa3NQYWdlUmliYm9uQ29tcG9uZW50LCBDa3NTaWRlYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBOZ2JNb2R1bGUsIEZvbnRBd2Vzb21lTW9kdWxlLCBUcmFuc2xhdGVNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DS1NfRElSRUNUSVZFUywgLi4uQ0tTX0NPTVBPTkVOVFNdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtdLFxuICBleHBvcnRzOiBbLi4uQ0tTX0RJUkVDVElWRVMsIC4uLkNLU19DT01QT05FTlRTLCBUcmFuc2xhdGVNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIE5nQ2hha2Fuc01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KG1vZHVsZUNvbmZpZzogQ2tzTW9kdWxlQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZ0NoYWthbnNNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBDa3NNb2R1bGVDb25maWcsIHVzZVZhbHVlOiBtb2R1bGVDb25maWcgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IENrc0NvbmZpZ1NlcnZpY2UsXG4gICAgICAgICAgdXNlQ2xhc3M6IENrc0NvbmZpZ1NlcnZpY2UsXG4gICAgICAgICAgZGVwczogW0Nrc01vZHVsZUNvbmZpZ11cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IENrc1Byb2ZpbGVTZXJ2aWNlLFxuICAgICAgICAgIHVzZUNsYXNzOiBDa3NQcm9maWxlU2VydmljZSxcbiAgICAgICAgICBkZXBzOiBbQ2tzQ29uZmlnU2VydmljZSwgSHR0cENsaWVudF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IENrc1JvdXRlU2VydmljZSxcbiAgICAgICAgICB1c2VDbGFzczogQ2tzUm91dGVTZXJ2aWNlLFxuICAgICAgICAgIGRlcHM6IFtSb3V0ZXJdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBDa3NBY3RpdmVMYW5ndWFnZURpcmVjdGl2ZSxcbiAgICAgICAgICB1c2VDbGFzczogQ2tzQWN0aXZlTGFuZ3VhZ2VEaXJlY3RpdmUsXG4gICAgICAgICAgZGVwczogW0VsZW1lbnRSZWYsIFJlbmRlcmVyMiwgVHJhbnNsYXRlU2VydmljZV1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IENrc05hdmJhckNvbXBvbmVudCxcbiAgICAgICAgICB1c2VDbGFzczogQ2tzTmF2YmFyQ29tcG9uZW50LFxuICAgICAgICAgIGRlcHM6IFtDa3NOYXZiYXJTZXJ2aWNlLCBDa3NSb3V0ZVNlcnZpY2VdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBDa3NQYWdlUmliYm9uQ29tcG9uZW50LFxuICAgICAgICAgIHVzZUNsYXNzOiBDa3NQYWdlUmliYm9uQ29tcG9uZW50LFxuICAgICAgICAgIGRlcHM6IFtDa3NQcm9maWxlU2VydmljZV1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IENrc1NpZGViYXJDb21wb25lbnQsXG4gICAgICAgICAgdXNlQ2xhc3M6IENrc1NpZGViYXJDb21wb25lbnQsXG4gICAgICAgICAgZGVwczogW0Nrc1NpZGViYXJTZXJ2aWNlLCBDa3NSb3V0ZVNlcnZpY2VdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG4gIHN0YXRpYyBmb3JDaGlsZChtb2R1bGVDb25maWc6IENrc01vZHVsZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTmdDaGFrYW5zTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBDa3NNb2R1bGVDb25maWcsIHVzZVZhbHVlOiBtb2R1bGVDb25maWcgfV1cbiAgICB9O1xuICB9XG59XG4iXX0=
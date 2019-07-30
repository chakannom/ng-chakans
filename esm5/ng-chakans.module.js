import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { CksModuleConfig } from './config';
import { CksConfigService } from './config.service';
import { CKS_COMPONENTS, CKS_DIRECTIVES } from './cks-components';
import { CksProfileService } from './service/profile.service';
import { CksRouteService } from './service/route.service';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctY2hha2Fucy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1jaGFrYW5zLyIsInNvdXJjZXMiOlsibmctY2hha2Fucy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzlELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQVExRDtJQUFBO0lBOEJBLENBQUM7d0JBOUJZLGVBQWU7SUFDbkIsdUJBQU8sR0FBZCxVQUFlLFlBQTZCO1FBQzFDLE9BQU87WUFDTCxRQUFRLEVBQUUsaUJBQWU7WUFDekIsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFO2dCQUNwRDtvQkFDRSxPQUFPLEVBQUUsZ0JBQWdCO29CQUN6QixRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixJQUFJLEVBQUUsQ0FBQyxlQUFlLENBQUM7aUJBQ3hCO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxpQkFBaUI7b0JBQzFCLFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLElBQUksRUFBRSxDQUFDLGdCQUFnQixFQUFFLFVBQVUsQ0FBQztpQkFDckM7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLGVBQWU7b0JBQ3hCLFFBQVEsRUFBRSxlQUFlO29CQUN6QixJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUM7aUJBQ2Y7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDO0lBQ00sd0JBQVEsR0FBZixVQUFnQixZQUE2QjtRQUMzQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGlCQUFlO1lBQ3pCLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLENBQUM7U0FDbEUsQ0FBQztJQUNKLENBQUM7O0lBN0JVLGVBQWU7UUFOM0IsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxlQUFlLENBQUM7WUFDdEUsWUFBWSxtQkFBTSxjQUFjLEVBQUssY0FBYyxDQUFDO1lBQ3BELGVBQWUsRUFBRSxFQUFFO1lBQ25CLE9BQU8sbUJBQU0sY0FBYyxFQUFLLGNBQWMsR0FBRSxlQUFlLEVBQUM7U0FDakUsQ0FBQztPQUNXLGVBQWUsQ0E4QjNCO0lBQUQsc0JBQUM7Q0FBQSxBQTlCRCxJQThCQztTQTlCWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5nYk1vZHVsZSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lTW9kdWxlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2FuZ3VsYXItZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBDa3NNb2R1bGVDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyBDa3NDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBDS1NfQ09NUE9ORU5UUywgQ0tTX0RJUkVDVElWRVMgfSBmcm9tICcuL2Nrcy1jb21wb25lbnRzJztcbmltcG9ydCB7IENrc1Byb2ZpbGVTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlL3Byb2ZpbGUuc2VydmljZSc7XG5pbXBvcnQgeyBDa3NSb3V0ZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2Uvcm91dGUuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE5nYk1vZHVsZSwgRm9udEF3ZXNvbWVNb2R1bGUsIFRyYW5zbGF0ZU1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogWy4uLkNLU19ESVJFQ1RJVkVTLCAuLi5DS1NfQ09NUE9ORU5UU10sXG4gIGVudHJ5Q29tcG9uZW50czogW10sXG4gIGV4cG9ydHM6IFsuLi5DS1NfRElSRUNUSVZFUywgLi4uQ0tTX0NPTVBPTkVOVFMsIFRyYW5zbGF0ZU1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgTmdDaGFrYW5zTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QobW9kdWxlQ29uZmlnOiBDa3NNb2R1bGVDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5nQ2hha2Fuc01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IENrc01vZHVsZUNvbmZpZywgdXNlVmFsdWU6IG1vZHVsZUNvbmZpZyB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQ2tzQ29uZmlnU2VydmljZSxcbiAgICAgICAgICB1c2VDbGFzczogQ2tzQ29uZmlnU2VydmljZSxcbiAgICAgICAgICBkZXBzOiBbQ2tzTW9kdWxlQ29uZmlnXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQ2tzUHJvZmlsZVNlcnZpY2UsXG4gICAgICAgICAgdXNlQ2xhc3M6IENrc1Byb2ZpbGVTZXJ2aWNlLFxuICAgICAgICAgIGRlcHM6IFtDa3NDb25maWdTZXJ2aWNlLCBIdHRwQ2xpZW50XVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQ2tzUm91dGVTZXJ2aWNlLFxuICAgICAgICAgIHVzZUNsYXNzOiBDa3NSb3V0ZVNlcnZpY2UsXG4gICAgICAgICAgZGVwczogW1JvdXRlcl1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbiAgc3RhdGljIGZvckNoaWxkKG1vZHVsZUNvbmZpZzogQ2tzTW9kdWxlQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZ0NoYWthbnNNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IENrc01vZHVsZUNvbmZpZywgdXNlVmFsdWU6IG1vZHVsZUNvbmZpZyB9XVxuICAgIH07XG4gIH1cbn1cbiJdfQ==
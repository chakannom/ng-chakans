import * as tslib_1 from "tslib";
var NgChakansModule_1;
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
let NgChakansModule = NgChakansModule_1 = class NgChakansModule {
    static forRoot(moduleConfig) {
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
    }
    static forChild(moduleConfig) {
        return {
            ngModule: NgChakansModule_1,
            providers: [{ provide: CksModuleConfig, useValue: moduleConfig }]
        };
    }
};
NgChakansModule = NgChakansModule_1 = tslib_1.__decorate([
    NgModule({
        imports: [CommonModule, NgbModule, FontAwesomeModule, TranslateModule],
        declarations: [...CKS_DIRECTIVES, ...CKS_COMPONENTS],
        entryComponents: [],
        exports: [...CKS_DIRECTIVES, ...CKS_COMPONENTS, TranslateModule]
    })
], NgChakansModule);
export { NgChakansModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctY2hha2Fucy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1jaGFrYW5zLyIsInNvdXJjZXMiOlsibmctY2hha2Fucy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFRMUQsSUFBYSxlQUFlLHVCQUE1QixNQUFhLGVBQWU7SUFDMUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUE2QjtRQUMxQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGlCQUFlO1lBQ3pCLFNBQVMsRUFBRTtnQkFDVCxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRTtnQkFDcEQ7b0JBQ0UsT0FBTyxFQUFFLGdCQUFnQjtvQkFDekIsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsSUFBSSxFQUFFLENBQUMsZUFBZSxDQUFDO2lCQUN4QjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsaUJBQWlCO29CQUMxQixRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixJQUFJLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFVLENBQUM7aUJBQ3JDO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxlQUFlO29CQUN4QixRQUFRLEVBQUUsZUFBZTtvQkFDekIsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDO2lCQUNmO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUNELE1BQU0sQ0FBQyxRQUFRLENBQUMsWUFBNkI7UUFDM0MsT0FBTztZQUNMLFFBQVEsRUFBRSxpQkFBZTtZQUN6QixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxDQUFDO1NBQ2xFLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQTlCWSxlQUFlO0lBTjNCLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxDQUFDO1FBQ3RFLFlBQVksRUFBRSxDQUFDLEdBQUcsY0FBYyxFQUFFLEdBQUcsY0FBYyxDQUFDO1FBQ3BELGVBQWUsRUFBRSxFQUFFO1FBQ25CLE9BQU8sRUFBRSxDQUFDLEdBQUcsY0FBYyxFQUFFLEdBQUcsY0FBYyxFQUFFLGVBQWUsQ0FBQztLQUNqRSxDQUFDO0dBQ1csZUFBZSxDQThCM0I7U0E5QlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOZ2JNb2R1bGUgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBGb250QXdlc29tZU1vZHVsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgQ2tzTW9kdWxlQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgQ2tzQ29uZmlnU2VydmljZSB9IGZyb20gJy4vY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ0tTX0NPTVBPTkVOVFMsIENLU19ESVJFQ1RJVkVTIH0gZnJvbSAnLi9ja3MtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBDa3NQcm9maWxlU2VydmljZSB9IGZyb20gJy4vc2VydmljZS9wcm9maWxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2tzUm91dGVTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlL3JvdXRlLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBOZ2JNb2R1bGUsIEZvbnRBd2Vzb21lTW9kdWxlLCBUcmFuc2xhdGVNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DS1NfRElSRUNUSVZFUywgLi4uQ0tTX0NPTVBPTkVOVFNdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtdLFxuICBleHBvcnRzOiBbLi4uQ0tTX0RJUkVDVElWRVMsIC4uLkNLU19DT01QT05FTlRTLCBUcmFuc2xhdGVNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIE5nQ2hha2Fuc01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KG1vZHVsZUNvbmZpZzogQ2tzTW9kdWxlQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZ0NoYWthbnNNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBDa3NNb2R1bGVDb25maWcsIHVzZVZhbHVlOiBtb2R1bGVDb25maWcgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IENrc0NvbmZpZ1NlcnZpY2UsXG4gICAgICAgICAgdXNlQ2xhc3M6IENrc0NvbmZpZ1NlcnZpY2UsXG4gICAgICAgICAgZGVwczogW0Nrc01vZHVsZUNvbmZpZ11cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IENrc1Byb2ZpbGVTZXJ2aWNlLFxuICAgICAgICAgIHVzZUNsYXNzOiBDa3NQcm9maWxlU2VydmljZSxcbiAgICAgICAgICBkZXBzOiBbQ2tzQ29uZmlnU2VydmljZSwgSHR0cENsaWVudF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IENrc1JvdXRlU2VydmljZSxcbiAgICAgICAgICB1c2VDbGFzczogQ2tzUm91dGVTZXJ2aWNlLFxuICAgICAgICAgIGRlcHM6IFtSb3V0ZXJdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG4gIHN0YXRpYyBmb3JDaGlsZChtb2R1bGVDb25maWc6IENrc01vZHVsZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTmdDaGFrYW5zTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBDa3NNb2R1bGVDb25maWcsIHVzZVZhbHVlOiBtb2R1bGVDb25maWcgfV1cbiAgICB9O1xuICB9XG59XG4iXX0=
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { CksModuleConfig } from './config';
import { CksConfigService } from './config.service';
import { CKS_COMPONENTS, CKS_DIRECTIVES } from './cks-components';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctY2hha2Fucy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1jaGFrYW5zLyIsInNvdXJjZXMiOlsibmctY2hha2Fucy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQVFsRTtJQUFBO0lBb0JBLENBQUM7d0JBcEJZLGVBQWU7SUFDbkIsdUJBQU8sR0FBZCxVQUFlLFlBQTZCO1FBQzFDLE9BQU87WUFDTCxRQUFRLEVBQUUsaUJBQWU7WUFDekIsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFO2dCQUNwRDtvQkFDRSxPQUFPLEVBQUUsZ0JBQWdCO29CQUN6QixRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixJQUFJLEVBQUUsQ0FBQyxlQUFlLENBQUM7aUJBQ3hCO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUNNLHdCQUFRLEdBQWYsVUFBZ0IsWUFBNkI7UUFDM0MsT0FBTztZQUNMLFFBQVEsRUFBRSxpQkFBZTtZQUN6QixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxDQUFDO1NBQ2xFLENBQUM7SUFDSixDQUFDOztJQW5CVSxlQUFlO1FBTjNCLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxDQUFDO1lBQ3RFLFlBQVksbUJBQU0sY0FBYyxFQUFLLGNBQWMsQ0FBQztZQUNwRCxlQUFlLEVBQUUsRUFBRTtZQUNuQixPQUFPLG1CQUFNLGNBQWMsRUFBSyxjQUFjLEdBQUUsZUFBZSxFQUFDO1NBQ2pFLENBQUM7T0FDVyxlQUFlLENBb0IzQjtJQUFELHNCQUFDO0NBQUEsQUFwQkQsSUFvQkM7U0FwQlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdiTW9kdWxlIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVNb2R1bGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IENrc01vZHVsZUNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IENrc0NvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IENLU19DT01QT05FTlRTLCBDS1NfRElSRUNUSVZFUyB9IGZyb20gJy4vY2tzLWNvbXBvbmVudHMnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBOZ2JNb2R1bGUsIEZvbnRBd2Vzb21lTW9kdWxlLCBUcmFuc2xhdGVNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DS1NfRElSRUNUSVZFUywgLi4uQ0tTX0NPTVBPTkVOVFNdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtdLFxuICBleHBvcnRzOiBbLi4uQ0tTX0RJUkVDVElWRVMsIC4uLkNLU19DT01QT05FTlRTLCBUcmFuc2xhdGVNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIE5nQ2hha2Fuc01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KG1vZHVsZUNvbmZpZzogQ2tzTW9kdWxlQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZ0NoYWthbnNNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBDa3NNb2R1bGVDb25maWcsIHVzZVZhbHVlOiBtb2R1bGVDb25maWcgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IENrc0NvbmZpZ1NlcnZpY2UsXG4gICAgICAgICAgdXNlQ2xhc3M6IENrc0NvbmZpZ1NlcnZpY2UsXG4gICAgICAgICAgZGVwczogW0Nrc01vZHVsZUNvbmZpZ11cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbiAgc3RhdGljIGZvckNoaWxkKG1vZHVsZUNvbmZpZzogQ2tzTW9kdWxlQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZ0NoYWthbnNNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IENrc01vZHVsZUNvbmZpZywgdXNlVmFsdWU6IG1vZHVsZUNvbmZpZyB9XVxuICAgIH07XG4gIH1cbn1cbiJdfQ==
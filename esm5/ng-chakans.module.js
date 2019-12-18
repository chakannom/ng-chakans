import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { CksModuleConfig } from './config';
import { CksConfigService } from './config.service';
import { CksDynamicComponent } from './components';
import { CksMainWithSideAndHeadComponent } from './layouts';
import { CKS_COMPONENTS, CKS_DIRECTIVES, CKS_LAYOUTS } from './cks-components';
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
            imports: [CommonModule, FontAwesomeModule, NgbModule, RouterModule, TranslateModule],
            declarations: tslib_1.__spread(CKS_COMPONENTS, CKS_DIRECTIVES, CKS_LAYOUTS),
            entryComponents: [CksDynamicComponent, CksMainWithSideAndHeadComponent],
            exports: tslib_1.__spread(CKS_COMPONENTS, CKS_DIRECTIVES, CKS_LAYOUTS, [TranslateModule])
        })
    ], NgChakansModule);
    return NgChakansModule;
}());
export { NgChakansModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctY2hha2Fucy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1jaGFrYW5zLyIsInNvdXJjZXMiOlsibmctY2hha2Fucy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNuRCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDNUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFRL0U7SUFBQTtJQW9CQSxDQUFDO3dCQXBCWSxlQUFlO0lBQ25CLHVCQUFPLEdBQWQsVUFBZSxZQUE2QjtRQUMxQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGlCQUFlO1lBQ3pCLFNBQVMsRUFBRTtnQkFDVCxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRTtnQkFDcEQ7b0JBQ0UsT0FBTyxFQUFFLGdCQUFnQjtvQkFDekIsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsSUFBSSxFQUFFLENBQUMsZUFBZSxDQUFDO2lCQUN4QjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFDTSx3QkFBUSxHQUFmLFVBQWdCLFlBQTZCO1FBQzNDLE9BQU87WUFDTCxRQUFRLEVBQUUsaUJBQWU7WUFDekIsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsQ0FBQztTQUNsRSxDQUFDO0lBQ0osQ0FBQzs7SUFuQlUsZUFBZTtRQU4zQixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxlQUFlLENBQUM7WUFDcEYsWUFBWSxtQkFBTSxjQUFjLEVBQUssY0FBYyxFQUFLLFdBQVcsQ0FBQztZQUNwRSxlQUFlLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSwrQkFBK0IsQ0FBQztZQUN2RSxPQUFPLG1CQUFNLGNBQWMsRUFBSyxjQUFjLEVBQUssV0FBVyxHQUFFLGVBQWUsRUFBQztTQUNqRixDQUFDO09BQ1csZUFBZSxDQW9CM0I7SUFBRCxzQkFBQztDQUFBLEFBcEJELElBb0JDO1NBcEJZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOZ2JNb2R1bGUgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBGb250QXdlc29tZU1vZHVsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgQ2tzTW9kdWxlQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgQ2tzQ29uZmlnU2VydmljZSB9IGZyb20gJy4vY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2tzRHluYW1pY0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cyc7XG5pbXBvcnQgeyBDa3NNYWluV2l0aFNpZGVBbmRIZWFkQ29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzJztcbmltcG9ydCB7IENLU19DT01QT05FTlRTLCBDS1NfRElSRUNUSVZFUywgQ0tTX0xBWU9VVFMgfSBmcm9tICcuL2Nrcy1jb21wb25lbnRzJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9udEF3ZXNvbWVNb2R1bGUsIE5nYk1vZHVsZSwgUm91dGVyTW9kdWxlLCBUcmFuc2xhdGVNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DS1NfQ09NUE9ORU5UUywgLi4uQ0tTX0RJUkVDVElWRVMsIC4uLkNLU19MQVlPVVRTXSxcbiAgZW50cnlDb21wb25lbnRzOiBbQ2tzRHluYW1pY0NvbXBvbmVudCwgQ2tzTWFpbldpdGhTaWRlQW5kSGVhZENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFsuLi5DS1NfQ09NUE9ORU5UUywgLi4uQ0tTX0RJUkVDVElWRVMsIC4uLkNLU19MQVlPVVRTLCBUcmFuc2xhdGVNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIE5nQ2hha2Fuc01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KG1vZHVsZUNvbmZpZzogQ2tzTW9kdWxlQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZ0NoYWthbnNNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBDa3NNb2R1bGVDb25maWcsIHVzZVZhbHVlOiBtb2R1bGVDb25maWcgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IENrc0NvbmZpZ1NlcnZpY2UsXG4gICAgICAgICAgdXNlQ2xhc3M6IENrc0NvbmZpZ1NlcnZpY2UsXG4gICAgICAgICAgZGVwczogW0Nrc01vZHVsZUNvbmZpZ11cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbiAgc3RhdGljIGZvckNoaWxkKG1vZHVsZUNvbmZpZzogQ2tzTW9kdWxlQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZ0NoYWthbnNNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IENrc01vZHVsZUNvbmZpZywgdXNlVmFsdWU6IG1vZHVsZUNvbmZpZyB9XVxuICAgIH07XG4gIH1cbn1cbiJdfQ==
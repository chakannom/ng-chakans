import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { CksModuleConfig } from './config';
import { CksConfigService } from './config.service';
import { CksDynamicComponent } from './components/dynamic/dynamic.component';
import { CksMainWithHeadComponent } from './layouts/main/with-head/main-with-head.component';
import { CksMainWithSideAndHeadComponent } from './layouts/main/with-side-and-head/main-with-side-and-head.component';
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
            entryComponents: [CksDynamicComponent, CksMainWithHeadComponent, CksMainWithSideAndHeadComponent],
            exports: tslib_1.__spread(CKS_COMPONENTS, CKS_DIRECTIVES, CKS_LAYOUTS, [TranslateModule])
        })
    ], NgChakansModule);
    return NgChakansModule;
}());
export { NgChakansModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctY2hha2Fucy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1jaGFrYW5zLyIsInNvdXJjZXMiOlsibmctY2hha2Fucy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzdGLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHFFQUFxRSxDQUFDO0FBQ3RILE9BQU8sRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBUS9FO0lBQUE7SUFvQkEsQ0FBQzt3QkFwQlksZUFBZTtJQUNuQix1QkFBTyxHQUFkLFVBQWUsWUFBNkI7UUFDMUMsT0FBTztZQUNMLFFBQVEsRUFBRSxpQkFBZTtZQUN6QixTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUU7Z0JBQ3BEO29CQUNFLE9BQU8sRUFBRSxnQkFBZ0I7b0JBQ3pCLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLElBQUksRUFBRSxDQUFDLGVBQWUsQ0FBQztpQkFDeEI7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDO0lBQ00sd0JBQVEsR0FBZixVQUFnQixZQUE2QjtRQUMzQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGlCQUFlO1lBQ3pCLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLENBQUM7U0FDbEUsQ0FBQztJQUNKLENBQUM7O0lBbkJVLGVBQWU7UUFOM0IsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsZUFBZSxDQUFDO1lBQ3BGLFlBQVksbUJBQU0sY0FBYyxFQUFLLGNBQWMsRUFBSyxXQUFXLENBQUM7WUFDcEUsZUFBZSxFQUFFLENBQUMsbUJBQW1CLEVBQUUsd0JBQXdCLEVBQUUsK0JBQStCLENBQUM7WUFDakcsT0FBTyxtQkFBTSxjQUFjLEVBQUssY0FBYyxFQUFLLFdBQVcsR0FBRSxlQUFlLEVBQUM7U0FDakYsQ0FBQztPQUNXLGVBQWUsQ0FvQjNCO0lBQUQsc0JBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQXBCWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmdiTW9kdWxlIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVNb2R1bGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IENrc01vZHVsZUNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IENrc0NvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IENrc0R5bmFtaWNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZHluYW1pYy9keW5hbWljLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDa3NNYWluV2l0aEhlYWRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvbWFpbi93aXRoLWhlYWQvbWFpbi13aXRoLWhlYWQuY29tcG9uZW50JztcbmltcG9ydCB7IENrc01haW5XaXRoU2lkZUFuZEhlYWRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvbWFpbi93aXRoLXNpZGUtYW5kLWhlYWQvbWFpbi13aXRoLXNpZGUtYW5kLWhlYWQuY29tcG9uZW50JztcbmltcG9ydCB7IENLU19DT01QT05FTlRTLCBDS1NfRElSRUNUSVZFUywgQ0tTX0xBWU9VVFMgfSBmcm9tICcuL2Nrcy1jb21wb25lbnRzJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9udEF3ZXNvbWVNb2R1bGUsIE5nYk1vZHVsZSwgUm91dGVyTW9kdWxlLCBUcmFuc2xhdGVNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DS1NfQ09NUE9ORU5UUywgLi4uQ0tTX0RJUkVDVElWRVMsIC4uLkNLU19MQVlPVVRTXSxcbiAgZW50cnlDb21wb25lbnRzOiBbQ2tzRHluYW1pY0NvbXBvbmVudCwgQ2tzTWFpbldpdGhIZWFkQ29tcG9uZW50LCBDa3NNYWluV2l0aFNpZGVBbmRIZWFkQ29tcG9uZW50XSxcbiAgZXhwb3J0czogWy4uLkNLU19DT01QT05FTlRTLCAuLi5DS1NfRElSRUNUSVZFUywgLi4uQ0tTX0xBWU9VVFMsIFRyYW5zbGF0ZU1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgTmdDaGFrYW5zTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QobW9kdWxlQ29uZmlnOiBDa3NNb2R1bGVDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5nQ2hha2Fuc01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IENrc01vZHVsZUNvbmZpZywgdXNlVmFsdWU6IG1vZHVsZUNvbmZpZyB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQ2tzQ29uZmlnU2VydmljZSxcbiAgICAgICAgICB1c2VDbGFzczogQ2tzQ29uZmlnU2VydmljZSxcbiAgICAgICAgICBkZXBzOiBbQ2tzTW9kdWxlQ29uZmlnXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxuICBzdGF0aWMgZm9yQ2hpbGQobW9kdWxlQ29uZmlnOiBDa3NNb2R1bGVDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5nQ2hha2Fuc01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQ2tzTW9kdWxlQ29uZmlnLCB1c2VWYWx1ZTogbW9kdWxlQ29uZmlnIH1dXG4gICAgfTtcbiAgfVxufVxuIl19
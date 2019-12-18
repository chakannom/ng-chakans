import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { CksModuleConfig } from './config';
import { CksConfigService } from './config.service';
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
            entryComponents: [CksMainWithSideAndHeadComponent],
            exports: tslib_1.__spread(CKS_COMPONENTS, CKS_DIRECTIVES, CKS_LAYOUTS, [TranslateModule])
        })
    ], NgChakansModule);
    return NgChakansModule;
}());
export { NgChakansModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctY2hha2Fucy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1jaGFrYW5zLyIsInNvdXJjZXMiOlsibmctY2hha2Fucy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3BELE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHFFQUFxRSxDQUFDO0FBQ3RILE9BQU8sRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBUS9FO0lBQUE7SUFvQkEsQ0FBQzt3QkFwQlksZUFBZTtJQUNuQix1QkFBTyxHQUFkLFVBQWUsWUFBNkI7UUFDMUMsT0FBTztZQUNMLFFBQVEsRUFBRSxpQkFBZTtZQUN6QixTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUU7Z0JBQ3BEO29CQUNFLE9BQU8sRUFBRSxnQkFBZ0I7b0JBQ3pCLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLElBQUksRUFBRSxDQUFDLGVBQWUsQ0FBQztpQkFDeEI7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDO0lBQ00sd0JBQVEsR0FBZixVQUFnQixZQUE2QjtRQUMzQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGlCQUFlO1lBQ3pCLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLENBQUM7U0FDbEUsQ0FBQztJQUNKLENBQUM7O0lBbkJVLGVBQWU7UUFOM0IsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsZUFBZSxDQUFDO1lBQ3BGLFlBQVksbUJBQU0sY0FBYyxFQUFLLGNBQWMsRUFBSyxXQUFXLENBQUM7WUFDcEUsZUFBZSxFQUFFLENBQUMsK0JBQStCLENBQUM7WUFDbEQsT0FBTyxtQkFBTSxjQUFjLEVBQUssY0FBYyxFQUFLLFdBQVcsR0FBRSxlQUFlLEVBQUM7U0FDakYsQ0FBQztPQUNXLGVBQWUsQ0FvQjNCO0lBQUQsc0JBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQXBCWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmdiTW9kdWxlIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVNb2R1bGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IENrc01vZHVsZUNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IENrc0NvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IENrc01haW5XaXRoU2lkZUFuZEhlYWRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvbWFpbi93aXRoLXNpZGUtYW5kLWhlYWQvbWFpbi13aXRoLXNpZGUtYW5kLWhlYWQuY29tcG9uZW50JztcbmltcG9ydCB7IENLU19DT01QT05FTlRTLCBDS1NfRElSRUNUSVZFUywgQ0tTX0xBWU9VVFMgfSBmcm9tICcuL2Nrcy1jb21wb25lbnRzJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9udEF3ZXNvbWVNb2R1bGUsIE5nYk1vZHVsZSwgUm91dGVyTW9kdWxlLCBUcmFuc2xhdGVNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DS1NfQ09NUE9ORU5UUywgLi4uQ0tTX0RJUkVDVElWRVMsIC4uLkNLU19MQVlPVVRTXSxcbiAgZW50cnlDb21wb25lbnRzOiBbQ2tzTWFpbldpdGhTaWRlQW5kSGVhZENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFsuLi5DS1NfQ09NUE9ORU5UUywgLi4uQ0tTX0RJUkVDVElWRVMsIC4uLkNLU19MQVlPVVRTLCBUcmFuc2xhdGVNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIE5nQ2hha2Fuc01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KG1vZHVsZUNvbmZpZzogQ2tzTW9kdWxlQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZ0NoYWthbnNNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBDa3NNb2R1bGVDb25maWcsIHVzZVZhbHVlOiBtb2R1bGVDb25maWcgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IENrc0NvbmZpZ1NlcnZpY2UsXG4gICAgICAgICAgdXNlQ2xhc3M6IENrc0NvbmZpZ1NlcnZpY2UsXG4gICAgICAgICAgZGVwczogW0Nrc01vZHVsZUNvbmZpZ11cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbiAgc3RhdGljIGZvckNoaWxkKG1vZHVsZUNvbmZpZzogQ2tzTW9kdWxlQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZ0NoYWthbnNNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IENrc01vZHVsZUNvbmZpZywgdXNlVmFsdWU6IG1vZHVsZUNvbmZpZyB9XVxuICAgIH07XG4gIH1cbn1cbiJdfQ==
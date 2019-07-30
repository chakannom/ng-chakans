import * as tslib_1 from "tslib";
var NgChakansModule_1;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctY2hha2Fucy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1jaGFrYW5zLyIsInNvdXJjZXMiOlsibmctY2hha2Fucy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDcEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxzQkFBc0IsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQVE5RixJQUFhLGVBQWUsdUJBQTVCLE1BQWEsZUFBZTtJQUMxQixNQUFNLENBQUMsT0FBTyxDQUFDLFlBQTZCO1FBQzFDLE9BQU87WUFDTCxRQUFRLEVBQUUsaUJBQWU7WUFDekIsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFO2dCQUNwRDtvQkFDRSxPQUFPLEVBQUUsZ0JBQWdCO29CQUN6QixRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixJQUFJLEVBQUUsQ0FBQyxlQUFlLENBQUM7aUJBQ3hCO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxpQkFBaUI7b0JBQzFCLFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLElBQUksRUFBRSxDQUFDLGdCQUFnQixFQUFFLFVBQVUsQ0FBQztpQkFDckM7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLGVBQWU7b0JBQ3hCLFFBQVEsRUFBRSxlQUFlO29CQUN6QixJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUM7aUJBQ2Y7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLDBCQUEwQjtvQkFDbkMsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsSUFBSSxFQUFFLENBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsQ0FBQztpQkFDaEQ7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLGtCQUFrQjtvQkFDM0IsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsSUFBSSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsZUFBZSxDQUFDO2lCQUMxQztnQkFDRDtvQkFDRSxPQUFPLEVBQUUsc0JBQXNCO29CQUMvQixRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxJQUFJLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztpQkFDMUI7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLG1CQUFtQjtvQkFDNUIsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsSUFBSSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsZUFBZSxDQUFDO2lCQUMzQzthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFDRCxNQUFNLENBQUMsUUFBUSxDQUFDLFlBQTZCO1FBQzNDLE9BQU87WUFDTCxRQUFRLEVBQUUsaUJBQWU7WUFDekIsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsQ0FBQztTQUNsRSxDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7QUFsRFksZUFBZTtJQU4zQixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLGVBQWUsQ0FBQztRQUN0RSxZQUFZLEVBQUUsQ0FBQyxHQUFHLGNBQWMsRUFBRSxHQUFHLGNBQWMsQ0FBQztRQUNwRCxlQUFlLEVBQUUsRUFBRTtRQUNuQixPQUFPLEVBQUUsQ0FBQyxHQUFHLGNBQWMsRUFBRSxHQUFHLGNBQWMsRUFBRSxlQUFlLENBQUM7S0FDakUsQ0FBQztHQUNXLGVBQWUsQ0FrRDNCO1NBbERZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOZ2JNb2R1bGUgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBGb250QXdlc29tZU1vZHVsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSwgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgQ2tzTW9kdWxlQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgQ2tzQ29uZmlnU2VydmljZSB9IGZyb20gJy4vY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ0tTX0NPTVBPTkVOVFMsIENLU19ESVJFQ1RJVkVTIH0gZnJvbSAnLi9ja3MtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBDa3NOYXZiYXJTZXJ2aWNlLCBDa3NSb3V0ZVNlcnZpY2UsIENrc1Byb2ZpbGVTZXJ2aWNlLCBDa3NTaWRlYmFyU2VydmljZSB9IGZyb20gJy4vc2VydmljZSc7XG5pbXBvcnQgeyBDa3NBY3RpdmVMYW5ndWFnZURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlJztcbmltcG9ydCB7IENrc05hdmJhckNvbXBvbmVudCwgQ2tzUGFnZVJpYmJvbkNvbXBvbmVudCwgQ2tzU2lkZWJhckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTmdiTW9kdWxlLCBGb250QXdlc29tZU1vZHVsZSwgVHJhbnNsYXRlTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ0tTX0RJUkVDVElWRVMsIC4uLkNLU19DT01QT05FTlRTXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXSxcbiAgZXhwb3J0czogWy4uLkNLU19ESVJFQ1RJVkVTLCAuLi5DS1NfQ09NUE9ORU5UUywgVHJhbnNsYXRlTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBOZ0NoYWthbnNNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChtb2R1bGVDb25maWc6IENrc01vZHVsZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTmdDaGFrYW5zTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogQ2tzTW9kdWxlQ29uZmlnLCB1c2VWYWx1ZTogbW9kdWxlQ29uZmlnIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBDa3NDb25maWdTZXJ2aWNlLFxuICAgICAgICAgIHVzZUNsYXNzOiBDa3NDb25maWdTZXJ2aWNlLFxuICAgICAgICAgIGRlcHM6IFtDa3NNb2R1bGVDb25maWddXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBDa3NQcm9maWxlU2VydmljZSxcbiAgICAgICAgICB1c2VDbGFzczogQ2tzUHJvZmlsZVNlcnZpY2UsXG4gICAgICAgICAgZGVwczogW0Nrc0NvbmZpZ1NlcnZpY2UsIEh0dHBDbGllbnRdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBDa3NSb3V0ZVNlcnZpY2UsXG4gICAgICAgICAgdXNlQ2xhc3M6IENrc1JvdXRlU2VydmljZSxcbiAgICAgICAgICBkZXBzOiBbUm91dGVyXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQ2tzQWN0aXZlTGFuZ3VhZ2VEaXJlY3RpdmUsXG4gICAgICAgICAgdXNlQ2xhc3M6IENrc0FjdGl2ZUxhbmd1YWdlRGlyZWN0aXZlLFxuICAgICAgICAgIGRlcHM6IFtFbGVtZW50UmVmLCBSZW5kZXJlcjIsIFRyYW5zbGF0ZVNlcnZpY2VdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBDa3NOYXZiYXJDb21wb25lbnQsXG4gICAgICAgICAgdXNlQ2xhc3M6IENrc05hdmJhckNvbXBvbmVudCxcbiAgICAgICAgICBkZXBzOiBbQ2tzTmF2YmFyU2VydmljZSwgQ2tzUm91dGVTZXJ2aWNlXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQ2tzUGFnZVJpYmJvbkNvbXBvbmVudCxcbiAgICAgICAgICB1c2VDbGFzczogQ2tzUGFnZVJpYmJvbkNvbXBvbmVudCxcbiAgICAgICAgICBkZXBzOiBbQ2tzUHJvZmlsZVNlcnZpY2VdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBDa3NTaWRlYmFyQ29tcG9uZW50LFxuICAgICAgICAgIHVzZUNsYXNzOiBDa3NTaWRlYmFyQ29tcG9uZW50LFxuICAgICAgICAgIGRlcHM6IFtDa3NTaWRlYmFyU2VydmljZSwgQ2tzUm91dGVTZXJ2aWNlXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxuICBzdGF0aWMgZm9yQ2hpbGQobW9kdWxlQ29uZmlnOiBDa3NNb2R1bGVDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5nQ2hha2Fuc01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQ2tzTW9kdWxlQ29uZmlnLCB1c2VWYWx1ZTogbW9kdWxlQ29uZmlnIH1dXG4gICAgfTtcbiAgfVxufVxuIl19
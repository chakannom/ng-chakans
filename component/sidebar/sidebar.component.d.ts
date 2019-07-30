import { TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { CksSidebarService } from '../../service/sidebar.service';
import { CksRouteService } from '../../service/route.service';
export declare class CksSidebarComponent {
    private sidebarService;
    private routeService;
    headerTemplate: TemplateRef<any>;
    contentTemplate: TemplateRef<any>;
    footerTemplate: TemplateRef<any>;
    menuItems: any[];
    isSidebarViewed: Observable<boolean>;
    isSidebarCollapsed: boolean;
    constructor(sidebarService: CksSidebarService, routeService: CksRouteService);
    doAction(navigation: any): void;
    collapseSidebar(): void;
    toggleSidebar(): void;
    isUsedRouterLink(navigation: any): boolean;
}

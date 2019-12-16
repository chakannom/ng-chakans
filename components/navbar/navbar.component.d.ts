import { Observable } from 'rxjs';
import { CksNavbarService } from './navbar.service';
import { CksRouteService } from '../../services/route.service';
export declare class CksNavbarComponent {
    private navbarService;
    private routeService;
    brand: any;
    menuItems: any[];
    isNavbarViewed: Observable<boolean>;
    isNavbarCollapsed: boolean;
    constructor(navbarService: CksNavbarService, routeService: CksRouteService);
    doAction(navigation: any): void;
    collapseNavbar(): void;
    toggleNavbar(): void;
    isUsedRouterLink(navigation: any): boolean;
}

import { Observable } from 'rxjs';
import { CksNavbarService } from '../../service/navbar.service';
import { CksRouteService } from '../../service/route.service';
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
}

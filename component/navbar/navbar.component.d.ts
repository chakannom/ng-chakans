import { Observable } from 'rxjs';
import { CksNavbarService } from '../../service/navbar.service';
export declare class CksNavbarComponent {
    private navbarService;
    brand: any;
    menuItems: any[];
    isNavbarViewed: Observable<boolean>;
    isNavbarCollapsed: boolean;
    constructor(navbarService: CksNavbarService);
    doAction(navigation: any): void;
    collapseNavbar(): void;
    toggleNavbar(): void;
    isUsedRouterLink(navigation: any): boolean;
}

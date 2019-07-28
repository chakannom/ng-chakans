import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CksNavbarService, CksRouteService } from '../../service';
export declare class CksNavbarComponent implements OnInit {
    private navbarService;
    private routeService;
    brand: any;
    menuItems: any[];
    isNavbarViewed: Observable<boolean>;
    isNavbarCollapsed: boolean;
    constructor(navbarService: CksNavbarService, routeService: CksRouteService);
    ngOnInit(): void;
    navigate(href: any): void;
    collapseNavbar(): void;
    toggleNavbar(): void;
}

import { OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { CksRouteService } from '../../services/route.service';
export declare class CksTopbarComponent implements OnInit, OnDestroy {
    private document;
    private renderer;
    private routeService;
    fixed: boolean;
    withSidebar: boolean;
    textItems: any[];
    iconItems: any[];
    userImgUrl: string;
    withSubheader: boolean;
    breadcrumbItems: any[];
    _header: boolean;
    _fixedTop: boolean;
    _positionFixed: boolean;
    _withSidebar: boolean;
    _withSubHeader: boolean;
    constructor(document: any, renderer: Renderer2, routeService: CksRouteService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    doAction(navigation: any): void;
}

import { __decorate, __assign, __param, __spread } from 'tslib';
import { ɵɵdefineInjectable, Injectable, ɵɵinject, Input, Component, HostBinding, Inject, Renderer2, ElementRef, Directive, NgModule } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DOCUMENT, CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

var CksNavbarService = /** @class */ (function () {
    function CksNavbarService() {
        this.navbarViewed = new BehaviorSubject(true);
    }
    Object.defineProperty(CksNavbarService.prototype, "isNavbarViewed", {
        get: function () {
            return this.navbarViewed.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    CksNavbarService.prototype.setNavbarViewed = function (navbarViewed) {
        this.navbarViewed.next(navbarViewed);
    };
    CksNavbarService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CksNavbarService_Factory() { return new CksNavbarService(); }, token: CksNavbarService, providedIn: "root" });
    CksNavbarService = __decorate([
        Injectable({ providedIn: 'root' })
    ], CksNavbarService);
    return CksNavbarService;
}());

var CksRouteService = /** @class */ (function () {
    function CksRouteService(router) {
        this.router = router;
    }
    CksRouteService.prototype.navigate = function (navigation) {
        if (typeof navigation === 'string') {
            window.location.href = navigation;
        }
        else {
            var navigationExtras = {};
            if (navigation.queryParams) {
                navigationExtras.queryParams = navigation.queryParams;
            }
            if (navigation.fragment) {
                navigationExtras.fragment = navigation.fragment;
            }
            if (navigation.routerLink && navigation.routerLink.length > 0) {
                this.router.navigate(navigation.routerLink, navigationExtras);
            }
        }
    };
    CksRouteService.ctorParameters = function () { return [
        { type: Router }
    ]; };
    CksRouteService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CksRouteService_Factory() { return new CksRouteService(ɵɵinject(Router)); }, token: CksRouteService, providedIn: "root" });
    CksRouteService = __decorate([
        Injectable({ providedIn: 'root' })
    ], CksRouteService);
    return CksRouteService;
}());

var CksNavbarComponent = /** @class */ (function () {
    function CksNavbarComponent(navbarService, routeService) {
        this.navbarService = navbarService;
        this.routeService = routeService;
        this.isNavbarCollapsed = true;
        this.isNavbarViewed = this.navbarService.isNavbarViewed;
    }
    CksNavbarComponent.prototype.doAction = function (navigation) {
        this.collapseNavbar();
        if (navigation) {
            if (typeof navigation === 'function') {
                navigation();
            }
            else {
                this.routeService.navigate(navigation);
            }
        }
    };
    CksNavbarComponent.prototype.collapseNavbar = function () {
        this.isNavbarCollapsed = true;
    };
    CksNavbarComponent.prototype.toggleNavbar = function () {
        this.isNavbarCollapsed = !this.isNavbarCollapsed;
    };
    CksNavbarComponent.prototype.isUsedRouterLink = function (navigation) {
        if (!navigation || typeof navigation === 'function' || typeof navigation === 'string') {
            return false;
        }
        return true;
    };
    CksNavbarComponent.ctorParameters = function () { return [
        { type: CksNavbarService },
        { type: CksRouteService }
    ]; };
    __decorate([
        Input()
    ], CksNavbarComponent.prototype, "brand", void 0);
    __decorate([
        Input()
    ], CksNavbarComponent.prototype, "menuItems", void 0);
    CksNavbarComponent = __decorate([
        Component({
            selector: 'cks-navbar',
            template: "<nav class=\"navbar navbar-dark navbar-expand-md bg-dark\" *ngIf=\"isNavbarViewed | async\">\n    <a class=\"navbar-brand logo\" (click)=\"doAction({routerLink: ['/']})\" *ngIf=\"brand && brand.title\">\n        <span class=\"logo-img\"></span>\n        <span class=\"navbar-title\">{{ !brand.title.translateKey ? brand.title.label : (brand.title.translateKey | translate) }}</span>\n        <span class=\"navbar-version\" *ngIf=\"brand.version\">{{ brand.version }}</span>\n    </a>\n    <a class=\"navbar-toggler d-lg-none\" href=\"javascript:void(0);\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"toggleNavbar()\">\n        <fa-icon icon=\"bars\"></fa-icon>\n    </a>\n    <div class=\"navbar-collapse collapse\" id=\"navbarResponsive\" [ngbCollapse]=\"isNavbarCollapsed\">\n        <ul class=\"navbar-nav ml-auto\">\n            <ng-template *ngFor=\"let item of menuItems\" [ngTemplateOutlet]=\"item.subItems && item.subItems.length > 0 ? dropdown : nonDropdown\" [ngTemplateOutletContext]=\"{ item: item }\"></ng-template>\n        </ul>\n    </div>\n</nav>\n<ng-template #nonDropdown let-item=\"item\">\n    <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n        <ng-template [ngTemplateOutlet]=\"isUsedRouterLink(item.navigation) ? routerLink : nonRouterLink\" [ngTemplateOutletContext]=\"{ item: item, classname: 'nav-link' }\"></ng-template>\n    </li>\n</ng-template>\n<ng-template #dropdown let-item=\"item\">\n    <li ngbDropdown class=\"nav-item dropdown pointer\" display=\"dynamic\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n        <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle href=\"javascript:void(0);\" id=\"{{ item.id }}\">\n            <span>\n                <fa-layers [fixedWidth]=\"true\" *ngIf=\"item.icon && item.icon.length > 0\">\n                    <fa-icon [icon]=\"item.icon\"></fa-icon>\n                </fa-layers>\n                <span>{{ !item.name.translateKey ? item.name.label : (item.name.translateKey | translate) }}</span>\n            </span>\n        </a>\n        <ul class=\"dropdown-menu\" ngbDropdownMenu [attr.aria-labelledby]=\"item.id\" *ngIf=\"item.subItems && item.subItems.length > 0\">\n            <li *ngFor=\"let subItem of item.subItems\">\n                <ng-template [ngTemplateOutlet]=\"isUsedRouterLink(subItem.navigation) ? routerLink : nonRouterLink\" [ngTemplateOutletContext]=\"{ item: subItem, classname: 'dropdown-item' }\"></ng-template>\n            </li>\n        </ul>\n    </li>\n</ng-template>\n<ng-template #nonRouterLink let-item=\"item\" let-classname=\"classname\">\n    <a [ngClass]=\"classname\" (click)=\"doAction(item.navigation)\">\n        <span>\n            <fa-layers [fixedWidth]=\"true\" *ngIf=\"item.icon && item.icon.length > 0\">\n                <fa-icon [icon]=\"item.icon\"></fa-icon>\n            </fa-layers>\n            <span>{{ !item.name.translateKey ? item.name.label : (item.name.translateKey | translate) }}</span>\n        </span>\n    </a>\n</ng-template>\n<ng-template #routerLink let-item=\"item\" let-classname=\"classname\">\n    <a [ngClass]=\"classname\" routerLinkActive=\"active\" [routerLink]=\"item.navigation.routerLink\" [queryParams]=\"item.navigation.queryParams\" [fragment]=\"item.navigation.fragment\" (click)=\"collapseNavbar()\">\n        <span>\n            <fa-layers [fixedWidth]=\"true\" *ngIf=\"item.icon && item.icon.length > 0\">\n                <fa-icon [icon]=\"item.icon\"></fa-icon>\n            </fa-layers>\n            <span>{{ !item.name.translateKey ? item.name.label : (item.name.translateKey | translate) }}</span>\n        </span>\n    </a>\n</ng-template>\n"
        })
    ], CksNavbarComponent);
    return CksNavbarComponent;
}());

var CksProfileInfo = /** @class */ (function () {
    function CksProfileInfo() {
    }
    return CksProfileInfo;
}());

var CksModuleConfig = /** @class */ (function () {
    function CksModuleConfig() {
        this.serverApiUrl = '/';
    }
    CksModuleConfig.ngInjectableDef = ɵɵdefineInjectable({ factory: function CksModuleConfig_Factory() { return new CksModuleConfig(); }, token: CksModuleConfig, providedIn: "root" });
    CksModuleConfig = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], CksModuleConfig);
    return CksModuleConfig;
}());

var CksConfigService = /** @class */ (function () {
    function CksConfigService(moduleConfig) {
        this.CONFIG_OPTIONS = __assign({}, new CksModuleConfig(), moduleConfig);
    }
    CksConfigService.prototype.getConfig = function () {
        return this.CONFIG_OPTIONS;
    };
    CksConfigService.ctorParameters = function () { return [
        { type: CksModuleConfig }
    ]; };
    CksConfigService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CksConfigService_Factory() { return new CksConfigService(ɵɵinject(CksModuleConfig)); }, token: CksConfigService, providedIn: "root" });
    CksConfigService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], CksConfigService);
    return CksConfigService;
}());

var CksProfileService = /** @class */ (function () {
    function CksProfileService(configService, http) {
        this.configService = configService;
        this.http = http;
        this.infoUrl = '{SERVER_API_URL}' + 'management/info';
        var config = this.configService.getConfig();
        this.infoUrl = this.infoUrl.replace('{SERVER_API_URL}', config.serverApiUrl);
    }
    CksProfileService.prototype.getProfileInfo = function () {
        if (!this.profileInfo) {
            this.profileInfo = this.http
                .get(this.infoUrl, { observe: 'response' })
                .pipe(map(function (res) {
                var data = res.body;
                var pi = new CksProfileInfo();
                pi.activeProfiles = data['activeProfiles'];
                var displayRibbonOnProfiles = data['display-ribbon-on-profiles'].split(',');
                if (pi.activeProfiles) {
                    var ribbonProfiles = displayRibbonOnProfiles.filter(function (profile) { return pi.activeProfiles.includes(profile); });
                    if (ribbonProfiles.length !== 0) {
                        pi.ribbonEnv = ribbonProfiles[0];
                    }
                    pi.inProduction = pi.activeProfiles.includes('prod');
                    pi.swaggerEnabled = pi.activeProfiles.includes('swagger');
                }
                return pi;
            }))
                .toPromise();
        }
        return this.profileInfo;
    };
    CksProfileService.ctorParameters = function () { return [
        { type: CksConfigService },
        { type: HttpClient }
    ]; };
    CksProfileService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CksProfileService_Factory() { return new CksProfileService(ɵɵinject(CksConfigService), ɵɵinject(HttpClient)); }, token: CksProfileService, providedIn: "root" });
    CksProfileService = __decorate([
        Injectable({ providedIn: 'root' })
    ], CksProfileService);
    return CksProfileService;
}());

var CksPageRibbonComponent = /** @class */ (function () {
    function CksPageRibbonComponent(profileService) {
        this.profileService = profileService;
    }
    CksPageRibbonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileService.getProfileInfo().then(function (profileInfo) {
            _this.profileInfo = profileInfo;
            _this.ribbonEnv = profileInfo.ribbonEnv;
        });
    };
    CksPageRibbonComponent.ctorParameters = function () { return [
        { type: CksProfileService }
    ]; };
    CksPageRibbonComponent = __decorate([
        Component({
            selector: 'cks-page-ribbon',
            template: "\n    <div class=\"ribbon\" *ngIf=\"ribbonEnv\">\n      <a href=\"\">{{ 'global.ribbon.' + ribbonEnv | translate }}</a>\n    </div>\n  "
        })
    ], CksPageRibbonComponent);
    return CksPageRibbonComponent;
}());

var CksSidebarService = /** @class */ (function () {
    function CksSidebarService() {
        this.sidebarViewed = new BehaviorSubject(true);
    }
    Object.defineProperty(CksSidebarService.prototype, "isSidebarViewed", {
        get: function () {
            return this.sidebarViewed.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    CksSidebarService.prototype.setSidebarViewed = function (sidebarViewed) {
        this.sidebarViewed.next(sidebarViewed);
    };
    CksSidebarService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CksSidebarService_Factory() { return new CksSidebarService(); }, token: CksSidebarService, providedIn: "root" });
    CksSidebarService = __decorate([
        Injectable({ providedIn: 'root' })
    ], CksSidebarService);
    return CksSidebarService;
}());

var CksSidebarComponent = /** @class */ (function () {
    function CksSidebarComponent(sidebarService, routeService) {
        this.sidebarService = sidebarService;
        this.routeService = routeService;
        this._header = true;
        this.isSidebarCollapsed = true;
        this.isSidebarViewed = this.sidebarService.isSidebarViewed;
    }
    CksSidebarComponent.prototype.doAction = function (navigation) {
        this.collapseSidebar();
        if (navigation) {
            if (typeof navigation === 'function') {
                navigation();
            }
            else {
                this.routeService.navigate(navigation);
            }
        }
    };
    CksSidebarComponent.prototype.collapseSidebar = function () {
        this.isSidebarCollapsed = true;
    };
    CksSidebarComponent.prototype.toggleSidebar = function () {
        this.isSidebarCollapsed = !this.isSidebarCollapsed;
    };
    CksSidebarComponent.prototype.isUsedRouterLink = function (navigation) {
        if (!navigation || typeof navigation === 'function' || typeof navigation === 'string') {
            return false;
        }
        return true;
    };
    CksSidebarComponent.ctorParameters = function () { return [
        { type: CksSidebarService },
        { type: CksRouteService }
    ]; };
    __decorate([
        HostBinding('class.cks-sidebar')
    ], CksSidebarComponent.prototype, "_header", void 0);
    __decorate([
        Input()
    ], CksSidebarComponent.prototype, "headerTemplate", void 0);
    __decorate([
        Input()
    ], CksSidebarComponent.prototype, "contentTemplate", void 0);
    __decorate([
        Input()
    ], CksSidebarComponent.prototype, "footerTemplate", void 0);
    __decorate([
        Input()
    ], CksSidebarComponent.prototype, "menuItems", void 0);
    CksSidebarComponent = __decorate([
        Component({
            selector: 'cks-sidebar',
            template: "<div class=\"cks-sidebar-brand\">\n    <span class=\"cks-sidebar-logo-img\"></span>\n    <span class=\"cks-sidebar-brand-text\">Gooroom</span>\n    <span class=\"cks-sidebar-version\">vUNKNOWN</span>\n</div>\n\n<!--\n<div class=\"sidebar\" *ngIf=\"isSidebarViewed | async\">\n    <div class=\"sidebar-header\">\n        <ng-template [ngTemplateOutlet]=\"headerTemplate\"></ng-template>\n    </div>\n    <div class=\"sidebar-content\">\n        <ng-template [ngTemplateOutlet]=\"contentTemplate || sidebarContent\" [ngTemplateOutletContext]=\"{ items: menuItems }\"> </ng-template>\n    </div>\n    <div class=\"sidebar-footer\">\n        <ng-template [ngTemplateOutlet]=\"footerTemplate\"></ng-template>\n    </div>\n</div>\n<ng-template #sidebarContent let-items=\"items\">\n    <ul class=\"sidebar-menu\" *ngIf=\"items\">\n        <li *ngFor=\"let item of items\">\n            <ng-template [ngTemplateOutlet]=\"isUsedRouterLink(item.navigation) ? routerLink : nonRouterLink\" [ngTemplateOutletContext]=\"{ item: item }\"></ng-template>\n            <ul class=\"sidebar-sub-menu\" *ngIf=\"item.subItems && item.subItems.length > 0\">\n                <li *ngFor=\"let subItem of item.subItems\">\n                    <ng-template [ngTemplateOutlet]=\"isUsedRouterLink(subItem.navigation) ? routerLink : nonRouterLink\" [ngTemplateOutletContext]=\"{ item: subItem }\"></ng-template>\n                    <a class=\"btn btn-secondary btn-sm\" (click)=\"doAction(subItem.ext.navigation)\" *ngIf=\"subItem.ext\">\n                        <fa-layers *ngIf=\"subItem.ext.icon && subItem.ext.icon.length > 0\">\n                            <fa-icon [icon]=\"subItem.ext.icon\"></fa-icon>\n                        </fa-layers>\n                    </a>\n                </li>\n            </ul>\n        </li>\n    </ul>\n</ng-template>\n<ng-template #nonRouterLink let-item=\"item\">\n    <a (click)=\"doAction(item.navigation)\">\n        <span>\n            <fa-layers [fixedWidth]=\"true\" *ngIf=\"item.icon && item.icon.length > 0\">\n                <fa-icon [icon]=\"item.icon\"></fa-icon>\n            </fa-layers>\n            <span>{{ !item.name.translateKey ? item.name.label : (item.name.translateKey | translate) }}</span>\n        </span>\n    </a>\n</ng-template>\n<ng-template #routerLink let-item=\"item\">\n    <a [routerLink]=\"item.navigation.routerLink\" [queryParams]=\"item.navigation.queryParams\" [fragment]=\"item.navigation.fragment\">\n        <span>\n            <fa-layers [fixedWidth]=\"true\" *ngIf=\"item.icon && item.icon.length > 0\">\n                <fa-icon [icon]=\"item.icon\"></fa-icon>\n            </fa-layers>\n            <span>{{ !item.name.translateKey ? item.name.label : (item.name.translateKey | translate) }}</span>\n        </span>\n    </a>\n</ng-template>\n-->\n"
        })
    ], CksSidebarComponent);
    return CksSidebarComponent;
}());

var CksTopbarComponent = /** @class */ (function () {
    function CksTopbarComponent(document, renderer, routeService) {
        this.document = document;
        this.renderer = renderer;
        this.routeService = routeService;
        this._header = true;
        this._fixedTop = false;
        this._positionFixed = false;
        this._withSidebar = false;
        this._withSubHeader = false;
    }
    CksTopbarComponent.prototype.ngOnInit = function () {
        this._fixedTop = this._positionFixed = this.fixed;
        this._withSidebar = this.withSidebar;
        this._withSubHeader = this.withSubheader;
        this.textItems = this.textItems ? this.textItems.slice(0, 3) : [];
        this.iconItems = this.iconItems ? this.iconItems.slice(0, 6) : [];
    };
    CksTopbarComponent.prototype.ngOnDestroy = function () { };
    CksTopbarComponent.prototype.doAction = function (navigation) {
        if (navigation) {
            if (typeof navigation === 'function') {
                navigation();
            }
            else {
                this.routeService.navigate(navigation);
            }
        }
    };
    CksTopbarComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Renderer2 },
        { type: CksRouteService }
    ]; };
    __decorate([
        Input()
    ], CksTopbarComponent.prototype, "fixed", void 0);
    __decorate([
        Input()
    ], CksTopbarComponent.prototype, "withSidebar", void 0);
    __decorate([
        Input()
    ], CksTopbarComponent.prototype, "textItems", void 0);
    __decorate([
        Input()
    ], CksTopbarComponent.prototype, "iconItems", void 0);
    __decorate([
        Input()
    ], CksTopbarComponent.prototype, "userImgUrl", void 0);
    __decorate([
        Input()
    ], CksTopbarComponent.prototype, "withSubheader", void 0);
    __decorate([
        Input()
    ], CksTopbarComponent.prototype, "breadcrumbItems", void 0);
    __decorate([
        HostBinding('class.cks-header')
    ], CksTopbarComponent.prototype, "_header", void 0);
    __decorate([
        HostBinding('class.fixed-top')
    ], CksTopbarComponent.prototype, "_fixedTop", void 0);
    __decorate([
        HostBinding('class.position-fixed')
    ], CksTopbarComponent.prototype, "_positionFixed", void 0);
    __decorate([
        HostBinding('class.cks-header-with-sidebar')
    ], CksTopbarComponent.prototype, "_withSidebar", void 0);
    __decorate([
        HostBinding('class.cks-header-with-subheader')
    ], CksTopbarComponent.prototype, "_withSubHeader", void 0);
    CksTopbarComponent = __decorate([
        Component({
            selector: 'cks-topbar',
            template: "<div class=\"d-flex\" [ngSwitch]=\"withSidebar\">\n    <button  class=\"navbar-toggler d-lg-none mr-auto\" type=\"button\" *ngSwitchCase=\"true\">\n        <fa-icon icon=\"bars\"></fa-icon>\n    </button>\n    <a class=\"cks-header-brand\">\n        <span class=\"cks-header-logo-img\"></span>\n        <span class=\"cks-header-brand-text\">Gooroom</span>\n        <span class=\"cks-header-version\">vUNKNOWN</span>\n    </a>\n    <button class=\"navbar-toggler d-none d-lg-block ml-3\" type=\"button\" *ngSwitchCase=\"true\">\n        <fa-icon icon=\"bars\"></fa-icon>\n    </button>\n</div>\n<ul class=\"nav navbar-nav d-none d-lg-flex\">\n    <li class=\"nav-item px-2\" *ngFor=\"let tItem of textItems\">\n        <a class=\"nav-link\" (click)=\"doAction(tItem.navigation)\">\n            {{ !tItem.name.translateKey ? tItem.name.label : (tItem.name.translateKey | translate) }}\n        </a>\n    </li>\n</ul>\n<ul class=\"nav navbar-nav ml-auto\">\n    <li class=\"nav-item\" *ngFor=\"let iItem of iconItems\">\n        <a class=\"nav-link\" (click)=\"doAction(iItem.navigation)\" placement=\"bottom\" ngbTooltip=\"{{ iItem.tooltip ? (!iItem.tooltip.translateKey ? iItem.tooltip.label : (iItem.tooltip.translateKey | translate)) : undefined }}\">\n            <fa-icon [icon]=\"iItem.icon\" class=\"cks-icon\"></fa-icon>\n        </a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link py-0 px-2\">\n            <fa-icon icon=\"user-circle\" class=\"profile-icon\" *ngIf=\"!userImgUrl\"></fa-icon>\n            <img [src]=\"userImgUrl\" class=\"profile-image rounded-circle\" alt=\"Avatar\" *ngIf=\"userImgUrl\">\n        </a>\n    </li>\n    <li class=\"nav-item pr-1\">\n        <button class=\"nav-button\" type=\"button\">\n            <fa-icon icon=\"ellipsis-h\"></fa-icon>\n        </button>\n    </li>\n</ul>\n<div class=\"cks-subheader justify-content-between px-3\" *ngIf=\"withSubheader\">\n    <ol class=\"breadcrumb border-0 m-0 px-0 px-md-3 bg-transparent\">\n        <li class=\"breadcrumb-item\" [ngClass]=\"{'active': isLast}\" *ngFor=\"let bItem of breadcrumbItems; last as isLast\">\n            <a (click)=\"doAction(bItem.navigation)\">{{ !bItem.name.translateKey ? bItem.name.label : (bItem.name.translateKey | translate) }}</a>\n        </li>\n    </ol>\n</div>\n"
        }),
        __param(0, Inject(DOCUMENT))
    ], CksTopbarComponent);
    return CksTopbarComponent;
}());

var CksActiveLanguageDirective = /** @class */ (function () {
    function CksActiveLanguageDirective(el, renderer, translateService) {
        this.el = el;
        this.renderer = renderer;
        this.translateService = translateService;
    }
    CksActiveLanguageDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.translateService.onLangChange.subscribe(function (event) {
            _this.updateActiveFlag(event.lang);
        });
        this.updateActiveFlag(this.translateService.currentLang);
    };
    CksActiveLanguageDirective.prototype.updateActiveFlag = function (selectedLanguage) {
        if (this.cksActiveLanguage === selectedLanguage) {
            this.renderer.addClass(this.el.nativeElement, 'active');
        }
        else {
            this.renderer.removeClass(this.el.nativeElement, 'active');
        }
    };
    CksActiveLanguageDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: TranslateService }
    ]; };
    __decorate([
        Input()
    ], CksActiveLanguageDirective.prototype, "cksActiveLanguage", void 0);
    CksActiveLanguageDirective = __decorate([
        Directive({
            selector: '[cksActiveLanguage]'
        })
    ], CksActiveLanguageDirective);
    return CksActiveLanguageDirective;
}());

var CKS_COMPONENTS = [CksNavbarComponent, CksPageRibbonComponent, CksSidebarComponent, CksTopbarComponent];
var CKS_DIRECTIVES = [CksActiveLanguageDirective];

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
    NgChakansModule = NgChakansModule_1 = __decorate([
        NgModule({
            imports: [CommonModule, FontAwesomeModule, NgbModule, RouterModule, TranslateModule],
            declarations: __spread(CKS_DIRECTIVES, CKS_COMPONENTS),
            entryComponents: [],
            exports: __spread(CKS_DIRECTIVES, CKS_COMPONENTS, [TranslateModule])
        })
    ], NgChakansModule);
    return NgChakansModule;
}());

/**
 * An utility class to manage RX subscriptions
 */
var CksSubscriptionManager = /** @class */ (function () {
    function CksSubscriptionManager() {
        this.subscribersMap = new Map();
    }
    /**
     * Method to create {name}'s subscribers
     */
    CksSubscriptionManager.prototype.create = function (name) {
        this.subscribersMap.set(name, []);
    };
    /**
     * Method to push subscriber in {name}'s subscribers
     */
    CksSubscriptionManager.prototype.push = function (name, subscriber) {
        if (this.subscribersMap.get(name) === undefined) {
            this.create(name);
        }
        this.subscribersMap.get(name).push(subscriber);
    };
    /**
     * Method to destroy {name}'s subscribers
     */
    CksSubscriptionManager.prototype.destroy = function (name) {
        var subscribers = this.subscribersMap.get(name);
        subscribers.filter(function (subscriber) { return subscriber !== undefined && !subscriber.closed; }).forEach(function (subscriber) { return subscriber.unsubscribe(); });
        subscribers.splice(0, subscribers.length);
        this.subscribersMap.delete(name);
    };
    /**
     * Method to count {name}'s subscribers
     */
    CksSubscriptionManager.prototype.getCount = function (name) {
        return this.subscribersMap.get(name).length;
    };
    /**
     * Method to destroy all subscribers
     */
    CksSubscriptionManager.prototype.destroyAll = function () {
        this.subscribersMap.forEach(function (subscribers, key) {
            subscribers.filter(function (subscriber) { return subscriber !== undefined && !subscriber.closed; }).forEach(function (subscriber) { return subscriber.unsubscribe(); });
            subscribers.splice(0, subscribers.length);
        });
        this.subscribersMap.clear();
    };
    CksSubscriptionManager.ngInjectableDef = ɵɵdefineInjectable({ factory: function CksSubscriptionManager_Factory() { return new CksSubscriptionManager(); }, token: CksSubscriptionManager, providedIn: "root" });
    CksSubscriptionManager = __decorate([
        Injectable({ providedIn: 'root' })
    ], CksSubscriptionManager);
    return CksSubscriptionManager;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { CksConfigService, CksModuleConfig, CksNavbarComponent, CksNavbarService, CksPageRibbonComponent, CksProfileInfo, CksProfileService, CksRouteService, CksSidebarComponent, CksSidebarService, CksSubscriptionManager, CksTopbarComponent, NgChakansModule, CKS_COMPONENTS as ɵa, CKS_DIRECTIVES as ɵb, CksActiveLanguageDirective as ɵc };
//# sourceMappingURL=ng-chakans.js.map

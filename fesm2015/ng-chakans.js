import { __decorate, __metadata } from 'tslib';
import { ɵɵdefineInjectable, Injectable, ɵɵinject, Input, Component, TemplateRef, Directive, ElementRef, Renderer2, NgModule } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

let CksNavbarService = class CksNavbarService {
    constructor() {
        this.navbarViewed = new BehaviorSubject(true);
    }
    get isNavbarViewed() {
        return this.navbarViewed.asObservable();
    }
    setNavbarViewed(navbarViewed) {
        this.navbarViewed.next(navbarViewed);
    }
};
CksNavbarService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CksNavbarService_Factory() { return new CksNavbarService(); }, token: CksNavbarService, providedIn: "root" });
CksNavbarService = __decorate([
    Injectable({ providedIn: 'root' }),
    __metadata("design:paramtypes", [])
], CksNavbarService);

let CksRouteService = class CksRouteService {
    constructor(router) {
        this.router = router;
    }
    navigate(href) {
        if (typeof href === 'string') {
            window.location.href = href;
        }
        else {
            const navigationExtras = {};
            if (href.queryParams) {
                navigationExtras.queryParams = href.queryParams;
            }
            if (href.fragment) {
                navigationExtras.fragment = href.fragment;
            }
            if (href.routerLink && href.routerLink.length > 0) {
                this.router.navigate(href.routerLink, navigationExtras);
            }
        }
    }
};
CksRouteService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CksRouteService_Factory() { return new CksRouteService(ɵɵinject(Router)); }, token: CksRouteService, providedIn: "root" });
CksRouteService = __decorate([
    Injectable({ providedIn: 'root' }),
    __metadata("design:paramtypes", [Router])
], CksRouteService);

let CksNavbarComponent = class CksNavbarComponent {
    constructor(navbarService, routeService) {
        this.navbarService = navbarService;
        this.routeService = routeService;
        this.isNavbarCollapsed = true;
        this.isNavbarViewed = this.navbarService.isNavbarViewed;
    }
    doAction(navigation) {
        this.collapseNavbar();
        if (navigation) {
            if (typeof navigation === 'function') {
                navigation();
            }
            else {
                this.routeService.navigate(navigation);
            }
        }
    }
    collapseNavbar() {
        this.isNavbarCollapsed = true;
    }
    toggleNavbar() {
        this.isNavbarCollapsed = !this.isNavbarCollapsed;
    }
    isUsedRouterLink(navigation) {
        if (!navigation || typeof navigation === 'function' || typeof navigation === 'string') {
            return false;
        }
        return true;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], CksNavbarComponent.prototype, "brand", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], CksNavbarComponent.prototype, "menuItems", void 0);
CksNavbarComponent = __decorate([
    Component({
        selector: 'cks-navbar',
        template: "<nav class=\"navbar navbar-dark navbar-expand-md bg-dark\" *ngIf=\"isNavbarViewed | async\">\n    <a class=\"navbar-brand logo\" (click)=\"doAction({routerLink: ['/']})\" *ngIf=\"brand && brand.title\">\n        <span class=\"logo-img\"></span>\n        <span class=\"navbar-title\">{{ !brand.title.translateKey ? brand.title.label : (brand.title.translateKey | translate) }}</span>\n        <span class=\"navbar-version\" *ngIf=\"brand.version\">{{ brand.version }}</span>\n    </a>\n    <a class=\"navbar-toggler d-lg-none\" href=\"javascript:void(0);\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"toggleNavbar()\">\n        <fa-icon icon=\"bars\"></fa-icon>\n    </a>\n    <div class=\"navbar-collapse collapse\" id=\"navbarResponsive\" [ngbCollapse]=\"isNavbarCollapsed\">\n        <ul class=\"navbar-nav ml-auto\">\n            <ng-template *ngFor=\"let item of menuItems\" [ngTemplateOutlet]=\"item.subItems && item.subItems.length > 0 ? dropdown : nonDropdown\" [ngTemplateOutletContext]=\"{ item: item }\"></ng-template>\n        </ul>\n    </div>\n</nav>\n<ng-template #nonDropdown let-item=\"item\">\n    <li class=\"nav-item\" routerLinkActive=\"active\">\n        <ng-template [ngTemplateOutlet]=\"isUsedRouterLink(item.navigation) ? routerLink : nonRouterLink\" [ngTemplateOutletContext]=\"{ item: item, classname: 'nav-link' }\"></ng-template>\n    </li>\n</ng-template>\n<ng-template #dropdown let-item=\"item\">\n    <li ngbDropdown class=\"nav-item dropdown pointer\" routerLinkActive=\"active\">\n        <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle href=\"javascript:void(0);\" id=\"{{ item.id }}\">\n            <span>\n                <fa-layers [fixedWidth]=\"true\" *ngIf=\"item.icon && item.icon.length > 0\">\n                    <fa-icon [icon]=\"item.icon\"></fa-icon>\n                </fa-layers>\n                <span>{{ !item.name.translateKey ? item.name.label : (item.name.translateKey | translate) }}</span>\n            </span>\n        </a>\n        <ul class=\"dropdown-menu\" ngbDropdownMenu [attr.aria-labelledby]=\"item.id\" *ngIf=\"item.subItems && item.subItems.length > 0\">\n            <li *ngFor=\"let subItem of item.subItems\">\n                <ng-template [ngTemplateOutlet]=\"isUsedRouterLink(subItem.navigation) ? routerLink : nonRouterLink\" [ngTemplateOutletContext]=\"{ item: subItem, classname: 'dropdown-item' }\"></ng-template>\n            </li>\n        </ul>\n    </li>\n</ng-template>\n<ng-template #nonRouterLink let-item=\"item\" let-classname=\"classname\">\n    <a [ngClass]=\"classname\" (click)=\"doAction(item.navigation)\">\n        <span>\n            <fa-layers [fixedWidth]=\"true\" *ngIf=\"item.icon && item.icon.length > 0\">\n                <fa-icon [icon]=\"item.icon\"></fa-icon>\n            </fa-layers>\n            <span>{{ !item.name.translateKey ? item.name.label : (item.name.translateKey | translate) }}</span>\n        </span>\n    </a>\n</ng-template>\n<ng-template #routerLink let-item=\"item\" let-classname=\"classname\">\n    <a [ngClass]=\"classname\" [routerLink]=\"item.navigation.routerLink\" [queryParams]=\"item.navigation.queryParams\" [fragment]=\"item.navigation.fragment\" (click)=\"collapseNavbar()\">\n        <span>\n            <fa-layers [fixedWidth]=\"true\" *ngIf=\"item.icon && item.icon.length > 0\">\n                <fa-icon [icon]=\"item.icon\"></fa-icon>\n            </fa-layers>\n            <span>{{ !item.name.translateKey ? item.name.label : (item.name.translateKey | translate) }}</span>\n        </span>\n    </a>\n</ng-template>\n"
    }),
    __metadata("design:paramtypes", [CksNavbarService, CksRouteService])
], CksNavbarComponent);

class CksProfileInfo {
}

let CksModuleConfig = class CksModuleConfig {
    constructor() {
        this.serverApiUrl = '/';
    }
};
CksModuleConfig.ngInjectableDef = ɵɵdefineInjectable({ factory: function CksModuleConfig_Factory() { return new CksModuleConfig(); }, token: CksModuleConfig, providedIn: "root" });
CksModuleConfig = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CksModuleConfig);

let CksConfigService = class CksConfigService {
    constructor(moduleConfig) {
        this.CONFIG_OPTIONS = Object.assign({}, new CksModuleConfig(), moduleConfig);
    }
    getConfig() {
        return this.CONFIG_OPTIONS;
    }
};
CksConfigService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CksConfigService_Factory() { return new CksConfigService(ɵɵinject(CksModuleConfig)); }, token: CksConfigService, providedIn: "root" });
CksConfigService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [CksModuleConfig])
], CksConfigService);

let CksProfileService = class CksProfileService {
    constructor(configService, http) {
        this.configService = configService;
        this.http = http;
        this.infoUrl = '{SERVER_API_URL}' + 'management/info';
        const config = this.configService.getConfig();
        this.infoUrl = this.infoUrl.replace('{SERVER_API_URL}', config.serverApiUrl);
    }
    getProfileInfo() {
        if (!this.profileInfo) {
            this.profileInfo = this.http
                .get(this.infoUrl, { observe: 'response' })
                .pipe(map((res) => {
                const data = res.body;
                const pi = new CksProfileInfo();
                pi.activeProfiles = data['activeProfiles'];
                const displayRibbonOnProfiles = data['display-ribbon-on-profiles'].split(',');
                if (pi.activeProfiles) {
                    const ribbonProfiles = displayRibbonOnProfiles.filter(profile => pi.activeProfiles.includes(profile));
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
    }
};
CksProfileService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CksProfileService_Factory() { return new CksProfileService(ɵɵinject(CksConfigService), ɵɵinject(HttpClient)); }, token: CksProfileService, providedIn: "root" });
CksProfileService = __decorate([
    Injectable({ providedIn: 'root' }),
    __metadata("design:paramtypes", [CksConfigService, HttpClient])
], CksProfileService);

let CksPageRibbonComponent = class CksPageRibbonComponent {
    constructor(profileService) {
        this.profileService = profileService;
    }
    ngOnInit() {
        this.profileService.getProfileInfo().then(profileInfo => {
            this.profileInfo = profileInfo;
            this.ribbonEnv = profileInfo.ribbonEnv;
        });
    }
};
CksPageRibbonComponent = __decorate([
    Component({
        selector: 'cks-page-ribbon',
        template: `
    <div class="ribbon" *ngIf="ribbonEnv">
      <a href="">{{ 'global.ribbon.' + ribbonEnv | translate }}</a>
    </div>
  `
    }),
    __metadata("design:paramtypes", [CksProfileService])
], CksPageRibbonComponent);

let CksSidebarService = class CksSidebarService {
    constructor() {
        this.sidebarViewed = new BehaviorSubject(true);
    }
    get isSidebarViewed() {
        return this.sidebarViewed.asObservable();
    }
    setSidebarViewed(sidebarViewed) {
        this.sidebarViewed.next(sidebarViewed);
    }
};
CksSidebarService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CksSidebarService_Factory() { return new CksSidebarService(); }, token: CksSidebarService, providedIn: "root" });
CksSidebarService = __decorate([
    Injectable({ providedIn: 'root' }),
    __metadata("design:paramtypes", [])
], CksSidebarService);

let CksSidebarComponent = class CksSidebarComponent {
    constructor(sidebarService, routeService) {
        this.sidebarService = sidebarService;
        this.routeService = routeService;
        this.isSidebarViewed = this.sidebarService.isSidebarViewed;
    }
    doAction(navigation) {
        if (navigation) {
            if (typeof navigation === 'function') {
                navigation();
            }
            else {
                this.routeService.navigate(navigation);
            }
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], CksSidebarComponent.prototype, "headerTemplate", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], CksSidebarComponent.prototype, "contentTemplate", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], CksSidebarComponent.prototype, "footerTemplate", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], CksSidebarComponent.prototype, "menuItems", void 0);
CksSidebarComponent = __decorate([
    Component({
        selector: 'cks-sidebar',
        template: "<div class=\"sidebar\" *ngIf=\"isSidebarViewed | async\">\n    <div class=\"sidebar-header\">\n        <ng-template [ngTemplateOutlet]=\"headerTemplate\"></ng-template>\n    </div>\n    <div class=\"sidebar-content\">\n        <ng-template [ngTemplateOutlet]=\"contentTemplate || sidebarContent\" [ngTemplateOutletContext]=\"{ items: menuItems }\"> </ng-template>\n    </div>\n    <div class=\"sidebar-footer\">\n        <ng-template [ngTemplateOutlet]=\"footerTemplate\"></ng-template>\n    </div>\n</div>\n<ng-template #sidebarContent let-items=\"items\">\n    <ul class=\"sidebar-menu\" *ngIf=\"items\">\n        <li *ngFor=\"let item of items\">\n            <a (click)=\"doAction(item.navigation)\">\n                <span>\n                    <fa-layers [fixedWidth]=\"true\" *ngIf=\"item.icon && item.icon.length > 0\">\n                        <fa-icon [icon]=\"item.icon\"></fa-icon>\n                    </fa-layers>\n                    <span>{{ !item.name.translateKey ? item.name.label : (item.name.translateKey | translate) }}</span>\n                </span>\n            </a>\n            <ul class=\"sidebar-sub-menu\" *ngIf=\"item.subItems && item.subItems.length > 0\">\n                <li *ngFor=\"let subItem of item.subItems\">\n                    <a (click)=\"doAction(subItem.navigation)\">\n                        <span>\n                            <fa-layers [fixedWidth]=\"true\" *ngIf=\"subItem.icon && subItem.icon.length > 0\">\n                                <fa-icon [icon]=\"subItem.icon\"></fa-icon>\n                            </fa-layers>\n                            <span>{{ !subItem.name.translateKey ? subItem.name.label : (subItem.name.translateKey | translate) }}</span>\n                        </span>\n                    </a>\n                    <a class=\"btn btn-secondary btn-sm\" (click)=\"doAction(subItem.ext.navigation)\" *ngIf=\"subItem.ext\">\n                        <fa-layers *ngIf=\"subItem.ext.icon && subItem.ext.icon.length > 0\">\n                            <fa-icon [icon]=\"subItem.ext.icon\"></fa-icon>\n                        </fa-layers>\n                    </a>\n                </li>\n            </ul>\n        </li>\n    </ul>\n</ng-template>\n"
    }),
    __metadata("design:paramtypes", [CksSidebarService, CksRouteService])
], CksSidebarComponent);

let CksActiveLanguageDirective = class CksActiveLanguageDirective {
    constructor(el, renderer, translateService) {
        this.el = el;
        this.renderer = renderer;
        this.translateService = translateService;
    }
    ngOnInit() {
        this.translateService.onLangChange.subscribe((event) => {
            this.updateActiveFlag(event.lang);
        });
        this.updateActiveFlag(this.translateService.currentLang);
    }
    updateActiveFlag(selectedLanguage) {
        if (this.cksActiveLanguage === selectedLanguage) {
            this.renderer.addClass(this.el.nativeElement, 'active');
        }
        else {
            this.renderer.removeClass(this.el.nativeElement, 'active');
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], CksActiveLanguageDirective.prototype, "cksActiveLanguage", void 0);
CksActiveLanguageDirective = __decorate([
    Directive({
        selector: '[cksActiveLanguage]'
    }),
    __metadata("design:paramtypes", [ElementRef, Renderer2, TranslateService])
], CksActiveLanguageDirective);

const CKS_COMPONENTS = [CksNavbarComponent, CksPageRibbonComponent, CksSidebarComponent];
const CKS_DIRECTIVES = [CksActiveLanguageDirective];

var NgChakansModule_1;
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
NgChakansModule = NgChakansModule_1 = __decorate([
    NgModule({
        imports: [CommonModule, FontAwesomeModule, NgbModule, RouterModule, TranslateModule],
        declarations: [...CKS_DIRECTIVES, ...CKS_COMPONENTS],
        entryComponents: [],
        exports: [...CKS_DIRECTIVES, ...CKS_COMPONENTS, TranslateModule]
    })
], NgChakansModule);

/**
 * An utility class to manage RX subscriptions
 */
let CksSubscriptionManager = class CksSubscriptionManager {
    /**
     * An utility class to manage RX subscriptions
     */
    constructor() {
        this.subscribersMap = new Map();
    }
    /**
     * Method to create {name}'s subscribers
     */
    create(name) {
        this.subscribersMap.set(name, []);
    }
    /**
     * Method to push subscriber in {name}'s subscribers
     */
    push(name, subscriber) {
        if (this.subscribersMap.get(name) === undefined) {
            this.create(name);
        }
        this.subscribersMap.get(name).push(subscriber);
    }
    /**
     * Method to destroy {name}'s subscribers
     */
    destroy(name) {
        const subscribers = this.subscribersMap.get(name);
        subscribers.filter(subscriber => subscriber !== undefined && !subscriber.closed).forEach(subscriber => subscriber.unsubscribe());
        subscribers.splice(0, subscribers.length);
        this.subscribersMap.delete(name);
    }
    /**
     * Method to count {name}'s subscribers
     */
    getCount(name) {
        return this.subscribersMap.get(name).length;
    }
    /**
     * Method to destroy all subscribers
     */
    destroyAll() {
        this.subscribersMap.forEach((subscribers, key) => {
            subscribers.filter(subscriber => subscriber !== undefined && !subscriber.closed).forEach(subscriber => subscriber.unsubscribe());
            subscribers.splice(0, subscribers.length);
        });
        this.subscribersMap.clear();
    }
};
CksSubscriptionManager.ngInjectableDef = ɵɵdefineInjectable({ factory: function CksSubscriptionManager_Factory() { return new CksSubscriptionManager(); }, token: CksSubscriptionManager, providedIn: "root" });
CksSubscriptionManager = __decorate([
    Injectable({ providedIn: 'root' })
], CksSubscriptionManager);

export { CksConfigService, CksModuleConfig, CksNavbarComponent, CksNavbarService, CksPageRibbonComponent, CksProfileService, CksRouteService, CksSidebarComponent, CksSidebarService, CksSubscriptionManager, NgChakansModule, CKS_COMPONENTS as ɵa, CKS_DIRECTIVES as ɵb, CksActiveLanguageDirective as ɵc };
//# sourceMappingURL=ng-chakans.js.map

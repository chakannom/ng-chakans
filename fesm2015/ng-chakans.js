import { __decorate, __param } from 'tslib';
import { ViewChild, ViewContainerRef, Component, ɵɵdefineInjectable, Injectable, ɵɵinject, Input, HostBinding, Inject, Renderer2, ElementRef, Directive, Optional, NgModule } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, takeUntil } from 'rxjs/operators';
import { DOCUMENT, CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

let CksDynamicComponent = class CksDynamicComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        const componentFactory = this.route.snapshot.data['factory'];
        this.content.createComponent(componentFactory);
    }
};
CksDynamicComponent.ctorParameters = () => [
    { type: ActivatedRoute }
];
__decorate([
    ViewChild('content', { read: ViewContainerRef, static: true })
], CksDynamicComponent.prototype, "content", void 0);
CksDynamicComponent = __decorate([
    Component({
        selector: 'cks-dynamic',
        template: "<div #content></div>\n"
    })
], CksDynamicComponent);

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
    Injectable({ providedIn: 'root' })
], CksNavbarService);

let CksRouteService = class CksRouteService {
    constructor(router) {
        this.router = router;
    }
    navigate(navigation) {
        if (typeof navigation === 'string') {
            window.location.href = navigation;
        }
        else {
            const navigationExtras = {};
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
    }
};
CksRouteService.ctorParameters = () => [
    { type: Router }
];
CksRouteService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CksRouteService_Factory() { return new CksRouteService(ɵɵinject(Router)); }, token: CksRouteService, providedIn: "root" });
CksRouteService = __decorate([
    Injectable({ providedIn: 'root' })
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
CksNavbarComponent.ctorParameters = () => [
    { type: CksNavbarService },
    { type: CksRouteService }
];
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

/*
 Copyright 2019 ChaKanNom

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */
class CksProfileInfo {
}

let CksModuleConfig = class CksModuleConfig {
    constructor() {
        this.serverApiUrl = '/';
        this.i18nEnabled = false;
        this.defaultI18nLang = 'ko';
        this.noi18nMessage = 'translation-not-found';
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
CksConfigService.ctorParameters = () => [
    { type: CksModuleConfig }
];
CksConfigService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CksConfigService_Factory() { return new CksConfigService(ɵɵinject(CksModuleConfig)); }, token: CksConfigService, providedIn: "root" });
CksConfigService = __decorate([
    Injectable({
        providedIn: 'root'
    })
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
CksProfileService.ctorParameters = () => [
    { type: CksConfigService },
    { type: HttpClient }
];
CksProfileService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CksProfileService_Factory() { return new CksProfileService(ɵɵinject(CksConfigService), ɵɵinject(HttpClient)); }, token: CksProfileService, providedIn: "root" });
CksProfileService = __decorate([
    Injectable({ providedIn: 'root' })
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
CksPageRibbonComponent.ctorParameters = () => [
    { type: CksProfileService }
];
CksPageRibbonComponent = __decorate([
    Component({
        selector: 'cks-page-ribbon',
        template: `
    <div class="ribbon" *ngIf="ribbonEnv">
      <a href="">{{ 'global.ribbon.' + ribbonEnv | translate }}</a>
    </div>
  `
    })
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
    Injectable({ providedIn: 'root' })
], CksSidebarService);

let CksSidebarComponent = class CksSidebarComponent {
    constructor(sidebarService, routeService) {
        this.sidebarService = sidebarService;
        this.routeService = routeService;
        this._header = true;
        this.isSidebarCollapsed = true;
        this.isSidebarViewed = this.sidebarService.isSidebarViewed;
    }
    doAction(navigation) {
        this.collapseSidebar();
        if (navigation) {
            if (typeof navigation === 'function') {
                navigation();
            }
            else {
                this.routeService.navigate(navigation);
            }
        }
    }
    collapseSidebar() {
        this.isSidebarCollapsed = true;
    }
    toggleSidebar() {
        this.isSidebarCollapsed = !this.isSidebarCollapsed;
    }
    isUsedRouterLink(navigation) {
        if (!navigation || typeof navigation === 'function' || typeof navigation === 'string') {
            return false;
        }
        return true;
    }
};
CksSidebarComponent.ctorParameters = () => [
    { type: CksSidebarService },
    { type: CksRouteService }
];
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

let CksTopbarComponent = class CksTopbarComponent {
    constructor(document, renderer, routeService) {
        this.document = document;
        this.renderer = renderer;
        this.routeService = routeService;
        this._header = true;
        this._fixedTop = false;
        this._positionFixed = false;
        this._withSidebar = false;
        this._withSubHeader = false;
        this.classNameForBody = 'cks-body';
    }
    ngOnInit() {
        this._fixedTop = this._positionFixed = this.fixed;
        this._withSidebar = this.withSidebar;
        this._withSubHeader = this.withSubheader;
        this.textItems = this.textItems ? this.textItems.slice(0, 3) : [];
        this.iconItems = this.iconItems ? this.iconItems.slice(0, 6) : [];
        if (this.fixed) {
            this.classNameForBody += '-fixed-topbar';
            if (this.withSubheader) {
                this.classNameForBody += '-with-subheader';
            }
            this.renderer.addClass(this.document.body, this.classNameForBody);
        }
    }
    ngOnDestroy() {
        if (this.fixed) {
            this.renderer.removeClass(this.document.body, this.classNameForBody);
        }
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
CksTopbarComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Renderer2 },
    { type: CksRouteService }
];
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
    HostBinding('class.cks-topbar')
], CksTopbarComponent.prototype, "_header", void 0);
__decorate([
    HostBinding('class.fixed-top')
], CksTopbarComponent.prototype, "_fixedTop", void 0);
__decorate([
    HostBinding('class.position-fixed')
], CksTopbarComponent.prototype, "_positionFixed", void 0);
__decorate([
    HostBinding('class.cks-topbar-with-sidebar')
], CksTopbarComponent.prototype, "_withSidebar", void 0);
__decorate([
    HostBinding('class.cks-topbar-with-subheader')
], CksTopbarComponent.prototype, "_withSubHeader", void 0);
CksTopbarComponent = __decorate([
    Component({
        selector: 'cks-topbar',
        template: "<div class=\"d-flex\" [ngSwitch]=\"withSidebar\">\n    <button  class=\"navbar-toggler d-lg-none mr-auto\" type=\"button\" *ngSwitchCase=\"true\">\n        <fa-icon icon=\"bars\"></fa-icon>\n    </button>\n    <a class=\"cks-topbar-brand\">\n        <span class=\"cks-topbar-logo-img\"></span>\n        <span class=\"cks-topbar-brand-text\">Gooroom</span>\n        <span class=\"cks-topbar-version\">vUNKNOWN</span>\n    </a>\n    <button class=\"navbar-toggler d-none d-lg-block ml-3\" type=\"button\" *ngSwitchCase=\"true\">\n        <fa-icon icon=\"bars\"></fa-icon>\n    </button>\n</div>\n<ul class=\"nav navbar-nav d-none d-lg-flex\">\n    <li class=\"nav-item px-2\" *ngFor=\"let tItem of textItems\">\n        <a class=\"nav-link\" (click)=\"doAction(tItem.navigation)\">\n            {{ !tItem.name.translateKey ? tItem.name.label : (tItem.name.translateKey | translate) }}\n        </a>\n    </li>\n</ul>\n<ul class=\"nav navbar-nav ml-auto\">\n    <li class=\"nav-item\" *ngFor=\"let iItem of iconItems\">\n        <a class=\"nav-link\" (click)=\"doAction(iItem.navigation)\" placement=\"bottom\" ngbTooltip=\"{{ iItem.tooltip ? (!iItem.tooltip.translateKey ? iItem.tooltip.label : (iItem.tooltip.translateKey | translate)) : undefined }}\">\n            <fa-icon [icon]=\"iItem.icon\" class=\"cks-icon\"></fa-icon>\n        </a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link py-0 px-2\">\n            <fa-icon icon=\"user-circle\" class=\"profile-icon\" *ngIf=\"!userImgUrl\"></fa-icon>\n            <img [src]=\"userImgUrl\" class=\"profile-image rounded-circle\" alt=\"Avatar\" *ngIf=\"userImgUrl\">\n        </a>\n    </li>\n    <li class=\"nav-item pr-1\">\n        <button class=\"nav-button\" type=\"button\">\n            <fa-icon icon=\"ellipsis-h\"></fa-icon>\n        </button>\n    </li>\n</ul>\n<div class=\"cks-subheader justify-content-between px-3\" *ngIf=\"withSubheader\">\n    <ol class=\"breadcrumb border-0 m-0 px-0 px-md-3 bg-transparent\">\n        <li class=\"breadcrumb-item\" [ngClass]=\"{'active': isLast}\" *ngFor=\"let bItem of breadcrumbItems; last as isLast\">\n            <a (click)=\"doAction(bItem.navigation)\">{{ !bItem.name.translateKey ? bItem.name.label : (bItem.name.translateKey | translate) }}</a>\n        </li>\n    </ol>\n</div>\n"
    }),
    __param(0, Inject(DOCUMENT))
], CksTopbarComponent);

let CksMainWithHeadComponent = class CksMainWithHeadComponent {
    constructor() { }
};
CksMainWithHeadComponent = __decorate([
    Component({
        selector: 'cks-main-with-head',
        template: "<router-outlet name=\"topbar\"></router-outlet>\n<div class=\"cks-main-with-head\">\n    <router-outlet></router-outlet>\n</div>\n"
    })
], CksMainWithHeadComponent);

let CksMainWithSideAndHeadComponent = class CksMainWithSideAndHeadComponent {
    constructor() { }
};
CksMainWithSideAndHeadComponent = __decorate([
    Component({
        selector: 'cks-main-with-side-and-head',
        template: "<router-outlet name=\"sidebar\"></router-outlet>\n<div class=\"cks-main-with-side\">\n    <router-outlet name=\"topbar\"></router-outlet>\n    <div class=\"cks-main-with-head\">\n        <router-outlet></router-outlet>\n    </div>\n</div>\n"
    })
], CksMainWithSideAndHeadComponent);

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
CksActiveLanguageDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: TranslateService }
];
__decorate([
    Input()
], CksActiveLanguageDirective.prototype, "cksActiveLanguage", void 0);
CksActiveLanguageDirective = __decorate([
    Directive({
        selector: '[cksActiveLanguage]'
    })
], CksActiveLanguageDirective);

/**
 * A wrapper directive on top of the translate pipe as the inbuilt translate directive from ngx-translate is too verbose and buggy
 */
let CksTranslateDirective = class CksTranslateDirective {
    constructor(configService, el, translateService) {
        this.configService = configService;
        this.el = el;
        this.translateService = translateService;
        this.directiveDestroyed = new Subject();
    }
    ngOnInit() {
        const enabled = this.configService.getConfig().i18nEnabled;
        if (enabled) {
            this.translateService.onLangChange.pipe(takeUntil(this.directiveDestroyed)).subscribe(() => {
                this.getTranslation();
            });
        }
    }
    ngOnChanges() {
        const enabled = this.configService.getConfig().i18nEnabled;
        if (enabled) {
            this.getTranslation();
        }
    }
    ngOnDestroy() {
        this.directiveDestroyed.next();
        this.directiveDestroyed.complete();
    }
    getTranslation() {
        this.translateService
            .get(this.cksTranslate, this.translateValues)
            .pipe(takeUntil(this.directiveDestroyed))
            .subscribe(value => {
            this.el.nativeElement.innerHTML = value;
        }, () => {
            return `${this.configService.getConfig().noi18nMessage}[${this.cksTranslate}]`;
        });
    }
};
CksTranslateDirective.ctorParameters = () => [
    { type: CksConfigService },
    { type: ElementRef },
    { type: TranslateService, decorators: [{ type: Optional }] }
];
__decorate([
    Input()
], CksTranslateDirective.prototype, "cksTranslate", void 0);
__decorate([
    Input()
], CksTranslateDirective.prototype, "translateValues", void 0);
CksTranslateDirective = __decorate([
    Directive({
        selector: '[cksTranslate]'
    }),
    __param(2, Optional())
], CksTranslateDirective);

const CKS_COMPONENTS = [CksDynamicComponent, CksNavbarComponent, CksPageRibbonComponent, CksSidebarComponent, CksTopbarComponent];
const CKS_DIRECTIVES = [CksActiveLanguageDirective, CksTranslateDirective];
const CKS_LAYOUTS = [CksMainWithHeadComponent, CksMainWithSideAndHeadComponent];

class CksMissingTranslationHandler {
    constructor(configService) {
        this.configService = configService;
    }
    handle(params) {
        const key = params.key;
        return `${this.configService.getConfig().noi18nMessage}[${key}]`;
    }
}

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
        declarations: [...CKS_COMPONENTS, ...CKS_DIRECTIVES, ...CKS_LAYOUTS],
        entryComponents: [CksDynamicComponent, CksMainWithHeadComponent, CksMainWithSideAndHeadComponent],
        exports: [...CKS_COMPONENTS, ...CKS_DIRECTIVES, ...CKS_LAYOUTS, TranslateModule]
    })
], NgChakansModule);
function translatePartialLoader(http, prefix = 'i18n/', suffix = '.json?buildTimestamp=0') {
    return new TranslateHttpLoader(http, prefix, suffix);
}
function missingTranslationHandler(configService) {
    return new CksMissingTranslationHandler(configService);
}

let CksLanguageService = class CksLanguageService {
    constructor(translateService, configService) {
        this.translateService = translateService;
        this.configService = configService;
        this.currentLang = 'ko';
    }
    init() {
        const config = this.configService.getConfig();
        this.currentLang = config.defaultI18nLang;
        this.translateService.setDefaultLang(this.currentLang);
        this.translateService.use(this.currentLang);
    }
    changeLanguage(languageKey) {
        this.currentLang = languageKey;
        this.configService.CONFIG_OPTIONS.defaultI18nLang = languageKey;
        this.translateService.use(this.currentLang);
    }
    getCurrentLanguage() {
        return this.currentLang;
    }
};
CksLanguageService.ctorParameters = () => [
    { type: TranslateService },
    { type: CksConfigService }
];
CksLanguageService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CksLanguageService_Factory() { return new CksLanguageService(ɵɵinject(TranslateService), ɵɵinject(CksConfigService)); }, token: CksLanguageService, providedIn: "root" });
CksLanguageService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CksLanguageService);

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

/*
 Copyright 2013-2019 the original author or authors from the JHipster project.
 * Modified by ChaKanNom 2019.07.31

 This file is part of the JHipster project, see https://www.jhipster.tech/
 for more information.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CksConfigService, CksDynamicComponent, CksLanguageService, CksMainWithHeadComponent, CksMainWithSideAndHeadComponent, CksModuleConfig, CksNavbarComponent, CksNavbarService, CksPageRibbonComponent, CksProfileInfo, CksProfileService, CksRouteService, CksSidebarComponent, CksSidebarService, CksSubscriptionManager, CksTopbarComponent, NgChakansModule, missingTranslationHandler, translatePartialLoader, CksMissingTranslationHandler as ɵa, CKS_COMPONENTS as ɵb, CKS_DIRECTIVES as ɵc, CKS_LAYOUTS as ɵd, CksActiveLanguageDirective as ɵe, CksTranslateDirective as ɵf };
//# sourceMappingURL=ng-chakans.js.map

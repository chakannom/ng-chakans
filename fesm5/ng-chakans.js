import { __decorate, __metadata, __assign, __spread } from 'tslib';
import { ɵɵdefineInjectable, Injectable, ɵɵinject, Input, Component, TemplateRef, Directive, ElementRef, Renderer2, NgModule } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
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
        Injectable({ providedIn: 'root' }),
        __metadata("design:paramtypes", [])
    ], CksNavbarService);
    return CksNavbarService;
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
    CksConfigService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CksConfigService_Factory() { return new CksConfigService(ɵɵinject(CksModuleConfig)); }, token: CksConfigService, providedIn: "root" });
    CksConfigService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [CksModuleConfig])
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
    CksProfileService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CksProfileService_Factory() { return new CksProfileService(ɵɵinject(CksConfigService), ɵɵinject(HttpClient)); }, token: CksProfileService, providedIn: "root" });
    CksProfileService = __decorate([
        Injectable({ providedIn: 'root' }),
        __metadata("design:paramtypes", [CksConfigService, HttpClient])
    ], CksProfileService);
    return CksProfileService;
}());

var CksRouteService = /** @class */ (function () {
    function CksRouteService(router) {
        this.router = router;
    }
    CksRouteService.prototype.navigate = function (href) {
        if (typeof href === 'string') {
            window.location.href = href;
        }
        else {
            var navigationExtras = {};
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
    };
    CksRouteService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CksRouteService_Factory() { return new CksRouteService(ɵɵinject(Router)); }, token: CksRouteService, providedIn: "root" });
    CksRouteService = __decorate([
        Injectable({ providedIn: 'root' }),
        __metadata("design:paramtypes", [Router])
    ], CksRouteService);
    return CksRouteService;
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
        Injectable({ providedIn: 'root' }),
        __metadata("design:paramtypes", [])
    ], CksSidebarService);
    return CksSidebarService;
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

var CksNavbarComponent = /** @class */ (function () {
    function CksNavbarComponent(navbarService, routeService) {
        this.navbarService = navbarService;
        this.routeService = routeService;
        var baseElement = document.querySelector('base');
        this.homeHref = (baseElement && baseElement.href) || '';
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
            template: "<nav class=\"navbar navbar-dark navbar-expand-md bg-dark\" *ngIf=\"isNavbarViewed | async\">\n    <a class=\"navbar-brand logo\" [href]=\"homeHref\" (click)=\"collapseNavbar()\" *ngIf=\"brand && brand.title\">\n        <span class=\"logo-img\"></span>\n        <span class=\"navbar-title\">{{ !brand.title.translateKey ? brand.title.label : (brand.title.translateKey | translate) }}</span>\n        <span class=\"navbar-version\" *ngIf=\"brand.version\">{{ brand.version }}</span>\n    </a>\n    <a class=\"navbar-toggler d-lg-none\" href=\"javascript:void(0);\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"toggleNavbar()\">\n        <fa-icon icon=\"bars\"></fa-icon>\n    </a>\n    <div class=\"navbar-collapse collapse\" id=\"navbarResponsive\" [ngbCollapse]=\"isNavbarCollapsed\">\n        <ul class=\"navbar-nav ml-auto\">\n            <li *ngFor=\"let item of menuItems\" [ngTemplateOutlet]=\"item.subItems && item.subItems.length > 0 ? dropdown : nonDropdown\" [ngTemplateOutletContext]=\"{ item: item }\"></li>\n        </ul>\n    </div>\n</nav>\n<ng-template #nonDropdown let-item=\"item\">\n    <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" (click)=\"doAction(item.naviation);\">\n            <span>\n                <fa-layers [fixedWidth]=\"true\" *ngIf=\"item.icon && item.icon.length > 0\">\n                    <fa-icon [icon]=\"item.icon\"></fa-icon>\n                </fa-layers>\n                <span>{{ !item.name.translateKey ? item.name.label : (item.name.translateKey | translate) }}</span>\n            </span>\n        </a>\n    </li>\n</ng-template>\n<ng-template #dropdown let-item=\"item\">\n    <li ngbDropdown class=\"nav-item dropdown pointer\" routerLinkActive=\"active\">\n        <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle href=\"javascript:void(0);\" id=\"{{ item.id }}\">\n            <span>\n                <fa-layers [fixedWidth]=\"true\" *ngIf=\"item.icon && item.icon.length > 0\">\n                    <fa-icon [icon]=\"item.icon\"></fa-icon>\n                </fa-layers>\n                <span>{{ !item.name.translateKey ? item.name.label : (item.name.translateKey | translate) }}</span>\n            </span>\n        </a>\n        <ul class=\"dropdown-menu\" ngbDropdownMenu [attr.aria-labelledby]=\"item.id\" *ngIf=\"item.subItems && item.subItems.length > 0\">\n            <li *ngFor=\"let subItem of item.subItems\">\n                <a class=\"dropdown-item\" (click)=\"doAction(subItem.naviation);\">\n                    <fa-layers [fixedWidth]=\"true\" *ngIf=\"subItem.icon && subItem.icon.length > 0\">\n                        <fa-icon [icon]=\"subItem.icon\"></fa-icon>\n                    </fa-layers>\n                    <span>{{ !subItem.name.translateKey ? subItem.name.label : (subItem.name.translateKey | translate) }}</span>\n                </a>\n            </li>\n        </ul>\n    </li>\n</ng-template>\n"
        }),
        __metadata("design:paramtypes", [CksNavbarService, CksRouteService])
    ], CksNavbarComponent);
    return CksNavbarComponent;
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
    CksPageRibbonComponent = __decorate([
        Component({
            selector: 'cks-page-ribbon',
            template: "\n    <div class=\"ribbon\" *ngIf=\"ribbonEnv\">\n      <a href=\"\">{{ 'global.ribbon.' + ribbonEnv | translate }}</a>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [CksProfileService])
    ], CksPageRibbonComponent);
    return CksPageRibbonComponent;
}());

var CksSidebarComponent = /** @class */ (function () {
    function CksSidebarComponent(sidebarService, routeService) {
        this.sidebarService = sidebarService;
        this.routeService = routeService;
        this.isSidebarViewed = this.sidebarService.isSidebarViewed;
    }
    CksSidebarComponent.prototype.doAction = function (navigation) {
        if (navigation) {
            if (typeof navigation === 'function') {
                navigation();
            }
            else {
                this.routeService.navigate(navigation);
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
    return CksSidebarComponent;
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
    return CksActiveLanguageDirective;
}());

var CKS_DIRECTIVES = [CksActiveLanguageDirective];
var CKS_COMPONENTS = [CksNavbarComponent, CksPageRibbonComponent, CksSidebarComponent];

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
            imports: [CommonModule, NgbModule, FontAwesomeModule, TranslateModule],
            declarations: __spread(CKS_DIRECTIVES, CKS_COMPONENTS),
            entryComponents: [],
            exports: __spread(CKS_DIRECTIVES, CKS_COMPONENTS, [TranslateModule])
        })
    ], NgChakansModule);
    return NgChakansModule;
}());

export { CksConfigService, CksModuleConfig, CksNavbarComponent, CksNavbarService, CksPageRibbonComponent, CksProfileService, CksRouteService, CksSidebarComponent, CksSidebarService, CksSubscriptionManager, NgChakansModule, CksNavbarService as ɵa, CksRouteService as ɵb, CksProfileService as ɵc, CksSidebarService as ɵd, CKS_DIRECTIVES as ɵe, CKS_COMPONENTS as ɵf, CksActiveLanguageDirective as ɵg, CksNavbarComponent as ɵh, CksPageRibbonComponent as ɵi, CksSidebarComponent as ɵj };
//# sourceMappingURL=ng-chakans.js.map

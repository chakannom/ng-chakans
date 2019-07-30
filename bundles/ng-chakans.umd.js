(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/router'), require('@angular/common/http'), require('rxjs/operators'), require('@angular/common'), require('@ng-bootstrap/ng-bootstrap'), require('@fortawesome/angular-fontawesome'), require('@ngx-translate/core')) :
    typeof define === 'function' && define.amd ? define('ng-chakans', ['exports', '@angular/core', 'rxjs', '@angular/router', '@angular/common/http', 'rxjs/operators', '@angular/common', '@ng-bootstrap/ng-bootstrap', '@fortawesome/angular-fontawesome', '@ngx-translate/core'], factory) :
    (global = global || self, factory(global['ng-chakans'] = {}, global.ng.core, global.rxjs, global.ng.router, global.ng.common.http, global.rxjs.operators, global.ng.common, global.ngBootstrap, global.angularFontawesome, global.core$1));
}(this, function (exports, core, rxjs, router, http, operators, common, ngBootstrap, angularFontawesome, core$1) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    var CksNavbarService = /** @class */ (function () {
        function CksNavbarService() {
            this.navbarViewed = new rxjs.BehaviorSubject(true);
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
        CksNavbarService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function CksNavbarService_Factory() { return new CksNavbarService(); }, token: CksNavbarService, providedIn: "root" });
        CksNavbarService = __decorate([
            core.Injectable({ providedIn: 'root' }),
            __metadata("design:paramtypes", [])
        ], CksNavbarService);
        return CksNavbarService;
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
        CksRouteService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function CksRouteService_Factory() { return new CksRouteService(core.ɵɵinject(router.Router)); }, token: CksRouteService, providedIn: "root" });
        CksRouteService = __decorate([
            core.Injectable({ providedIn: 'root' }),
            __metadata("design:paramtypes", [router.Router])
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
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], CksNavbarComponent.prototype, "brand", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Array)
        ], CksNavbarComponent.prototype, "menuItems", void 0);
        CksNavbarComponent = __decorate([
            core.Component({
                selector: 'cks-navbar',
                template: "<nav class=\"navbar navbar-dark navbar-expand-md bg-dark\" *ngIf=\"isNavbarViewed | async\">\n    <a class=\"navbar-brand logo\" (click)=\"doAction({routerLink: ['/']})\" *ngIf=\"brand && brand.title\">\n        <span class=\"logo-img\"></span>\n        <span class=\"navbar-title\">{{ !brand.title.translateKey ? brand.title.label : (brand.title.translateKey | translate) }}</span>\n        <span class=\"navbar-version\" *ngIf=\"brand.version\">{{ brand.version }}</span>\n    </a>\n    <a class=\"navbar-toggler d-lg-none\" href=\"javascript:void(0);\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"toggleNavbar()\">\n        <fa-icon icon=\"bars\"></fa-icon>\n    </a>\n    <div class=\"navbar-collapse collapse\" id=\"navbarResponsive\" [ngbCollapse]=\"isNavbarCollapsed\">\n        <ul class=\"navbar-nav ml-auto\">\n            <li *ngFor=\"let item of menuItems\" [ngTemplateOutlet]=\"item.subItems && item.subItems.length > 0 ? dropdown : nonDropdown\" [ngTemplateOutletContext]=\"{ item: item }\"></li>\n        </ul>\n    </div>\n</nav>\n<ng-template #nonDropdown let-item=\"item\">\n    <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" (click)=\"doAction(item.navigation);\">\n            <span>\n                <fa-layers [fixedWidth]=\"true\" *ngIf=\"item.icon && item.icon.length > 0\">\n                    <fa-icon [icon]=\"item.icon\"></fa-icon>\n                </fa-layers>\n                <span>{{ !item.name.translateKey ? item.name.label : (item.name.translateKey | translate) }}</span>\n            </span>\n        </a>\n    </li>\n</ng-template>\n<ng-template #dropdown let-item=\"item\">\n    <li ngbDropdown class=\"nav-item dropdown pointer\" routerLinkActive=\"active\">\n        <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle href=\"javascript:void(0);\" id=\"{{ item.id }}\">\n            <span>\n                <fa-layers [fixedWidth]=\"true\" *ngIf=\"item.icon && item.icon.length > 0\">\n                    <fa-icon [icon]=\"item.icon\"></fa-icon>\n                </fa-layers>\n                <span>{{ !item.name.translateKey ? item.name.label : (item.name.translateKey | translate) }}</span>\n            </span>\n        </a>\n        <ul class=\"dropdown-menu\" ngbDropdownMenu [attr.aria-labelledby]=\"item.id\" *ngIf=\"item.subItems && item.subItems.length > 0\">\n            <li *ngFor=\"let subItem of item.subItems\">\n                <a class=\"dropdown-item\" (click)=\"doAction(subItem.navigation);\">\n                    <fa-layers [fixedWidth]=\"true\" *ngIf=\"subItem.icon && subItem.icon.length > 0\">\n                        <fa-icon [icon]=\"subItem.icon\"></fa-icon>\n                    </fa-layers>\n                    <span>{{ !subItem.name.translateKey ? subItem.name.label : (subItem.name.translateKey | translate) }}</span>\n                </a>\n            </li>\n        </ul>\n    </li>\n</ng-template>\n"
            }),
            __metadata("design:paramtypes", [CksNavbarService, CksRouteService])
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
        CksModuleConfig.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function CksModuleConfig_Factory() { return new CksModuleConfig(); }, token: CksModuleConfig, providedIn: "root" });
        CksModuleConfig = __decorate([
            core.Injectable({
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
        CksConfigService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function CksConfigService_Factory() { return new CksConfigService(core.ɵɵinject(CksModuleConfig)); }, token: CksConfigService, providedIn: "root" });
        CksConfigService = __decorate([
            core.Injectable({
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
                    .pipe(operators.map(function (res) {
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
        CksProfileService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function CksProfileService_Factory() { return new CksProfileService(core.ɵɵinject(CksConfigService), core.ɵɵinject(http.HttpClient)); }, token: CksProfileService, providedIn: "root" });
        CksProfileService = __decorate([
            core.Injectable({ providedIn: 'root' }),
            __metadata("design:paramtypes", [CksConfigService, http.HttpClient])
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
        CksPageRibbonComponent = __decorate([
            core.Component({
                selector: 'cks-page-ribbon',
                template: "\n    <div class=\"ribbon\" *ngIf=\"ribbonEnv\">\n      <a href=\"\">{{ 'global.ribbon.' + ribbonEnv | translate }}</a>\n    </div>\n  "
            }),
            __metadata("design:paramtypes", [CksProfileService])
        ], CksPageRibbonComponent);
        return CksPageRibbonComponent;
    }());

    var CksSidebarService = /** @class */ (function () {
        function CksSidebarService() {
            this.sidebarViewed = new rxjs.BehaviorSubject(true);
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
        CksSidebarService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function CksSidebarService_Factory() { return new CksSidebarService(); }, token: CksSidebarService, providedIn: "root" });
        CksSidebarService = __decorate([
            core.Injectable({ providedIn: 'root' }),
            __metadata("design:paramtypes", [])
        ], CksSidebarService);
        return CksSidebarService;
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
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CksSidebarComponent.prototype, "headerTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CksSidebarComponent.prototype, "contentTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CksSidebarComponent.prototype, "footerTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Array)
        ], CksSidebarComponent.prototype, "menuItems", void 0);
        CksSidebarComponent = __decorate([
            core.Component({
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
            core.Input(),
            __metadata("design:type", String)
        ], CksActiveLanguageDirective.prototype, "cksActiveLanguage", void 0);
        CksActiveLanguageDirective = __decorate([
            core.Directive({
                selector: '[cksActiveLanguage]'
            }),
            __metadata("design:paramtypes", [core.ElementRef, core.Renderer2, core$1.TranslateService])
        ], CksActiveLanguageDirective);
        return CksActiveLanguageDirective;
    }());

    var CKS_COMPONENTS = [CksNavbarComponent, CksPageRibbonComponent, CksSidebarComponent];
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
                    },
                    {
                        provide: CksProfileService,
                        useClass: CksProfileService,
                        deps: [CksConfigService, http.HttpClient]
                    },
                    {
                        provide: CksRouteService,
                        useClass: CksRouteService,
                        deps: [router.Router]
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
            core.NgModule({
                imports: [common.CommonModule, ngBootstrap.NgbModule, angularFontawesome.FontAwesomeModule, core$1.TranslateModule],
                declarations: __spread(CKS_DIRECTIVES, CKS_COMPONENTS),
                entryComponents: [],
                exports: __spread(CKS_DIRECTIVES, CKS_COMPONENTS, [core$1.TranslateModule])
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
        CksSubscriptionManager.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function CksSubscriptionManager_Factory() { return new CksSubscriptionManager(); }, token: CksSubscriptionManager, providedIn: "root" });
        CksSubscriptionManager = __decorate([
            core.Injectable({ providedIn: 'root' })
        ], CksSubscriptionManager);
        return CksSubscriptionManager;
    }());

    exports.CksConfigService = CksConfigService;
    exports.CksModuleConfig = CksModuleConfig;
    exports.CksNavbarComponent = CksNavbarComponent;
    exports.CksNavbarService = CksNavbarService;
    exports.CksPageRibbonComponent = CksPageRibbonComponent;
    exports.CksProfileService = CksProfileService;
    exports.CksRouteService = CksRouteService;
    exports.CksSidebarComponent = CksSidebarComponent;
    exports.CksSidebarService = CksSidebarService;
    exports.CksSubscriptionManager = CksSubscriptionManager;
    exports.NgChakansModule = NgChakansModule;
    exports.ɵa = CKS_COMPONENTS;
    exports.ɵb = CKS_DIRECTIVES;
    exports.ɵc = CksActiveLanguageDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ng-chakans.umd.js.map

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('rxjs'), require('@angular/common/http'), require('rxjs/operators'), require('@angular/common'), require('@ngx-translate/core'), require('@ngx-translate/http-loader'), require('@ng-bootstrap/ng-bootstrap'), require('@fortawesome/angular-fontawesome')) :
    typeof define === 'function' && define.amd ? define('ng-chakans', ['exports', '@angular/core', '@angular/router', 'rxjs', '@angular/common/http', 'rxjs/operators', '@angular/common', '@ngx-translate/core', '@ngx-translate/http-loader', '@ng-bootstrap/ng-bootstrap', '@fortawesome/angular-fontawesome'], factory) :
    (global = global || self, factory(global['ng-chakans'] = {}, global.ng.core, global.ng.router, global.rxjs, global.ng.common.http, global.rxjs.operators, global.ng.common, global.core$1, global.httpLoader, global.ngBootstrap, global.angularFontawesome));
}(this, (function (exports, core, router, rxjs, http, operators, common, core$1, httpLoader, ngBootstrap, angularFontawesome) { 'use strict';

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
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

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

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
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

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    var CksDynamicComponent = /** @class */ (function () {
        function CksDynamicComponent(route) {
            this.route = route;
        }
        CksDynamicComponent.prototype.ngOnInit = function () {
            var componentFactory = this.route.snapshot.data['factory'];
            this.content.createComponent(componentFactory);
        };
        CksDynamicComponent.ctorParameters = function () { return [
            { type: router.ActivatedRoute }
        ]; };
        __decorate([
            core.ViewChild('content', { read: core.ViewContainerRef, static: true })
        ], CksDynamicComponent.prototype, "content", void 0);
        CksDynamicComponent = __decorate([
            core.Component({
                selector: 'cks-dynamic',
                template: "<div #content></div>\n"
            })
        ], CksDynamicComponent);
        return CksDynamicComponent;
    }());

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
            core.Injectable({ providedIn: 'root' })
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
            { type: router.Router }
        ]; };
        CksRouteService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function CksRouteService_Factory() { return new CksRouteService(core.ɵɵinject(router.Router)); }, token: CksRouteService, providedIn: "root" });
        CksRouteService = __decorate([
            core.Injectable({ providedIn: 'root' })
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
            core.Input()
        ], CksNavbarComponent.prototype, "brand", void 0);
        __decorate([
            core.Input()
        ], CksNavbarComponent.prototype, "menuItems", void 0);
        CksNavbarComponent = __decorate([
            core.Component({
                selector: 'cks-navbar',
                template: "<nav class=\"navbar navbar-dark navbar-expand-md bg-dark\" *ngIf=\"isNavbarViewed | async\">\n    <a class=\"navbar-brand logo\" (click)=\"doAction({routerLink: ['/']})\" *ngIf=\"brand && brand.title\">\n        <span class=\"logo-img\"></span>\n        <span class=\"navbar-title\">{{ !brand.title.translateKey ? brand.title.label : (brand.title.translateKey | translate) }}</span>\n        <span class=\"navbar-version\" *ngIf=\"brand.version\">{{ brand.version }}</span>\n    </a>\n    <a class=\"navbar-toggler d-lg-none\" href=\"javascript:void(0);\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"toggleNavbar()\">\n        <fa-icon icon=\"bars\"></fa-icon>\n    </a>\n    <div class=\"navbar-collapse collapse\" id=\"navbarResponsive\" [ngbCollapse]=\"isNavbarCollapsed\">\n        <ul class=\"navbar-nav ml-auto\">\n            <ng-template *ngFor=\"let item of menuItems\" [ngTemplateOutlet]=\"item.subItems && item.subItems.length > 0 ? dropdown : nonDropdown\" [ngTemplateOutletContext]=\"{ item: item }\"></ng-template>\n        </ul>\n    </div>\n</nav>\n<ng-template #nonDropdown let-item=\"item\">\n    <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n        <ng-template [ngTemplateOutlet]=\"isUsedRouterLink(item.navigation) ? routerLink : nonRouterLink\" [ngTemplateOutletContext]=\"{ item: item, classname: 'nav-link' }\"></ng-template>\n    </li>\n</ng-template>\n<ng-template #dropdown let-item=\"item\">\n    <li ngbDropdown class=\"nav-item dropdown pointer\" display=\"dynamic\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n        <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle href=\"javascript:void(0);\" id=\"{{ item.id }}\">\n            <span>\n                <fa-layers [fixedWidth]=\"true\" *ngIf=\"item.icon && item.icon.length > 0\">\n                    <fa-icon [icon]=\"item.icon\"></fa-icon>\n                </fa-layers>\n                <span>{{ !item.name.translateKey ? item.name.label : (item.name.translateKey | translate) }}</span>\n            </span>\n        </a>\n        <ul class=\"dropdown-menu\" ngbDropdownMenu [attr.aria-labelledby]=\"item.id\" *ngIf=\"item.subItems && item.subItems.length > 0\">\n            <li *ngFor=\"let subItem of item.subItems\">\n                <ng-template [ngTemplateOutlet]=\"isUsedRouterLink(subItem.navigation) ? routerLink : nonRouterLink\" [ngTemplateOutletContext]=\"{ item: subItem, classname: 'dropdown-item' }\"></ng-template>\n            </li>\n        </ul>\n    </li>\n</ng-template>\n<ng-template #nonRouterLink let-item=\"item\" let-classname=\"classname\">\n    <a [ngClass]=\"classname\" (click)=\"doAction(item.navigation)\">\n        <span>\n            <fa-layers [fixedWidth]=\"true\" *ngIf=\"item.icon && item.icon.length > 0\">\n                <fa-icon [icon]=\"item.icon\"></fa-icon>\n            </fa-layers>\n            <span>{{ !item.name.translateKey ? item.name.label : (item.name.translateKey | translate) }}</span>\n        </span>\n    </a>\n</ng-template>\n<ng-template #routerLink let-item=\"item\" let-classname=\"classname\">\n    <a [ngClass]=\"classname\" routerLinkActive=\"active\" [routerLink]=\"item.navigation.routerLink\" [queryParams]=\"item.navigation.queryParams\" [fragment]=\"item.navigation.fragment\" (click)=\"collapseNavbar()\">\n        <span>\n            <fa-layers [fixedWidth]=\"true\" *ngIf=\"item.icon && item.icon.length > 0\">\n                <fa-icon [icon]=\"item.icon\"></fa-icon>\n            </fa-layers>\n            <span>{{ !item.name.translateKey ? item.name.label : (item.name.translateKey | translate) }}</span>\n        </span>\n    </a>\n</ng-template>\n"
            })
        ], CksNavbarComponent);
        return CksNavbarComponent;
    }());

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
    var CksProfileInfo = /** @class */ (function () {
        function CksProfileInfo() {
        }
        return CksProfileInfo;
    }());

    var CksModuleConfig = /** @class */ (function () {
        function CksModuleConfig() {
            this.serverApiUrl = '/';
            this.i18nEnabled = false;
            this.defaultI18nLang = 'ko';
            this.noi18nMessage = 'translation-not-found';
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
        CksConfigService.ctorParameters = function () { return [
            { type: CksModuleConfig }
        ]; };
        CksConfigService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function CksConfigService_Factory() { return new CksConfigService(core.ɵɵinject(CksModuleConfig)); }, token: CksConfigService, providedIn: "root" });
        CksConfigService = __decorate([
            core.Injectable({
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
        CksProfileService.ctorParameters = function () { return [
            { type: CksConfigService },
            { type: http.HttpClient }
        ]; };
        CksProfileService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function CksProfileService_Factory() { return new CksProfileService(core.ɵɵinject(CksConfigService), core.ɵɵinject(http.HttpClient)); }, token: CksProfileService, providedIn: "root" });
        CksProfileService = __decorate([
            core.Injectable({ providedIn: 'root' })
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
            core.Component({
                selector: 'cks-page-ribbon',
                template: "\n    <div class=\"ribbon\" *ngIf=\"ribbonEnv\">\n      <a href=\"\">{{ 'global.ribbon.' + ribbonEnv | translate }}</a>\n    </div>\n  "
            })
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
            core.Injectable({ providedIn: 'root' })
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
            core.HostBinding('class.cks-sidebar')
        ], CksSidebarComponent.prototype, "_header", void 0);
        __decorate([
            core.Input()
        ], CksSidebarComponent.prototype, "headerTemplate", void 0);
        __decorate([
            core.Input()
        ], CksSidebarComponent.prototype, "contentTemplate", void 0);
        __decorate([
            core.Input()
        ], CksSidebarComponent.prototype, "footerTemplate", void 0);
        __decorate([
            core.Input()
        ], CksSidebarComponent.prototype, "menuItems", void 0);
        CksSidebarComponent = __decorate([
            core.Component({
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
            this.classNameForBody = 'cks-body';
        }
        CksTopbarComponent.prototype.ngOnInit = function () {
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
        };
        CksTopbarComponent.prototype.ngOnDestroy = function () {
            if (this.fixed) {
                this.renderer.removeClass(this.document.body, this.classNameForBody);
            }
        };
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
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: core.Renderer2 },
            { type: CksRouteService }
        ]; };
        __decorate([
            core.Input()
        ], CksTopbarComponent.prototype, "fixed", void 0);
        __decorate([
            core.Input()
        ], CksTopbarComponent.prototype, "withSidebar", void 0);
        __decorate([
            core.Input()
        ], CksTopbarComponent.prototype, "textItems", void 0);
        __decorate([
            core.Input()
        ], CksTopbarComponent.prototype, "iconItems", void 0);
        __decorate([
            core.Input()
        ], CksTopbarComponent.prototype, "userImgUrl", void 0);
        __decorate([
            core.Input()
        ], CksTopbarComponent.prototype, "withSubheader", void 0);
        __decorate([
            core.Input()
        ], CksTopbarComponent.prototype, "breadcrumbItems", void 0);
        __decorate([
            core.HostBinding('class.cks-topbar')
        ], CksTopbarComponent.prototype, "_header", void 0);
        __decorate([
            core.HostBinding('class.fixed-top')
        ], CksTopbarComponent.prototype, "_fixedTop", void 0);
        __decorate([
            core.HostBinding('class.position-fixed')
        ], CksTopbarComponent.prototype, "_positionFixed", void 0);
        __decorate([
            core.HostBinding('class.cks-topbar-with-sidebar')
        ], CksTopbarComponent.prototype, "_withSidebar", void 0);
        __decorate([
            core.HostBinding('class.cks-topbar-with-subheader')
        ], CksTopbarComponent.prototype, "_withSubHeader", void 0);
        CksTopbarComponent = __decorate([
            core.Component({
                selector: 'cks-topbar',
                template: "<div class=\"d-flex\" [ngSwitch]=\"withSidebar\">\n    <button  class=\"navbar-toggler d-lg-none mr-auto\" type=\"button\" *ngSwitchCase=\"true\">\n        <fa-icon icon=\"bars\"></fa-icon>\n    </button>\n    <a class=\"cks-topbar-brand\">\n        <span class=\"cks-topbar-logo-img\"></span>\n        <span class=\"cks-topbar-brand-text\">Gooroom</span>\n        <span class=\"cks-topbar-version\">vUNKNOWN</span>\n    </a>\n    <button class=\"navbar-toggler d-none d-lg-block ml-3\" type=\"button\" *ngSwitchCase=\"true\">\n        <fa-icon icon=\"bars\"></fa-icon>\n    </button>\n</div>\n<ul class=\"nav navbar-nav d-none d-lg-flex\">\n    <li class=\"nav-item px-2\" *ngFor=\"let tItem of textItems\">\n        <a class=\"nav-link\" (click)=\"doAction(tItem.navigation)\">\n            {{ !tItem.name.translateKey ? tItem.name.label : (tItem.name.translateKey | translate) }}\n        </a>\n    </li>\n</ul>\n<ul class=\"nav navbar-nav ml-auto\">\n    <li class=\"nav-item\" *ngFor=\"let iItem of iconItems\">\n        <a class=\"nav-link\" (click)=\"doAction(iItem.navigation)\" placement=\"bottom\" ngbTooltip=\"{{ iItem.tooltip ? (!iItem.tooltip.translateKey ? iItem.tooltip.label : (iItem.tooltip.translateKey | translate)) : undefined }}\">\n            <fa-icon [icon]=\"iItem.icon\" class=\"cks-icon\"></fa-icon>\n        </a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link py-0 px-2\">\n            <fa-icon icon=\"user-circle\" class=\"profile-icon\" *ngIf=\"!userImgUrl\"></fa-icon>\n            <img [src]=\"userImgUrl\" class=\"profile-image rounded-circle\" alt=\"Avatar\" *ngIf=\"userImgUrl\">\n        </a>\n    </li>\n    <li class=\"nav-item pr-1\">\n        <button class=\"nav-button\" type=\"button\">\n            <fa-icon icon=\"ellipsis-h\"></fa-icon>\n        </button>\n    </li>\n</ul>\n<div class=\"cks-subheader justify-content-between px-3\" *ngIf=\"withSubheader\">\n    <ol class=\"breadcrumb border-0 m-0 px-0 px-md-3 bg-transparent\">\n        <li class=\"breadcrumb-item\" [ngClass]=\"{'active': isLast}\" *ngFor=\"let bItem of breadcrumbItems; last as isLast\">\n            <a (click)=\"doAction(bItem.navigation)\">{{ !bItem.name.translateKey ? bItem.name.label : (bItem.name.translateKey | translate) }}</a>\n        </li>\n    </ol>\n</div>\n"
            }),
            __param(0, core.Inject(common.DOCUMENT))
        ], CksTopbarComponent);
        return CksTopbarComponent;
    }());

    var CksMainWithHeadComponent = /** @class */ (function () {
        function CksMainWithHeadComponent() {
        }
        CksMainWithHeadComponent = __decorate([
            core.Component({
                selector: 'cks-main-with-head',
                template: "<router-outlet name=\"topbar\"></router-outlet>\n<div class=\"cks-main-with-head\">\n    <router-outlet></router-outlet>\n</div>\n"
            })
        ], CksMainWithHeadComponent);
        return CksMainWithHeadComponent;
    }());

    var CksMainWithSideAndHeadComponent = /** @class */ (function () {
        function CksMainWithSideAndHeadComponent() {
        }
        CksMainWithSideAndHeadComponent = __decorate([
            core.Component({
                selector: 'cks-main-with-side-and-head',
                template: "<router-outlet name=\"sidebar\"></router-outlet>\n<div class=\"cks-main-with-side\">\n    <router-outlet name=\"topbar\"></router-outlet>\n    <div class=\"cks-main-with-head\">\n        <router-outlet></router-outlet>\n    </div>\n</div>\n"
            })
        ], CksMainWithSideAndHeadComponent);
        return CksMainWithSideAndHeadComponent;
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
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: core$1.TranslateService }
        ]; };
        __decorate([
            core.Input()
        ], CksActiveLanguageDirective.prototype, "cksActiveLanguage", void 0);
        CksActiveLanguageDirective = __decorate([
            core.Directive({
                selector: '[cksActiveLanguage]'
            })
        ], CksActiveLanguageDirective);
        return CksActiveLanguageDirective;
    }());

    /**
     * A wrapper directive on top of the translate pipe as the inbuilt translate directive from ngx-translate is too verbose and buggy
     */
    var CksTranslateDirective = /** @class */ (function () {
        function CksTranslateDirective(configService, el, translateService) {
            this.configService = configService;
            this.el = el;
            this.translateService = translateService;
            this.directiveDestroyed = new rxjs.Subject();
        }
        CksTranslateDirective.prototype.ngOnInit = function () {
            var _this = this;
            var enabled = this.configService.getConfig().i18nEnabled;
            if (enabled) {
                this.translateService.onLangChange.pipe(operators.takeUntil(this.directiveDestroyed)).subscribe(function () {
                    _this.getTranslation();
                });
            }
        };
        CksTranslateDirective.prototype.ngOnChanges = function () {
            var enabled = this.configService.getConfig().i18nEnabled;
            if (enabled) {
                this.getTranslation();
            }
        };
        CksTranslateDirective.prototype.ngOnDestroy = function () {
            this.directiveDestroyed.next();
            this.directiveDestroyed.complete();
        };
        CksTranslateDirective.prototype.getTranslation = function () {
            var _this = this;
            this.translateService
                .get(this.cksTranslate, this.translateValues)
                .pipe(operators.takeUntil(this.directiveDestroyed))
                .subscribe(function (value) {
                _this.el.nativeElement.innerHTML = value;
            }, function () {
                return _this.configService.getConfig().noi18nMessage + "[" + _this.cksTranslate + "]";
            });
        };
        CksTranslateDirective.ctorParameters = function () { return [
            { type: CksConfigService },
            { type: core.ElementRef },
            { type: core$1.TranslateService, decorators: [{ type: core.Optional }] }
        ]; };
        __decorate([
            core.Input()
        ], CksTranslateDirective.prototype, "cksTranslate", void 0);
        __decorate([
            core.Input()
        ], CksTranslateDirective.prototype, "translateValues", void 0);
        CksTranslateDirective = __decorate([
            core.Directive({
                selector: '[cksTranslate]'
            }),
            __param(2, core.Optional())
        ], CksTranslateDirective);
        return CksTranslateDirective;
    }());

    var CKS_COMPONENTS = [CksDynamicComponent, CksNavbarComponent, CksPageRibbonComponent, CksSidebarComponent, CksTopbarComponent];
    var CKS_DIRECTIVES = [CksActiveLanguageDirective, CksTranslateDirective];
    var CKS_LAYOUTS = [CksMainWithHeadComponent, CksMainWithSideAndHeadComponent];

    var CksMissingTranslationHandler = /** @class */ (function () {
        function CksMissingTranslationHandler(configService) {
            this.configService = configService;
        }
        CksMissingTranslationHandler.prototype.handle = function (params) {
            var key = params.key;
            return this.configService.getConfig().noi18nMessage + "[" + key + "]";
        };
        return CksMissingTranslationHandler;
    }());

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
            core.NgModule({
                imports: [common.CommonModule, angularFontawesome.FontAwesomeModule, ngBootstrap.NgbModule, router.RouterModule, core$1.TranslateModule],
                declarations: __spread(CKS_COMPONENTS, CKS_DIRECTIVES, CKS_LAYOUTS),
                entryComponents: [CksDynamicComponent, CksMainWithHeadComponent, CksMainWithSideAndHeadComponent],
                exports: __spread(CKS_COMPONENTS, CKS_DIRECTIVES, CKS_LAYOUTS, [core$1.TranslateModule])
            })
        ], NgChakansModule);
        return NgChakansModule;
    }());
    function translatePartialLoader(http) {
        return new httpLoader.TranslateHttpLoader(http, 'i18n/', ".json?buildTimestamp=" + process.env.BUILD_TIMESTAMP);
    }
    function missingTranslationHandler(configService) {
        return new CksMissingTranslationHandler(configService);
    }

    var CksLanguageService = /** @class */ (function () {
        function CksLanguageService(translateService, configService) {
            this.translateService = translateService;
            this.configService = configService;
            this.currentLang = 'ko';
        }
        CksLanguageService.prototype.init = function () {
            var config = this.configService.getConfig();
            this.currentLang = config.defaultI18nLang;
            this.translateService.setDefaultLang(this.currentLang);
            this.translateService.use(this.currentLang);
        };
        CksLanguageService.prototype.changeLanguage = function (languageKey) {
            this.currentLang = languageKey;
            this.configService.CONFIG_OPTIONS.defaultI18nLang = languageKey;
            this.translateService.use(this.currentLang);
        };
        CksLanguageService.prototype.getCurrentLanguage = function () {
            return this.currentLang;
        };
        CksLanguageService.ctorParameters = function () { return [
            { type: core$1.TranslateService },
            { type: CksConfigService }
        ]; };
        CksLanguageService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function CksLanguageService_Factory() { return new CksLanguageService(core.ɵɵinject(core$1.TranslateService), core.ɵɵinject(CksConfigService)); }, token: CksLanguageService, providedIn: "root" });
        CksLanguageService = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], CksLanguageService);
        return CksLanguageService;
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
    exports.CksDynamicComponent = CksDynamicComponent;
    exports.CksLanguageService = CksLanguageService;
    exports.CksMainWithHeadComponent = CksMainWithHeadComponent;
    exports.CksMainWithSideAndHeadComponent = CksMainWithSideAndHeadComponent;
    exports.CksModuleConfig = CksModuleConfig;
    exports.CksNavbarComponent = CksNavbarComponent;
    exports.CksNavbarService = CksNavbarService;
    exports.CksPageRibbonComponent = CksPageRibbonComponent;
    exports.CksProfileInfo = CksProfileInfo;
    exports.CksProfileService = CksProfileService;
    exports.CksRouteService = CksRouteService;
    exports.CksSidebarComponent = CksSidebarComponent;
    exports.CksSidebarService = CksSidebarService;
    exports.CksSubscriptionManager = CksSubscriptionManager;
    exports.CksTopbarComponent = CksTopbarComponent;
    exports.NgChakansModule = NgChakansModule;
    exports.missingTranslationHandler = missingTranslationHandler;
    exports.translatePartialLoader = translatePartialLoader;
    exports.ɵa = CksMissingTranslationHandler;
    exports.ɵb = CKS_COMPONENTS;
    exports.ɵc = CKS_DIRECTIVES;
    exports.ɵd = CKS_LAYOUTS;
    exports.ɵe = CksActiveLanguageDirective;
    exports.ɵf = CksTranslateDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-chakans.umd.js.map

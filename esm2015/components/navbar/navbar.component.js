import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { CksNavbarService } from './navbar.service';
import { CksRouteService } from '../../services/route.service';
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
tslib_1.__decorate([
    Input()
], CksNavbarComponent.prototype, "brand", void 0);
tslib_1.__decorate([
    Input()
], CksNavbarComponent.prototype, "menuItems", void 0);
CksNavbarComponent = tslib_1.__decorate([
    Component({
        selector: 'cks-navbar',
        template: "<nav class=\"navbar navbar-dark navbar-expand-md bg-dark\" *ngIf=\"isNavbarViewed | async\">\n    <a class=\"navbar-brand logo\" (click)=\"doAction({routerLink: ['/']})\" *ngIf=\"brand && brand.title\">\n        <span class=\"logo-img\"></span>\n        <span class=\"navbar-title\">{{ !brand.title.translateKey ? brand.title.label : (brand.title.translateKey | translate) }}</span>\n        <span class=\"navbar-version\" *ngIf=\"brand.version\">{{ brand.version }}</span>\n    </a>\n    <a class=\"navbar-toggler d-lg-none\" href=\"javascript:void(0);\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"toggleNavbar()\">\n        <fa-icon icon=\"bars\"></fa-icon>\n    </a>\n    <div class=\"navbar-collapse collapse\" id=\"navbarResponsive\" [ngbCollapse]=\"isNavbarCollapsed\">\n        <ul class=\"navbar-nav ml-auto\">\n            <ng-template *ngFor=\"let item of menuItems\" [ngTemplateOutlet]=\"item.subItems && item.subItems.length > 0 ? dropdown : nonDropdown\" [ngTemplateOutletContext]=\"{ item: item }\"></ng-template>\n        </ul>\n    </div>\n</nav>\n<ng-template #nonDropdown let-item=\"item\">\n    <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n        <ng-template [ngTemplateOutlet]=\"isUsedRouterLink(item.navigation) ? routerLink : nonRouterLink\" [ngTemplateOutletContext]=\"{ item: item, classname: 'nav-link' }\"></ng-template>\n    </li>\n</ng-template>\n<ng-template #dropdown let-item=\"item\">\n    <li ngbDropdown class=\"nav-item dropdown pointer\" display=\"dynamic\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n        <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle href=\"javascript:void(0);\" id=\"{{ item.id }}\">\n            <span>\n                <fa-layers [fixedWidth]=\"true\" *ngIf=\"item.icon && item.icon.length > 0\">\n                    <fa-icon [icon]=\"item.icon\"></fa-icon>\n                </fa-layers>\n                <span>{{ !item.name.translateKey ? item.name.label : (item.name.translateKey | translate) }}</span>\n            </span>\n        </a>\n        <ul class=\"dropdown-menu\" ngbDropdownMenu [attr.aria-labelledby]=\"item.id\" *ngIf=\"item.subItems && item.subItems.length > 0\">\n            <li *ngFor=\"let subItem of item.subItems\">\n                <ng-template [ngTemplateOutlet]=\"isUsedRouterLink(subItem.navigation) ? routerLink : nonRouterLink\" [ngTemplateOutletContext]=\"{ item: subItem, classname: 'dropdown-item' }\"></ng-template>\n            </li>\n        </ul>\n    </li>\n</ng-template>\n<ng-template #nonRouterLink let-item=\"item\" let-classname=\"classname\">\n    <a [ngClass]=\"classname\" (click)=\"doAction(item.navigation)\">\n        <span>\n            <fa-layers [fixedWidth]=\"true\" *ngIf=\"item.icon && item.icon.length > 0\">\n                <fa-icon [icon]=\"item.icon\"></fa-icon>\n            </fa-layers>\n            <span>{{ !item.name.translateKey ? item.name.label : (item.name.translateKey | translate) }}</span>\n        </span>\n    </a>\n</ng-template>\n<ng-template #routerLink let-item=\"item\" let-classname=\"classname\">\n    <a [ngClass]=\"classname\" routerLinkActive=\"active\" [routerLink]=\"item.navigation.routerLink\" [queryParams]=\"item.navigation.queryParams\" [fragment]=\"item.navigation.fragment\" (click)=\"collapseNavbar()\">\n        <span>\n            <fa-layers [fixedWidth]=\"true\" *ngIf=\"item.icon && item.icon.length > 0\">\n                <fa-icon [icon]=\"item.icon\"></fa-icon>\n            </fa-layers>\n            <span>{{ !item.name.translateKey ? item.name.label : (item.name.translateKey | translate) }}</span>\n        </span>\n    </a>\n</ng-template>\n"
    })
], CksNavbarComponent);
export { CksNavbarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWNoYWthbnMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFNL0QsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7SUFNN0IsWUFBb0IsYUFBK0IsRUFBVSxZQUE2QjtRQUF0RSxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBaUI7UUFDeEYsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDO0lBQzFELENBQUM7SUFFRCxRQUFRLENBQUMsVUFBZTtRQUN0QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxVQUFVLEVBQUU7WUFDZCxJQUFJLE9BQU8sVUFBVSxLQUFLLFVBQVUsRUFBRTtnQkFDcEMsVUFBVSxFQUFFLENBQUM7YUFDZDtpQkFBTTtnQkFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUN4QztTQUNGO0lBQ0gsQ0FBQztJQUVELGNBQWM7UUFDWixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ25ELENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxVQUFlO1FBQzlCLElBQUksQ0FBQyxVQUFVLElBQUksT0FBTyxVQUFVLEtBQUssVUFBVSxJQUFJLE9BQU8sVUFBVSxLQUFLLFFBQVEsRUFBRTtZQUNyRixPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0NBQ0YsQ0FBQTs7WUE5Qm9DLGdCQUFnQjtZQUF3QixlQUFlOztBQUxqRjtJQUFSLEtBQUssRUFBRTtpREFBWTtBQUNYO0lBQVIsS0FBSyxFQUFFO3FEQUFrQjtBQUZmLGtCQUFrQjtJQUo5QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsWUFBWTtRQUN0Qix1dkhBQXNDO0tBQ3ZDLENBQUM7R0FDVyxrQkFBa0IsQ0FvQzlCO1NBcENZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENrc05hdmJhclNlcnZpY2UgfSBmcm9tICcuL25hdmJhci5zZXJ2aWNlJztcbmltcG9ydCB7IENrc1JvdXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3JvdXRlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdja3MtbmF2YmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25hdmJhci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQ2tzTmF2YmFyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgYnJhbmQ6IGFueTtcbiAgQElucHV0KCkgbWVudUl0ZW1zOiBhbnlbXTtcbiAgaXNOYXZiYXJWaWV3ZWQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIGlzTmF2YmFyQ29sbGFwc2VkOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmF2YmFyU2VydmljZTogQ2tzTmF2YmFyU2VydmljZSwgcHJpdmF0ZSByb3V0ZVNlcnZpY2U6IENrc1JvdXRlU2VydmljZSkge1xuICAgIHRoaXMuaXNOYXZiYXJDb2xsYXBzZWQgPSB0cnVlO1xuICAgIHRoaXMuaXNOYXZiYXJWaWV3ZWQgPSB0aGlzLm5hdmJhclNlcnZpY2UuaXNOYXZiYXJWaWV3ZWQ7XG4gIH1cblxuICBkb0FjdGlvbihuYXZpZ2F0aW9uOiBhbnkpIHtcbiAgICB0aGlzLmNvbGxhcHNlTmF2YmFyKCk7XG4gICAgaWYgKG5hdmlnYXRpb24pIHtcbiAgICAgIGlmICh0eXBlb2YgbmF2aWdhdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBuYXZpZ2F0aW9uKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJvdXRlU2VydmljZS5uYXZpZ2F0ZShuYXZpZ2F0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb2xsYXBzZU5hdmJhcigpIHtcbiAgICB0aGlzLmlzTmF2YmFyQ29sbGFwc2VkID0gdHJ1ZTtcbiAgfVxuXG4gIHRvZ2dsZU5hdmJhcigpIHtcbiAgICB0aGlzLmlzTmF2YmFyQ29sbGFwc2VkID0gIXRoaXMuaXNOYXZiYXJDb2xsYXBzZWQ7XG4gIH1cblxuICBpc1VzZWRSb3V0ZXJMaW5rKG5hdmlnYXRpb246IGFueSkge1xuICAgIGlmICghbmF2aWdhdGlvbiB8fCB0eXBlb2YgbmF2aWdhdGlvbiA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgbmF2aWdhdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiJdfQ==
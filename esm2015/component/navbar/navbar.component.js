import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { CksNavbarService } from '../../service/navbar.service';
let CksNavbarComponent = class CksNavbarComponent {
    constructor(navbarService) {
        this.navbarService = navbarService;
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
                window.location.href = navigation;
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
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], CksNavbarComponent.prototype, "brand", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array)
], CksNavbarComponent.prototype, "menuItems", void 0);
CksNavbarComponent = tslib_1.__decorate([
    Component({
        selector: 'cks-navbar',
        template: "<nav class=\"navbar navbar-dark navbar-expand-md bg-dark\" *ngIf=\"isNavbarViewed | async\">\n    <a class=\"navbar-brand logo\" (click)=\"doAction({routerLink: ['/']})\" *ngIf=\"brand && brand.title\">\n        <span class=\"logo-img\"></span>\n        <span class=\"navbar-title\">{{ !brand.title.translateKey ? brand.title.label : (brand.title.translateKey | translate) }}</span>\n        <span class=\"navbar-version\" *ngIf=\"brand.version\">{{ brand.version }}</span>\n    </a>\n    <a class=\"navbar-toggler d-lg-none\" href=\"javascript:void(0);\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"toggleNavbar()\">\n        <fa-icon icon=\"bars\"></fa-icon>\n    </a>\n    <div class=\"navbar-collapse collapse\" id=\"navbarResponsive\" [ngbCollapse]=\"isNavbarCollapsed\">\n        <ul class=\"navbar-nav ml-auto\">\n            <ng-template *ngFor=\"let item of menuItems\" [ngTemplateOutlet]=\"item.subItems && item.subItems.length > 0 ? dropdown : nonDropdown\" [ngTemplateOutletContext]=\"{ item: item }\"></ng-template>\n        </ul>\n    </div>\n</nav>\n<ng-template #nonDropdown let-item=\"item\">\n    <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n        <ng-template [ngTemplateOutlet]=\"isUsedRouterLink(item.navigation) ? routerLink : nonRouterLink\" [ngTemplateOutletContext]=\"{ item: item, classname: 'nav-link' }\"></ng-template>\n    </li>\n</ng-template>\n<ng-template #dropdown let-item=\"item\">\n    <li ngbDropdown class=\"nav-item dropdown pointer\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n        <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle href=\"javascript:void(0);\" id=\"{{ item.id }}\">\n            <span>\n                <fa-layers [fixedWidth]=\"true\" *ngIf=\"item.icon && item.icon.length > 0\">\n                    <fa-icon [icon]=\"item.icon\"></fa-icon>\n                </fa-layers>\n                <span>{{ !item.name.translateKey ? item.name.label : (item.name.translateKey | translate) }}</span>\n            </span>\n        </a>\n        <ul class=\"dropdown-menu\" ngbDropdownMenu [attr.aria-labelledby]=\"item.id\" *ngIf=\"item.subItems && item.subItems.length > 0\">\n            <li *ngFor=\"let subItem of item.subItems\">\n                <ng-template [ngTemplateOutlet]=\"isUsedRouterLink(subItem.navigation) ? routerLink : nonRouterLink\" [ngTemplateOutletContext]=\"{ item: subItem, classname: 'dropdown-item' }\"></ng-template>\n            </li>\n        </ul>\n    </li>\n</ng-template>\n<ng-template #nonRouterLink let-item=\"item\" let-classname=\"classname\">\n    <a [ngClass]=\"classname\" (click)=\"doAction(item.navigation)\">\n        <span>\n            <fa-layers [fixedWidth]=\"true\" *ngIf=\"item.icon && item.icon.length > 0\">\n                <fa-icon [icon]=\"item.icon\"></fa-icon>\n            </fa-layers>\n            <span>{{ !item.name.translateKey ? item.name.label : (item.name.translateKey | translate) }}</span>\n        </span>\n    </a>\n</ng-template>\n<ng-template #routerLink let-item=\"item\" let-classname=\"classname\">\n    <a [ngClass]=\"classname\" routerLinkActive=\"active\" [routerLink]=\"item.navigation.routerLink\" [queryParams]=\"item.navigation.queryParams\" [fragment]=\"item.navigation.fragment\" (click)=\"collapseNavbar()\">\n        <span>\n            <fa-layers [fixedWidth]=\"true\" *ngIf=\"item.icon && item.icon.length > 0\">\n                <fa-icon [icon]=\"item.icon\"></fa-icon>\n            </fa-layers>\n            <span>{{ !item.name.translateKey ? item.name.label : (item.name.translateKey | translate) }}</span>\n        </span>\n    </a>\n</ng-template>\n"
    }),
    tslib_1.__metadata("design:paramtypes", [CksNavbarService])
], CksNavbarComponent);
export { CksNavbarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWNoYWthbnMvIiwic291cmNlcyI6WyJjb21wb25lbnQvbmF2YmFyL25hdmJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBTWhFLElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0lBTTdCLFlBQW9CLGFBQStCO1FBQS9CLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUNqRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQzlCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUM7SUFDMUQsQ0FBQztJQUVELFFBQVEsQ0FBQyxVQUFlO1FBQ3RCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksT0FBTyxVQUFVLEtBQUssVUFBVSxFQUFFO2dCQUNwQyxVQUFVLEVBQUUsQ0FBQzthQUNkO2lCQUFNO2dCQUNMLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQzthQUNuQztTQUNGO0lBQ0gsQ0FBQztJQUVELGNBQWM7UUFDWixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ25ELENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxVQUFlO1FBQzlCLElBQUksQ0FBQyxVQUFVLElBQUksT0FBTyxVQUFVLEtBQUssVUFBVSxJQUFJLE9BQU8sVUFBVSxLQUFLLFFBQVEsRUFBRTtZQUNyRixPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0NBQ0YsQ0FBQTtBQW5DVTtJQUFSLEtBQUssRUFBRTs7aURBQVk7QUFDWDtJQUFSLEtBQUssRUFBRTs7cURBQWtCO0FBRmYsa0JBQWtCO0lBSjlCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxZQUFZO1FBQ3RCLG11SEFBc0M7S0FDdkMsQ0FBQzs2Q0FPbUMsZ0JBQWdCO0dBTnhDLGtCQUFrQixDQW9DOUI7U0FwQ1ksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2tzTmF2YmFyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2UvbmF2YmFyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdja3MtbmF2YmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25hdmJhci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQ2tzTmF2YmFyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgYnJhbmQ6IGFueTtcbiAgQElucHV0KCkgbWVudUl0ZW1zOiBhbnlbXTtcbiAgaXNOYXZiYXJWaWV3ZWQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIGlzTmF2YmFyQ29sbGFwc2VkOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmF2YmFyU2VydmljZTogQ2tzTmF2YmFyU2VydmljZSkge1xuICAgIHRoaXMuaXNOYXZiYXJDb2xsYXBzZWQgPSB0cnVlO1xuICAgIHRoaXMuaXNOYXZiYXJWaWV3ZWQgPSB0aGlzLm5hdmJhclNlcnZpY2UuaXNOYXZiYXJWaWV3ZWQ7XG4gIH1cblxuICBkb0FjdGlvbihuYXZpZ2F0aW9uOiBhbnkpIHtcbiAgICB0aGlzLmNvbGxhcHNlTmF2YmFyKCk7XG4gICAgaWYgKG5hdmlnYXRpb24pIHtcbiAgICAgIGlmICh0eXBlb2YgbmF2aWdhdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBuYXZpZ2F0aW9uKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IG5hdmlnYXRpb247XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29sbGFwc2VOYXZiYXIoKSB7XG4gICAgdGhpcy5pc05hdmJhckNvbGxhcHNlZCA9IHRydWU7XG4gIH1cblxuICB0b2dnbGVOYXZiYXIoKSB7XG4gICAgdGhpcy5pc05hdmJhckNvbGxhcHNlZCA9ICF0aGlzLmlzTmF2YmFyQ29sbGFwc2VkO1xuICB9XG5cbiAgaXNVc2VkUm91dGVyTGluayhuYXZpZ2F0aW9uOiBhbnkpIHtcbiAgICBpZiAoIW5hdmlnYXRpb24gfHwgdHlwZW9mIG5hdmlnYXRpb24gPT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIG5hdmlnYXRpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iXX0=
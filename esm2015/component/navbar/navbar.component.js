import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { CksNavbarService } from '../../service/navbar.service';
import { CksRouteService } from '../../service/route.service';
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
        template: "<nav class=\"navbar navbar-dark navbar-expand-md bg-dark\" *ngIf=\"isNavbarViewed | async\">\n    <a class=\"navbar-brand logo\" (click)=\"doAction({routerLink: ['/']})\" *ngIf=\"brand && brand.title\">\n        <span class=\"logo-img\"></span>\n        <span class=\"navbar-title\">{{ !brand.title.translateKey ? brand.title.label : (brand.title.translateKey | translate) }}</span>\n        <span class=\"navbar-version\" *ngIf=\"brand.version\">{{ brand.version }}</span>\n    </a>\n    <a class=\"navbar-toggler d-lg-none\" href=\"javascript:void(0);\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"toggleNavbar()\">\n        <fa-icon icon=\"bars\"></fa-icon>\n    </a>\n    <div class=\"navbar-collapse collapse\" id=\"navbarResponsive\" [ngbCollapse]=\"isNavbarCollapsed\">\n        <ul class=\"navbar-nav ml-auto\">\n            <li *ngFor=\"let item of menuItems\" [ngTemplateOutlet]=\"item.subItems && item.subItems.length > 0 ? dropdown : nonDropdown\" [ngTemplateOutletContext]=\"{ item: item }\"></li>\n        </ul>\n    </div>\n</nav>\n<ng-template #nonDropdown let-item=\"item\">\n    <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a [ngTemplateOutlet]=\"isUsedRouterLink(item.navigation) ? routerLink : nonRouterLink\" [ngTemplateOutletContext]=\"{ item: item, classname: 'nav-link' }\"></a>\n    </li>\n</ng-template>\n<ng-template #dropdown let-item=\"item\">\n    <li ngbDropdown class=\"nav-item dropdown pointer\" routerLinkActive=\"active\">\n        <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle href=\"javascript:void(0);\" id=\"{{ item.id }}\">\n            <span>\n                <fa-layers [fixedWidth]=\"true\" *ngIf=\"item.icon && item.icon.length > 0\">\n                    <fa-icon [icon]=\"item.icon\"></fa-icon>\n                </fa-layers>\n                <span>{{ !item.name.translateKey ? item.name.label : (item.name.translateKey | translate) }}</span>\n            </span>\n        </a>\n        <ul class=\"dropdown-menu\" ngbDropdownMenu [attr.aria-labelledby]=\"item.id\" *ngIf=\"item.subItems && item.subItems.length > 0\">\n            <li *ngFor=\"let subItem of item.subItems\">\n                <a [ngTemplateOutlet]=\"isUsedRouterLink(subItem.navigation) ? routerLink : nonRouterLink\" [ngTemplateOutletContext]=\"{ item: subItem, classname: 'dropdown-item' }\"></a>\n            </li>\n        </ul>\n    </li>\n</ng-template>\n<ng-template #nonRouterLink let-item=\"item\" let-classname=\"classname\">\n    <a [ngClass]=\"classname\" (click)=\"doAction(item.navigation)\">\n        <span>\n            <fa-layers [fixedWidth]=\"true\" *ngIf=\"item.icon && item.icon.length > 0\">\n                <fa-icon [icon]=\"item.icon\"></fa-icon>\n            </fa-layers>\n            <span>{{ !item.name.translateKey ? item.name.label : (item.name.translateKey | translate) }}</span>\n        </span>\n    </a>\n</ng-template>\n<ng-template #routerLink let-item=\"item\" let-classname=\"classname\">\n    <a [ngClass]=\"classname\" [routerLink]=\"item.navigation.routerLink\" [queryParams]=\"item.navigation.queryParams\" [fragment]=\"item.navigation.fragment\" (click)=\"collapseNavbar()\">\n        <span>\n            <fa-layers [fixedWidth]=\"true\" *ngIf=\"item.icon && item.icon.length > 0\">\n                <fa-icon [icon]=\"item.icon\"></fa-icon>\n            </fa-layers>\n            <span>{{ !item.name.translateKey ? item.name.label : (item.name.translateKey | translate) }}</span>\n        </span>\n    </a>\n</ng-template>\n"
    }),
    tslib_1.__metadata("design:paramtypes", [CksNavbarService, CksRouteService])
], CksNavbarComponent);
export { CksNavbarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWNoYWthbnMvIiwic291cmNlcyI6WyJjb21wb25lbnQvbmF2YmFyL25hdmJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQU05RCxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFrQjtJQU03QixZQUFvQixhQUErQixFQUFVLFlBQTZCO1FBQXRFLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFpQjtRQUN4RixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQzlCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUM7SUFDMUQsQ0FBQztJQUVELFFBQVEsQ0FBQyxVQUFlO1FBQ3RCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksT0FBTyxVQUFVLEtBQUssVUFBVSxFQUFFO2dCQUNwQyxVQUFVLEVBQUUsQ0FBQzthQUNkO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ3hDO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsY0FBYztRQUNaLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7SUFDaEMsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDbkQsQ0FBQztJQUVELGdCQUFnQixDQUFDLFVBQWU7UUFDOUIsSUFBSSxDQUFDLFVBQVUsSUFBSSxPQUFPLFVBQVUsS0FBSyxVQUFVLElBQUksT0FBTyxVQUFVLEtBQUssUUFBUSxFQUFFO1lBQ3JGLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Q0FDRixDQUFBO0FBbkNVO0lBQVIsS0FBSyxFQUFFOztpREFBWTtBQUNYO0lBQVIsS0FBSyxFQUFFOztxREFBa0I7QUFGZixrQkFBa0I7SUFKOUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFlBQVk7UUFDdEIscWpIQUFzQztLQUN2QyxDQUFDOzZDQU9tQyxnQkFBZ0IsRUFBd0IsZUFBZTtHQU4vRSxrQkFBa0IsQ0FvQzlCO1NBcENZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENrc05hdmJhclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL25hdmJhci5zZXJ2aWNlJztcbmltcG9ydCB7IENrc1JvdXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2Uvcm91dGUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nrcy1uYXZiYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbmF2YmFyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBDa3NOYXZiYXJDb21wb25lbnQge1xuICBASW5wdXQoKSBicmFuZDogYW55O1xuICBASW5wdXQoKSBtZW51SXRlbXM6IGFueVtdO1xuICBpc05hdmJhclZpZXdlZDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgaXNOYXZiYXJDb2xsYXBzZWQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuYXZiYXJTZXJ2aWNlOiBDa3NOYXZiYXJTZXJ2aWNlLCBwcml2YXRlIHJvdXRlU2VydmljZTogQ2tzUm91dGVTZXJ2aWNlKSB7XG4gICAgdGhpcy5pc05hdmJhckNvbGxhcHNlZCA9IHRydWU7XG4gICAgdGhpcy5pc05hdmJhclZpZXdlZCA9IHRoaXMubmF2YmFyU2VydmljZS5pc05hdmJhclZpZXdlZDtcbiAgfVxuXG4gIGRvQWN0aW9uKG5hdmlnYXRpb246IGFueSkge1xuICAgIHRoaXMuY29sbGFwc2VOYXZiYXIoKTtcbiAgICBpZiAobmF2aWdhdGlvbikge1xuICAgICAgaWYgKHR5cGVvZiBuYXZpZ2F0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG5hdmlnYXRpb24oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucm91dGVTZXJ2aWNlLm5hdmlnYXRlKG5hdmlnYXRpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbGxhcHNlTmF2YmFyKCkge1xuICAgIHRoaXMuaXNOYXZiYXJDb2xsYXBzZWQgPSB0cnVlO1xuICB9XG5cbiAgdG9nZ2xlTmF2YmFyKCkge1xuICAgIHRoaXMuaXNOYXZiYXJDb2xsYXBzZWQgPSAhdGhpcy5pc05hdmJhckNvbGxhcHNlZDtcbiAgfVxuXG4gIGlzVXNlZFJvdXRlckxpbmsobmF2aWdhdGlvbjogYW55KSB7XG4gICAgaWYgKCFuYXZpZ2F0aW9uIHx8IHR5cGVvZiBuYXZpZ2F0aW9uID09PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBuYXZpZ2F0aW9uID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIl19
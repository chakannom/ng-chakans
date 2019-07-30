import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { CksNavbarService } from '../../service/navbar.service';
var CksNavbarComponent = /** @class */ (function () {
    function CksNavbarComponent(navbarService) {
        this.navbarService = navbarService;
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
                window.location.href = navigation;
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
    return CksNavbarComponent;
}());
export { CksNavbarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWNoYWthbnMvIiwic291cmNlcyI6WyJjb21wb25lbnQvbmF2YmFyL25hdmJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBTWhFO0lBTUUsNEJBQW9CLGFBQStCO1FBQS9CLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUNqRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQzlCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUM7SUFDMUQsQ0FBQztJQUVELHFDQUFRLEdBQVIsVUFBUyxVQUFlO1FBQ3RCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksT0FBTyxVQUFVLEtBQUssVUFBVSxFQUFFO2dCQUNwQyxVQUFVLEVBQUUsQ0FBQzthQUNkO2lCQUFNO2dCQUNMLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQzthQUNuQztTQUNGO0lBQ0gsQ0FBQztJQUVELDJDQUFjLEdBQWQ7UUFDRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFFRCx5Q0FBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ25ELENBQUM7SUFFRCw2Q0FBZ0IsR0FBaEIsVUFBaUIsVUFBZTtRQUM5QixJQUFJLENBQUMsVUFBVSxJQUFJLE9BQU8sVUFBVSxLQUFLLFVBQVUsSUFBSSxPQUFPLFVBQVUsS0FBSyxRQUFRLEVBQUU7WUFDckYsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQWxDUTtRQUFSLEtBQUssRUFBRTs7cURBQVk7SUFDWDtRQUFSLEtBQUssRUFBRTs7eURBQWtCO0lBRmYsa0JBQWtCO1FBSjlCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxZQUFZO1lBQ3RCLG11SEFBc0M7U0FDdkMsQ0FBQztpREFPbUMsZ0JBQWdCO09BTnhDLGtCQUFrQixDQW9DOUI7SUFBRCx5QkFBQztDQUFBLEFBcENELElBb0NDO1NBcENZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENrc05hdmJhclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL25hdmJhci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2tzLW5hdmJhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9uYXZiYXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIENrc05hdmJhckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGJyYW5kOiBhbnk7XG4gIEBJbnB1dCgpIG1lbnVJdGVtczogYW55W107XG4gIGlzTmF2YmFyVmlld2VkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBpc05hdmJhckNvbGxhcHNlZDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5hdmJhclNlcnZpY2U6IENrc05hdmJhclNlcnZpY2UpIHtcbiAgICB0aGlzLmlzTmF2YmFyQ29sbGFwc2VkID0gdHJ1ZTtcbiAgICB0aGlzLmlzTmF2YmFyVmlld2VkID0gdGhpcy5uYXZiYXJTZXJ2aWNlLmlzTmF2YmFyVmlld2VkO1xuICB9XG5cbiAgZG9BY3Rpb24obmF2aWdhdGlvbjogYW55KSB7XG4gICAgdGhpcy5jb2xsYXBzZU5hdmJhcigpO1xuICAgIGlmIChuYXZpZ2F0aW9uKSB7XG4gICAgICBpZiAodHlwZW9mIG5hdmlnYXRpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgbmF2aWdhdGlvbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBuYXZpZ2F0aW9uO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbGxhcHNlTmF2YmFyKCkge1xuICAgIHRoaXMuaXNOYXZiYXJDb2xsYXBzZWQgPSB0cnVlO1xuICB9XG5cbiAgdG9nZ2xlTmF2YmFyKCkge1xuICAgIHRoaXMuaXNOYXZiYXJDb2xsYXBzZWQgPSAhdGhpcy5pc05hdmJhckNvbGxhcHNlZDtcbiAgfVxuXG4gIGlzVXNlZFJvdXRlckxpbmsobmF2aWdhdGlvbjogYW55KSB7XG4gICAgaWYgKCFuYXZpZ2F0aW9uIHx8IHR5cGVvZiBuYXZpZ2F0aW9uID09PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBuYXZpZ2F0aW9uID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIl19
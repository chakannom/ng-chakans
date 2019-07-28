import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { CksNavbarService, CksRouteService } from '../../service';
var CksNavbarComponent = /** @class */ (function () {
    function CksNavbarComponent(navbarService, routeService) {
        this.navbarService = navbarService;
        this.routeService = routeService;
        this.isNavbarCollapsed = true;
        this.isNavbarViewed = this.navbarService.isNavbarViewed;
    }
    CksNavbarComponent.prototype.ngOnInit = function () { };
    CksNavbarComponent.prototype.navigate = function (href) {
        if (href) {
            this.routeService.navigate(href);
        }
    };
    CksNavbarComponent.prototype.collapseNavbar = function () {
        this.isNavbarCollapsed = true;
    };
    CksNavbarComponent.prototype.toggleNavbar = function () {
        this.isNavbarCollapsed = !this.isNavbarCollapsed;
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
            template: "<nav class=\"navbar navbar-dark navbar-expand-md bg-dark\" *ngIf=\"isNavbarViewed | async\">\n    <a class=\"navbar-brand logo\" routerLink=\"/\" (click)=\"collapseNavbar()\" *ngIf=\"brand && brand.title\">\n        <span class=\"logo-img\"></span>\n        <span class=\"navbar-title\">{{ !brand.title.translateKey ? brand.title.label : (brand.title.translateKey | translate) }}</span>\n        <span class=\"navbar-version\" *ngIf=\"brand.version\">{{ brand.version }}</span>\n    </a>\n    <a class=\"navbar-toggler d-lg-none\" href=\"javascript:void(0);\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"toggleNavbar()\">\n        <fa-icon icon=\"bars\"></fa-icon>\n    </a>\n    <div class=\"navbar-collapse collapse\" id=\"navbarResponsive\" [ngbCollapse]=\"isNavbarCollapsed\">\n        <ul class=\"navbar-nav ml-auto\">\n            <li *ngFor=\"let item of menuItems\" [ngTemplateOutlet]=\"item.subItems && item.subItems.length > 0 ? dropdown : nonDropdown\" [ngTemplateOutletContext]=\"{ item: item }\"></li>\n        </ul>\n    </div>\n</nav>\n<ng-template #nonDropdown let-item=\"item\">\n    <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" (click)=\"navigate(item.href);collapseNavbar()\">\n            <span>\n                <fa-layers [fixedWidth]=\"true\" *ngIf=\"item.icon && item.icon.length > 0\">\n                    <fa-icon [icon]=\"item.icon\"></fa-icon>\n                </fa-layers>\n                <span>{{ !item.name.translateKey ? item.name.label : (item.name.translateKey | translate) }}</span>\n            </span>\n        </a>\n    </li>\n</ng-template>\n<ng-template #dropdown let-item=\"item\">\n    <li ngbDropdown class=\"nav-item dropdown pointer\" routerLinkActive=\"active\">\n        <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle href=\"javascript:void(0);\" id=\"{{ item.id }}\">\n            <span>\n                <fa-layers [fixedWidth]=\"true\" *ngIf=\"item.icon && item.icon.length > 0\">\n                    <fa-icon [icon]=\"item.icon\"></fa-icon>\n                </fa-layers>\n                <span>{{ !item.name.translateKey ? item.name.label : (item.name.translateKey | translate) }}</span>\n            </span>\n        </a>\n        <ul class=\"dropdown-menu\" ngbDropdownMenu [attr.aria-labelledby]=\"item.id\" *ngIf=\"item.subItems && item.subItems.length > 0\">\n            <li *ngFor=\"let subItem of item.subItems\">\n                <a class=\"dropdown-item\" (click)=\"navigate(subItem.href);collapseNavbar()\">\n                    <fa-layers [fixedWidth]=\"true\" *ngIf=\"subItem.icon && subItem.icon.length > 0\">\n                        <fa-icon [icon]=\"subItem.icon\"></fa-icon>\n                    </fa-layers>\n                    <span>{{ !subItem.name.translateKey ? subItem.name.label : (subItem.name.translateKey | translate) }}</span>\n                </a>\n            </li>\n        </ul>\n    </li>\n</ng-template>\n"
        }),
        tslib_1.__metadata("design:paramtypes", [CksNavbarService, CksRouteService])
    ], CksNavbarComponent);
    return CksNavbarComponent;
}());
export { CksNavbarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWNoYWthbnMvIiwic291cmNlcyI6WyJjb21wb25lbnQvbmF2YmFyL25hdmJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNbEU7SUFNRSw0QkFBb0IsYUFBK0IsRUFBVSxZQUE2QjtRQUF0RSxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBaUI7UUFDeEYsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDO0lBQzFELENBQUM7SUFFRCxxQ0FBUSxHQUFSLGNBQVksQ0FBQztJQUViLHFDQUFRLEdBQVIsVUFBUyxJQUFTO1FBQ2hCLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbEM7SUFDSCxDQUFDO0lBRUQsMkNBQWMsR0FBZDtRQUNFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7SUFDaEMsQ0FBQztJQUVELHlDQUFZLEdBQVo7UUFDRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDbkQsQ0FBQztJQXhCUTtRQUFSLEtBQUssRUFBRTs7cURBQVk7SUFDWDtRQUFSLEtBQUssRUFBRTs7eURBQWtCO0lBRmYsa0JBQWtCO1FBSjlCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxZQUFZO1lBQ3RCLCsvRkFBc0M7U0FDdkMsQ0FBQztpREFPbUMsZ0JBQWdCLEVBQXdCLGVBQWU7T0FOL0Usa0JBQWtCLENBMEI5QjtJQUFELHlCQUFDO0NBQUEsQUExQkQsSUEwQkM7U0ExQlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDa3NOYXZiYXJTZXJ2aWNlLCBDa3NSb3V0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2tzLW5hdmJhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9uYXZiYXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIENrc05hdmJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGJyYW5kOiBhbnk7XG4gIEBJbnB1dCgpIG1lbnVJdGVtczogYW55W107XG4gIGlzTmF2YmFyVmlld2VkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBpc05hdmJhckNvbGxhcHNlZDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5hdmJhclNlcnZpY2U6IENrc05hdmJhclNlcnZpY2UsIHByaXZhdGUgcm91dGVTZXJ2aWNlOiBDa3NSb3V0ZVNlcnZpY2UpIHtcbiAgICB0aGlzLmlzTmF2YmFyQ29sbGFwc2VkID0gdHJ1ZTtcbiAgICB0aGlzLmlzTmF2YmFyVmlld2VkID0gdGhpcy5uYXZiYXJTZXJ2aWNlLmlzTmF2YmFyVmlld2VkO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7fVxuXG4gIG5hdmlnYXRlKGhyZWY6IGFueSkge1xuICAgIGlmIChocmVmKSB7XG4gICAgICB0aGlzLnJvdXRlU2VydmljZS5uYXZpZ2F0ZShocmVmKTtcbiAgICB9XG4gIH1cblxuICBjb2xsYXBzZU5hdmJhcigpIHtcbiAgICB0aGlzLmlzTmF2YmFyQ29sbGFwc2VkID0gdHJ1ZTtcbiAgfVxuXG4gIHRvZ2dsZU5hdmJhcigpIHtcbiAgICB0aGlzLmlzTmF2YmFyQ29sbGFwc2VkID0gIXRoaXMuaXNOYXZiYXJDb2xsYXBzZWQ7XG4gIH1cbn1cbiJdfQ==
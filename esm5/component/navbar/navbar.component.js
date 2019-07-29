import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { CksNavbarService, CksRouteService } from '../../service';
var CksNavbarComponent = /** @class */ (function () {
    function CksNavbarComponent(navbarService, routeService) {
        this.navbarService = navbarService;
        this.routeService = routeService;
        this.homeHref = window['base-href'];
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
            template: "<nav class=\"navbar navbar-dark navbar-expand-md bg-dark\" *ngIf=\"isNavbarViewed | async\">\n    <a class=\"navbar-brand logo\" [href]=\"homeHref\" (click)=\"collapseNavbar()\" *ngIf=\"brand && brand.title\">\n        <span class=\"logo-img\"></span>\n        <span class=\"navbar-title\">{{ !brand.title.translateKey ? brand.title.label : (brand.title.translateKey | translate) }}</span>\n        <span class=\"navbar-version\" *ngIf=\"brand.version\">{{ brand.version }}</span>\n    </a>\n    <a class=\"navbar-toggler d-lg-none\" href=\"javascript:void(0);\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"toggleNavbar()\">\n        <fa-icon icon=\"bars\"></fa-icon>\n    </a>\n    <div class=\"navbar-collapse collapse\" id=\"navbarResponsive\" [ngbCollapse]=\"isNavbarCollapsed\">\n        <ul class=\"navbar-nav ml-auto\">\n            <li *ngFor=\"let item of menuItems\" [ngTemplateOutlet]=\"item.subItems && item.subItems.length > 0 ? dropdown : nonDropdown\" [ngTemplateOutletContext]=\"{ item: item }\"></li>\n        </ul>\n    </div>\n</nav>\n<ng-template #nonDropdown let-item=\"item\">\n    <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" (click)=\"doAction(item.naviation);\">\n            <span>\n                <fa-layers [fixedWidth]=\"true\" *ngIf=\"item.icon && item.icon.length > 0\">\n                    <fa-icon [icon]=\"item.icon\"></fa-icon>\n                </fa-layers>\n                <span>{{ !item.name.translateKey ? item.name.label : (item.name.translateKey | translate) }}</span>\n            </span>\n        </a>\n    </li>\n</ng-template>\n<ng-template #dropdown let-item=\"item\">\n    <li ngbDropdown class=\"nav-item dropdown pointer\" routerLinkActive=\"active\">\n        <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle href=\"javascript:void(0);\" id=\"{{ item.id }}\">\n            <span>\n                <fa-layers [fixedWidth]=\"true\" *ngIf=\"item.icon && item.icon.length > 0\">\n                    <fa-icon [icon]=\"item.icon\"></fa-icon>\n                </fa-layers>\n                <span>{{ !item.name.translateKey ? item.name.label : (item.name.translateKey | translate) }}</span>\n            </span>\n        </a>\n        <ul class=\"dropdown-menu\" ngbDropdownMenu [attr.aria-labelledby]=\"item.id\" *ngIf=\"item.subItems && item.subItems.length > 0\">\n            <li *ngFor=\"let subItem of item.subItems\">\n                <a class=\"dropdown-item\" (click)=\"doAction(subItem.naviation);\">\n                    <fa-layers [fixedWidth]=\"true\" *ngIf=\"subItem.icon && subItem.icon.length > 0\">\n                        <fa-icon [icon]=\"subItem.icon\"></fa-icon>\n                    </fa-layers>\n                    <span>{{ !subItem.name.translateKey ? subItem.name.label : (subItem.name.translateKey | translate) }}</span>\n                </a>\n            </li>\n        </ul>\n    </li>\n</ng-template>\n"
        }),
        tslib_1.__metadata("design:paramtypes", [CksNavbarService, CksRouteService])
    ], CksNavbarComponent);
    return CksNavbarComponent;
}());
export { CksNavbarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWNoYWthbnMvIiwic291cmNlcyI6WyJjb21wb25lbnQvbmF2YmFyL25hdmJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNbEU7SUFPRSw0QkFBb0IsYUFBK0IsRUFBVSxZQUE2QjtRQUF0RSxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBaUI7UUFDeEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDO0lBQzFELENBQUM7SUFFRCxxQ0FBUSxHQUFSLFVBQVMsVUFBZTtRQUN0QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxVQUFVLEVBQUU7WUFDZCxJQUFJLE9BQU8sVUFBVSxLQUFLLFVBQVUsRUFBRTtnQkFDcEMsVUFBVSxFQUFFLENBQUM7YUFDZDtpQkFBTTtnQkFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUN4QztTQUNGO0lBQ0gsQ0FBQztJQUVELDJDQUFjLEdBQWQ7UUFDRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFFRCx5Q0FBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ25ELENBQUM7SUE3QlE7UUFBUixLQUFLLEVBQUU7O3FEQUFZO0lBQ1g7UUFBUixLQUFLLEVBQUU7O3lEQUFrQjtJQUZmLGtCQUFrQjtRQUo5QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsWUFBWTtZQUN0Qiw0K0ZBQXNDO1NBQ3ZDLENBQUM7aURBUW1DLGdCQUFnQixFQUF3QixlQUFlO09BUC9FLGtCQUFrQixDQStCOUI7SUFBRCx5QkFBQztDQUFBLEFBL0JELElBK0JDO1NBL0JZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2tzTmF2YmFyU2VydmljZSwgQ2tzUm91dGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nrcy1uYXZiYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbmF2YmFyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBDa3NOYXZiYXJDb21wb25lbnQge1xuICBASW5wdXQoKSBicmFuZDogYW55O1xuICBASW5wdXQoKSBtZW51SXRlbXM6IGFueVtdO1xuICBob21lSHJlZjogc3RyaW5nO1xuICBpc05hdmJhclZpZXdlZDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgaXNOYXZiYXJDb2xsYXBzZWQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuYXZiYXJTZXJ2aWNlOiBDa3NOYXZiYXJTZXJ2aWNlLCBwcml2YXRlIHJvdXRlU2VydmljZTogQ2tzUm91dGVTZXJ2aWNlKSB7XG4gICAgdGhpcy5ob21lSHJlZiA9IHdpbmRvd1snYmFzZS1ocmVmJ107XG4gICAgdGhpcy5pc05hdmJhckNvbGxhcHNlZCA9IHRydWU7XG4gICAgdGhpcy5pc05hdmJhclZpZXdlZCA9IHRoaXMubmF2YmFyU2VydmljZS5pc05hdmJhclZpZXdlZDtcbiAgfVxuXG4gIGRvQWN0aW9uKG5hdmlnYXRpb246IGFueSkge1xuICAgIHRoaXMuY29sbGFwc2VOYXZiYXIoKTtcbiAgICBpZiAobmF2aWdhdGlvbikge1xuICAgICAgaWYgKHR5cGVvZiBuYXZpZ2F0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG5hdmlnYXRpb24oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucm91dGVTZXJ2aWNlLm5hdmlnYXRlKG5hdmlnYXRpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbGxhcHNlTmF2YmFyKCkge1xuICAgIHRoaXMuaXNOYXZiYXJDb2xsYXBzZWQgPSB0cnVlO1xuICB9XG5cbiAgdG9nZ2xlTmF2YmFyKCkge1xuICAgIHRoaXMuaXNOYXZiYXJDb2xsYXBzZWQgPSAhdGhpcy5pc05hdmJhckNvbGxhcHNlZDtcbiAgfVxufVxuIl19
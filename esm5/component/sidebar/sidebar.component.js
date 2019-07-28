import * as tslib_1 from "tslib";
import { Component, Input, TemplateRef } from '@angular/core';
import { CksSidebarService, CksRouteService } from '../../service';
var CksSidebarComponent = /** @class */ (function () {
    function CksSidebarComponent(sidebarService, routeService) {
        this.sidebarService = sidebarService;
        this.routeService = routeService;
        this.isSidebarViewed = this.sidebarService.isSidebarViewed;
    }
    CksSidebarComponent.prototype.navigate = function (href) {
        if (href) {
            this.routeService.navigate(href);
        }
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", TemplateRef)
    ], CksSidebarComponent.prototype, "headerTemplate", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", TemplateRef)
    ], CksSidebarComponent.prototype, "contentTemplate", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", TemplateRef)
    ], CksSidebarComponent.prototype, "footerTemplate", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], CksSidebarComponent.prototype, "menuItems", void 0);
    CksSidebarComponent = tslib_1.__decorate([
        Component({
            selector: 'cks-sidebar',
            template: "<div class=\"sidebar\" *ngIf=\"isSidebarViewed | async\">\n    <div class=\"sidebar-header\">\n        <ng-template [ngTemplateOutlet]=\"headerTemplate\"></ng-template>\n    </div>\n    <div class=\"sidebar-content\">\n        <ng-template [ngTemplateOutlet]=\"contentTemplate || sidebarContent\" [ngTemplateOutletContext]=\"{ items: menuItems }\"> </ng-template>\n    </div>\n    <div class=\"sidebar-footer\">\n        <ng-template [ngTemplateOutlet]=\"footerTemplate\"></ng-template>\n    </div>\n</div>\n<ng-template #sidebarContent let-items=\"items\">\n    <ul class=\"sidebar-menu\" *ngIf=\"items\">\n        <li *ngFor=\"let item of items\">\n            <a (click)=\"navigate(item.href)\">\n                <span>\n                    <fa-layers [fixedWidth]=\"true\" *ngIf=\"item.icon && item.icon.length > 0\">\n                        <fa-icon [icon]=\"item.icon\"></fa-icon>\n                    </fa-layers>\n                    <span>{{ !item.name.translateKey ? item.name.label : (item.name.translateKey | translate) }}</span>\n                </span>\n            </a>\n            <ul class=\"sidebar-sub-menu\" *ngIf=\"item.subItems && item.subItems.length > 0\">\n                <li *ngFor=\"let subItem of item.subItems\">\n                    <a (click)=\"navigate(subItem.href)\">\n                        <span>\n                            <fa-layers [fixedWidth]=\"true\" *ngIf=\"subItem.icon && subItem.icon.length > 0\">\n                                <fa-icon [icon]=\"subItem.icon\"></fa-icon>\n                            </fa-layers>\n                            <span>{{ !subItem.name.translateKey ? subItem.name.label : (subItem.name.translateKey | translate) }}</span>\n                        </span>\n                    </a>\n                    <a class=\"btn btn-secondary btn-sm\" (click)=\"navigate(subItem.ext.href)\" *ngIf=\"subItem.ext\">\n                        <fa-layers *ngIf=\"subItem.ext.icon && subItem.ext.icon.length > 0\">\n                            <fa-icon [icon]=\"subItem.ext.icon\"></fa-icon>\n                        </fa-layers>\n                    </a>\n                </li>\n            </ul>\n        </li>\n    </ul>\n</ng-template>\n"
        }),
        tslib_1.__metadata("design:paramtypes", [CksSidebarService, CksRouteService])
    ], CksSidebarComponent);
    return CksSidebarComponent;
}());
export { CksSidebarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1jaGFrYW5zLyIsInNvdXJjZXMiOlsiY29tcG9uZW50L3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTW5FO0lBT0UsNkJBQW9CLGNBQWlDLEVBQVUsWUFBNkI7UUFBeEUsbUJBQWMsR0FBZCxjQUFjLENBQW1CO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWlCO1FBQzFGLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUM7SUFDN0QsQ0FBQztJQUVELHNDQUFRLEdBQVIsVUFBUyxJQUFTO1FBQ2hCLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbEM7SUFDSCxDQUFDO0lBZFE7UUFBUixLQUFLLEVBQUU7MENBQWlCLFdBQVc7K0RBQU07SUFDakM7UUFBUixLQUFLLEVBQUU7MENBQWtCLFdBQVc7Z0VBQU07SUFDbEM7UUFBUixLQUFLLEVBQUU7MENBQWlCLFdBQVc7K0RBQU07SUFDakM7UUFBUixLQUFLLEVBQUU7OzBEQUFrQjtJQUpmLG1CQUFtQjtRQUovQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUN2Qiw0cUVBQXVDO1NBQ3hDLENBQUM7aURBUW9DLGlCQUFpQixFQUF3QixlQUFlO09BUGpGLG1CQUFtQixDQWdCL0I7SUFBRCwwQkFBQztDQUFBLEFBaEJELElBZ0JDO1NBaEJZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDa3NTaWRlYmFyU2VydmljZSwgQ2tzUm91dGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nrcy1zaWRlYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZGViYXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIENrc1NpZGViYXJDb21wb25lbnQge1xuICBASW5wdXQoKSBoZWFkZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQElucHV0KCkgY29udGVudFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoKSBmb290ZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQElucHV0KCkgbWVudUl0ZW1zOiBhbnlbXTtcbiAgaXNTaWRlYmFyVmlld2VkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2lkZWJhclNlcnZpY2U6IENrc1NpZGViYXJTZXJ2aWNlLCBwcml2YXRlIHJvdXRlU2VydmljZTogQ2tzUm91dGVTZXJ2aWNlKSB7XG4gICAgdGhpcy5pc1NpZGViYXJWaWV3ZWQgPSB0aGlzLnNpZGViYXJTZXJ2aWNlLmlzU2lkZWJhclZpZXdlZDtcbiAgfVxuXG4gIG5hdmlnYXRlKGhyZWY6IGFueSkge1xuICAgIGlmIChocmVmKSB7XG4gICAgICB0aGlzLnJvdXRlU2VydmljZS5uYXZpZ2F0ZShocmVmKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
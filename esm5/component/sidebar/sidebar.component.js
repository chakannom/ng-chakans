import * as tslib_1 from "tslib";
import { Component, Input, TemplateRef } from '@angular/core';
import { CksSidebarService } from '../../service/sidebar.service';
import { CksRouteService } from '../../service/route.service';
var CksSidebarComponent = /** @class */ (function () {
    function CksSidebarComponent(sidebarService, routeService) {
        this.sidebarService = sidebarService;
        this.routeService = routeService;
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
            template: "<div class=\"sidebar\" *ngIf=\"isSidebarViewed | async\">\n    <div class=\"sidebar-header\">\n        <ng-template [ngTemplateOutlet]=\"headerTemplate\"></ng-template>\n    </div>\n    <div class=\"sidebar-content\">\n        <ng-template [ngTemplateOutlet]=\"contentTemplate || sidebarContent\" [ngTemplateOutletContext]=\"{ items: menuItems }\"> </ng-template>\n    </div>\n    <div class=\"sidebar-footer\">\n        <ng-template [ngTemplateOutlet]=\"footerTemplate\"></ng-template>\n    </div>\n</div>\n<ng-template #sidebarContent let-items=\"items\">\n    <ul class=\"sidebar-menu\" *ngIf=\"items\">\n        <li *ngFor=\"let item of items\">\n            <ng-template [ngTemplateOutlet]=\"isUsedRouterLink(item.navigation) ? routerLink : nonRouterLink\" [ngTemplateOutletContext]=\"{ item: item }\"></ng-template>\n            <ul class=\"sidebar-sub-menu\" *ngIf=\"item.subItems && item.subItems.length > 0\">\n                <li *ngFor=\"let subItem of item.subItems\">\n                    <ng-template [ngTemplateOutlet]=\"isUsedRouterLink(subItem.navigation) ? routerLink : nonRouterLink\" [ngTemplateOutletContext]=\"{ item: subItem }\"></ng-template>\n                    <a class=\"btn btn-secondary btn-sm\" (click)=\"doAction(subItem.ext.navigation)\" *ngIf=\"subItem.ext\">\n                        <fa-layers *ngIf=\"subItem.ext.icon && subItem.ext.icon.length > 0\">\n                            <fa-icon [icon]=\"subItem.ext.icon\"></fa-icon>\n                        </fa-layers>\n                    </a>\n                </li>\n            </ul>\n        </li>\n    </ul>\n</ng-template>\n<ng-template #nonRouterLink let-item=\"item\">\n    <a (click)=\"doAction(item.navigation)\">\n        <span>\n            <fa-layers [fixedWidth]=\"true\" *ngIf=\"item.icon && item.icon.length > 0\">\n                <fa-icon [icon]=\"item.icon\"></fa-icon>\n            </fa-layers>\n            <span>{{ !item.name.translateKey ? item.name.label : (item.name.translateKey | translate) }}</span>\n        </span>\n    </a>\n</ng-template>\n<ng-template #routerLink let-item=\"item\">\n    <a [routerLink]=\"item.navigation.routerLink\" [queryParams]=\"item.navigation.queryParams\" [fragment]=\"item.navigation.fragment\">\n        <span>\n            <fa-layers [fixedWidth]=\"true\" *ngIf=\"item.icon && item.icon.length > 0\">\n                <fa-icon [icon]=\"item.icon\"></fa-icon>\n            </fa-layers>\n            <span>{{ !item.name.translateKey ? item.name.label : (item.name.translateKey | translate) }}</span>\n        </span>\n    </a>\n</ng-template>\n"
        }),
        tslib_1.__metadata("design:paramtypes", [CksSidebarService, CksRouteService])
    ], CksSidebarComponent);
    return CksSidebarComponent;
}());
export { CksSidebarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1jaGFrYW5zLyIsInNvdXJjZXMiOlsiY29tcG9uZW50L3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFNOUQ7SUFRRSw2QkFBb0IsY0FBaUMsRUFBVSxZQUE2QjtRQUF4RSxtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBaUI7UUFDMUYsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztRQUMvQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDO0lBQzdELENBQUM7SUFFRCxzQ0FBUSxHQUFSLFVBQVMsVUFBZTtRQUN0QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxVQUFVLEVBQUU7WUFDZCxJQUFJLE9BQU8sVUFBVSxLQUFLLFVBQVUsRUFBRTtnQkFDcEMsVUFBVSxFQUFFLENBQUM7YUFDZDtpQkFBTTtnQkFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUN4QztTQUNGO0lBQ0gsQ0FBQztJQUVELDZDQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO0lBQ2pDLENBQUM7SUFFRCwyQ0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ3JELENBQUM7SUFFRCw4Q0FBZ0IsR0FBaEIsVUFBaUIsVUFBZTtRQUM5QixJQUFJLENBQUMsVUFBVSxJQUFJLE9BQU8sVUFBVSxLQUFLLFVBQVUsSUFBSSxPQUFPLFVBQVUsS0FBSyxRQUFRLEVBQUU7WUFDckYsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQXBDUTtRQUFSLEtBQUssRUFBRTswQ0FBaUIsV0FBVzsrREFBTTtJQUNqQztRQUFSLEtBQUssRUFBRTswQ0FBa0IsV0FBVztnRUFBTTtJQUNsQztRQUFSLEtBQUssRUFBRTswQ0FBaUIsV0FBVzsrREFBTTtJQUNqQztRQUFSLEtBQUssRUFBRTs7MERBQWtCO0lBSmYsbUJBQW1CO1FBSi9CLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLHdpRkFBdUM7U0FDeEMsQ0FBQztpREFTb0MsaUJBQWlCLEVBQXdCLGVBQWU7T0FSakYsbUJBQW1CLENBc0MvQjtJQUFELDBCQUFDO0NBQUEsQUF0Q0QsSUFzQ0M7U0F0Q1ksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENrc1NpZGViYXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZS9zaWRlYmFyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2tzUm91dGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZS9yb3V0ZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2tzLXNpZGViYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vc2lkZWJhci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQ2tzU2lkZWJhckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGhlYWRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoKSBjb250ZW50VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBJbnB1dCgpIGZvb3RlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoKSBtZW51SXRlbXM6IGFueVtdO1xuICBpc1NpZGViYXJWaWV3ZWQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIGlzU2lkZWJhckNvbGxhcHNlZDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNpZGViYXJTZXJ2aWNlOiBDa3NTaWRlYmFyU2VydmljZSwgcHJpdmF0ZSByb3V0ZVNlcnZpY2U6IENrc1JvdXRlU2VydmljZSkge1xuICAgIHRoaXMuaXNTaWRlYmFyQ29sbGFwc2VkID0gdHJ1ZTtcbiAgICB0aGlzLmlzU2lkZWJhclZpZXdlZCA9IHRoaXMuc2lkZWJhclNlcnZpY2UuaXNTaWRlYmFyVmlld2VkO1xuICB9XG5cbiAgZG9BY3Rpb24obmF2aWdhdGlvbjogYW55KSB7XG4gICAgdGhpcy5jb2xsYXBzZVNpZGViYXIoKTtcbiAgICBpZiAobmF2aWdhdGlvbikge1xuICAgICAgaWYgKHR5cGVvZiBuYXZpZ2F0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG5hdmlnYXRpb24oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucm91dGVTZXJ2aWNlLm5hdmlnYXRlKG5hdmlnYXRpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbGxhcHNlU2lkZWJhcigpIHtcbiAgICB0aGlzLmlzU2lkZWJhckNvbGxhcHNlZCA9IHRydWU7XG4gIH1cblxuICB0b2dnbGVTaWRlYmFyKCkge1xuICAgIHRoaXMuaXNTaWRlYmFyQ29sbGFwc2VkID0gIXRoaXMuaXNTaWRlYmFyQ29sbGFwc2VkO1xuICB9XG5cbiAgaXNVc2VkUm91dGVyTGluayhuYXZpZ2F0aW9uOiBhbnkpIHtcbiAgICBpZiAoIW5hdmlnYXRpb24gfHwgdHlwZW9mIG5hdmlnYXRpb24gPT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIG5hdmlnYXRpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iXX0=
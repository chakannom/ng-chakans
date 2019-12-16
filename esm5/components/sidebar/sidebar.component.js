import * as tslib_1 from "tslib";
import { Component, Input, HostBinding } from '@angular/core';
import { CksSidebarService } from './sidebar.service';
import { CksRouteService } from '../../services/route.service';
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
    tslib_1.__decorate([
        HostBinding('class.cks-sidebar')
    ], CksSidebarComponent.prototype, "_header", void 0);
    tslib_1.__decorate([
        Input()
    ], CksSidebarComponent.prototype, "headerTemplate", void 0);
    tslib_1.__decorate([
        Input()
    ], CksSidebarComponent.prototype, "contentTemplate", void 0);
    tslib_1.__decorate([
        Input()
    ], CksSidebarComponent.prototype, "footerTemplate", void 0);
    tslib_1.__decorate([
        Input()
    ], CksSidebarComponent.prototype, "menuItems", void 0);
    CksSidebarComponent = tslib_1.__decorate([
        Component({
            selector: 'cks-sidebar',
            template: "<div class=\"cks-sidebar-brand\">\n    <span class=\"cks-sidebar-logo-img\"></span>\n    <span class=\"cks-sidebar-brand-text\">Gooroom</span>\n    <span class=\"cks-sidebar-version\">vUNKNOWN</span>\n</div>\n\n<!--\n<div class=\"sidebar\" *ngIf=\"isSidebarViewed | async\">\n    <div class=\"sidebar-header\">\n        <ng-template [ngTemplateOutlet]=\"headerTemplate\"></ng-template>\n    </div>\n    <div class=\"sidebar-content\">\n        <ng-template [ngTemplateOutlet]=\"contentTemplate || sidebarContent\" [ngTemplateOutletContext]=\"{ items: menuItems }\"> </ng-template>\n    </div>\n    <div class=\"sidebar-footer\">\n        <ng-template [ngTemplateOutlet]=\"footerTemplate\"></ng-template>\n    </div>\n</div>\n<ng-template #sidebarContent let-items=\"items\">\n    <ul class=\"sidebar-menu\" *ngIf=\"items\">\n        <li *ngFor=\"let item of items\">\n            <ng-template [ngTemplateOutlet]=\"isUsedRouterLink(item.navigation) ? routerLink : nonRouterLink\" [ngTemplateOutletContext]=\"{ item: item }\"></ng-template>\n            <ul class=\"sidebar-sub-menu\" *ngIf=\"item.subItems && item.subItems.length > 0\">\n                <li *ngFor=\"let subItem of item.subItems\">\n                    <ng-template [ngTemplateOutlet]=\"isUsedRouterLink(subItem.navigation) ? routerLink : nonRouterLink\" [ngTemplateOutletContext]=\"{ item: subItem }\"></ng-template>\n                    <a class=\"btn btn-secondary btn-sm\" (click)=\"doAction(subItem.ext.navigation)\" *ngIf=\"subItem.ext\">\n                        <fa-layers *ngIf=\"subItem.ext.icon && subItem.ext.icon.length > 0\">\n                            <fa-icon [icon]=\"subItem.ext.icon\"></fa-icon>\n                        </fa-layers>\n                    </a>\n                </li>\n            </ul>\n        </li>\n    </ul>\n</ng-template>\n<ng-template #nonRouterLink let-item=\"item\">\n    <a (click)=\"doAction(item.navigation)\">\n        <span>\n            <fa-layers [fixedWidth]=\"true\" *ngIf=\"item.icon && item.icon.length > 0\">\n                <fa-icon [icon]=\"item.icon\"></fa-icon>\n            </fa-layers>\n            <span>{{ !item.name.translateKey ? item.name.label : (item.name.translateKey | translate) }}</span>\n        </span>\n    </a>\n</ng-template>\n<ng-template #routerLink let-item=\"item\">\n    <a [routerLink]=\"item.navigation.routerLink\" [queryParams]=\"item.navigation.queryParams\" [fragment]=\"item.navigation.fragment\">\n        <span>\n            <fa-layers [fixedWidth]=\"true\" *ngIf=\"item.icon && item.icon.length > 0\">\n                <fa-icon [icon]=\"item.icon\"></fa-icon>\n            </fa-layers>\n            <span>{{ !item.name.translateKey ? item.name.label : (item.name.translateKey | translate) }}</span>\n        </span>\n    </a>\n</ng-template>\n-->\n"
        })
    ], CksSidebarComponent);
    return CksSidebarComponent;
}());
export { CksSidebarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1jaGFrYW5zLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBZSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBTS9EO0lBVUUsNkJBQW9CLGNBQWlDLEVBQVUsWUFBNkI7UUFBeEUsbUJBQWMsR0FBZCxjQUFjLENBQW1CO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWlCO1FBVDFELFlBQU8sR0FBRyxJQUFJLENBQUM7UUFVL0MsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztRQUMvQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDO0lBQzdELENBQUM7SUFFRCxzQ0FBUSxHQUFSLFVBQVMsVUFBZTtRQUN0QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxVQUFVLEVBQUU7WUFDZCxJQUFJLE9BQU8sVUFBVSxLQUFLLFVBQVUsRUFBRTtnQkFDcEMsVUFBVSxFQUFFLENBQUM7YUFDZDtpQkFBTTtnQkFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUN4QztTQUNGO0lBQ0gsQ0FBQztJQUVELDZDQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO0lBQ2pDLENBQUM7SUFFRCwyQ0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ3JELENBQUM7SUFFRCw4Q0FBZ0IsR0FBaEIsVUFBaUIsVUFBZTtRQUM5QixJQUFJLENBQUMsVUFBVSxJQUFJLE9BQU8sVUFBVSxLQUFLLFVBQVUsSUFBSSxPQUFPLFVBQVUsS0FBSyxRQUFRLEVBQUU7WUFDckYsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Z0JBN0JtQyxpQkFBaUI7Z0JBQXdCLGVBQWU7O0lBVDFEO1FBQWpDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQzt3REFBZ0I7SUFFeEM7UUFBUixLQUFLLEVBQUU7K0RBQWtDO0lBQ2pDO1FBQVIsS0FBSyxFQUFFO2dFQUFtQztJQUNsQztRQUFSLEtBQUssRUFBRTsrREFBa0M7SUFDakM7UUFBUixLQUFLLEVBQUU7MERBQWtCO0lBTmYsbUJBQW1CO1FBSi9CLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLHN3RkFBdUM7U0FDeEMsQ0FBQztPQUNXLG1CQUFtQixDQXdDL0I7SUFBRCwwQkFBQztDQUFBLEFBeENELElBd0NDO1NBeENZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2tzU2lkZWJhclNlcnZpY2UgfSBmcm9tICcuL3NpZGViYXIuc2VydmljZSc7XG5pbXBvcnQgeyBDa3NSb3V0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9yb3V0ZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2tzLXNpZGViYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vc2lkZWJhci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQ2tzU2lkZWJhckNvbXBvbmVudCB7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuY2tzLXNpZGViYXInKSBfaGVhZGVyID0gdHJ1ZTtcblxuICBASW5wdXQoKSBoZWFkZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQElucHV0KCkgY29udGVudFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoKSBmb290ZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQElucHV0KCkgbWVudUl0ZW1zOiBhbnlbXTtcbiAgaXNTaWRlYmFyVmlld2VkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBpc1NpZGViYXJDb2xsYXBzZWQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzaWRlYmFyU2VydmljZTogQ2tzU2lkZWJhclNlcnZpY2UsIHByaXZhdGUgcm91dGVTZXJ2aWNlOiBDa3NSb3V0ZVNlcnZpY2UpIHtcbiAgICB0aGlzLmlzU2lkZWJhckNvbGxhcHNlZCA9IHRydWU7XG4gICAgdGhpcy5pc1NpZGViYXJWaWV3ZWQgPSB0aGlzLnNpZGViYXJTZXJ2aWNlLmlzU2lkZWJhclZpZXdlZDtcbiAgfVxuXG4gIGRvQWN0aW9uKG5hdmlnYXRpb246IGFueSkge1xuICAgIHRoaXMuY29sbGFwc2VTaWRlYmFyKCk7XG4gICAgaWYgKG5hdmlnYXRpb24pIHtcbiAgICAgIGlmICh0eXBlb2YgbmF2aWdhdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBuYXZpZ2F0aW9uKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJvdXRlU2VydmljZS5uYXZpZ2F0ZShuYXZpZ2F0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb2xsYXBzZVNpZGViYXIoKSB7XG4gICAgdGhpcy5pc1NpZGViYXJDb2xsYXBzZWQgPSB0cnVlO1xuICB9XG5cbiAgdG9nZ2xlU2lkZWJhcigpIHtcbiAgICB0aGlzLmlzU2lkZWJhckNvbGxhcHNlZCA9ICF0aGlzLmlzU2lkZWJhckNvbGxhcHNlZDtcbiAgfVxuXG4gIGlzVXNlZFJvdXRlckxpbmsobmF2aWdhdGlvbjogYW55KSB7XG4gICAgaWYgKCFuYXZpZ2F0aW9uIHx8IHR5cGVvZiBuYXZpZ2F0aW9uID09PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBuYXZpZ2F0aW9uID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIl19
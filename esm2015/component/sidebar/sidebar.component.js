import * as tslib_1 from "tslib";
import { Component, Input, TemplateRef } from '@angular/core';
import { CksSidebarService } from '../../service/sidebar.service';
import { CksRouteService } from '../../service/route.service';
let CksSidebarComponent = class CksSidebarComponent {
    constructor(sidebarService, routeService) {
        this.sidebarService = sidebarService;
        this.routeService = routeService;
        this.isSidebarCollapsed = true;
        this.isSidebarViewed = this.sidebarService.isSidebarViewed;
    }
    doAction(navigation) {
        this.collapseSidebar();
        if (navigation) {
            if (typeof navigation === 'function') {
                navigation();
            }
            else {
                this.routeService.navigate(navigation);
            }
        }
    }
    collapseSidebar() {
        this.isSidebarCollapsed = true;
    }
    toggleSidebar() {
        this.isSidebarCollapsed = !this.isSidebarCollapsed;
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
export { CksSidebarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1jaGFrYW5zLyIsInNvdXJjZXMiOlsiY29tcG9uZW50L3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFNOUQsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7SUFROUIsWUFBb0IsY0FBaUMsRUFBVSxZQUE2QjtRQUF4RSxtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBaUI7UUFDMUYsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztRQUMvQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDO0lBQzdELENBQUM7SUFFRCxRQUFRLENBQUMsVUFBZTtRQUN0QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxVQUFVLEVBQUU7WUFDZCxJQUFJLE9BQU8sVUFBVSxLQUFLLFVBQVUsRUFBRTtnQkFDcEMsVUFBVSxFQUFFLENBQUM7YUFDZDtpQkFBTTtnQkFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUN4QztTQUNGO0lBQ0gsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ3JELENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxVQUFlO1FBQzlCLElBQUksQ0FBQyxVQUFVLElBQUksT0FBTyxVQUFVLEtBQUssVUFBVSxJQUFJLE9BQU8sVUFBVSxLQUFLLFFBQVEsRUFBRTtZQUNyRixPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0NBQ0YsQ0FBQTtBQXJDVTtJQUFSLEtBQUssRUFBRTtzQ0FBaUIsV0FBVzsyREFBTTtBQUNqQztJQUFSLEtBQUssRUFBRTtzQ0FBa0IsV0FBVzs0REFBTTtBQUNsQztJQUFSLEtBQUssRUFBRTtzQ0FBaUIsV0FBVzsyREFBTTtBQUNqQztJQUFSLEtBQUssRUFBRTs7c0RBQWtCO0FBSmYsbUJBQW1CO0lBSi9CLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLHdpRkFBdUM7S0FDeEMsQ0FBQzs2Q0FTb0MsaUJBQWlCLEVBQXdCLGVBQWU7R0FSakYsbUJBQW1CLENBc0MvQjtTQXRDWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2tzU2lkZWJhclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL3NpZGViYXIuc2VydmljZSc7XG5pbXBvcnQgeyBDa3NSb3V0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL3JvdXRlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdja3Mtc2lkZWJhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWRlYmFyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBDa3NTaWRlYmFyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgaGVhZGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBJbnB1dCgpIGNvbnRlbnRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQElucHV0KCkgZm9vdGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBJbnB1dCgpIG1lbnVJdGVtczogYW55W107XG4gIGlzU2lkZWJhclZpZXdlZDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgaXNTaWRlYmFyQ29sbGFwc2VkOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2lkZWJhclNlcnZpY2U6IENrc1NpZGViYXJTZXJ2aWNlLCBwcml2YXRlIHJvdXRlU2VydmljZTogQ2tzUm91dGVTZXJ2aWNlKSB7XG4gICAgdGhpcy5pc1NpZGViYXJDb2xsYXBzZWQgPSB0cnVlO1xuICAgIHRoaXMuaXNTaWRlYmFyVmlld2VkID0gdGhpcy5zaWRlYmFyU2VydmljZS5pc1NpZGViYXJWaWV3ZWQ7XG4gIH1cblxuICBkb0FjdGlvbihuYXZpZ2F0aW9uOiBhbnkpIHtcbiAgICB0aGlzLmNvbGxhcHNlU2lkZWJhcigpO1xuICAgIGlmIChuYXZpZ2F0aW9uKSB7XG4gICAgICBpZiAodHlwZW9mIG5hdmlnYXRpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgbmF2aWdhdGlvbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yb3V0ZVNlcnZpY2UubmF2aWdhdGUobmF2aWdhdGlvbik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29sbGFwc2VTaWRlYmFyKCkge1xuICAgIHRoaXMuaXNTaWRlYmFyQ29sbGFwc2VkID0gdHJ1ZTtcbiAgfVxuXG4gIHRvZ2dsZVNpZGViYXIoKSB7XG4gICAgdGhpcy5pc1NpZGViYXJDb2xsYXBzZWQgPSAhdGhpcy5pc1NpZGViYXJDb2xsYXBzZWQ7XG4gIH1cblxuICBpc1VzZWRSb3V0ZXJMaW5rKG5hdmlnYXRpb246IGFueSkge1xuICAgIGlmICghbmF2aWdhdGlvbiB8fCB0eXBlb2YgbmF2aWdhdGlvbiA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgbmF2aWdhdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiJdfQ==
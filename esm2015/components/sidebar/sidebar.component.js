import * as tslib_1 from "tslib";
/*
 Copyright 2019 ChaKanNom

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */
import { Component, Input, HostBinding } from '@angular/core';
import { CksSidebarService } from './sidebar.service';
import { CksRouteService } from '../../services/route.service';
let CksSidebarComponent = class CksSidebarComponent {
    constructor(sidebarService, routeService) {
        this.sidebarService = sidebarService;
        this.routeService = routeService;
        this._header = true;
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
CksSidebarComponent.ctorParameters = () => [
    { type: CksSidebarService },
    { type: CksRouteService }
];
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
export { CksSidebarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1jaGFrYW5zLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7R0FjRztBQUNILE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFlLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFNL0QsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7SUFVOUIsWUFBb0IsY0FBaUMsRUFBVSxZQUE2QjtRQUF4RSxtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBaUI7UUFUMUQsWUFBTyxHQUFHLElBQUksQ0FBQztRQVUvQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1FBQy9CLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUM7SUFDN0QsQ0FBQztJQUVELFFBQVEsQ0FBQyxVQUFlO1FBQ3RCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksT0FBTyxVQUFVLEtBQUssVUFBVSxFQUFFO2dCQUNwQyxVQUFVLEVBQUUsQ0FBQzthQUNkO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ3hDO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7SUFDakMsQ0FBQztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDckQsQ0FBQztJQUVELGdCQUFnQixDQUFDLFVBQWU7UUFDOUIsSUFBSSxDQUFDLFVBQVUsSUFBSSxPQUFPLFVBQVUsS0FBSyxVQUFVLElBQUksT0FBTyxVQUFVLEtBQUssUUFBUSxFQUFFO1lBQ3JGLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Q0FDRixDQUFBOztZQTlCcUMsaUJBQWlCO1lBQXdCLGVBQWU7O0FBVDFEO0lBQWpDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQztvREFBZ0I7QUFFeEM7SUFBUixLQUFLLEVBQUU7MkRBQWtDO0FBQ2pDO0lBQVIsS0FBSyxFQUFFOzREQUFtQztBQUNsQztJQUFSLEtBQUssRUFBRTsyREFBa0M7QUFDakM7SUFBUixLQUFLLEVBQUU7c0RBQWtCO0FBTmYsbUJBQW1CO0lBSi9CLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLHN3RkFBdUM7S0FDeEMsQ0FBQztHQUNXLG1CQUFtQixDQXdDL0I7U0F4Q1ksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiBDb3B5cmlnaHQgMjAxOSBDaGFLYW5Ob21cblxuIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDa3NTaWRlYmFyU2VydmljZSB9IGZyb20gJy4vc2lkZWJhci5zZXJ2aWNlJztcbmltcG9ydCB7IENrc1JvdXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3JvdXRlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdja3Mtc2lkZWJhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWRlYmFyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBDa3NTaWRlYmFyQ29tcG9uZW50IHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5ja3Mtc2lkZWJhcicpIF9oZWFkZXIgPSB0cnVlO1xuXG4gIEBJbnB1dCgpIGhlYWRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoKSBjb250ZW50VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBJbnB1dCgpIGZvb3RlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoKSBtZW51SXRlbXM6IGFueVtdO1xuICBpc1NpZGViYXJWaWV3ZWQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIGlzU2lkZWJhckNvbGxhcHNlZDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNpZGViYXJTZXJ2aWNlOiBDa3NTaWRlYmFyU2VydmljZSwgcHJpdmF0ZSByb3V0ZVNlcnZpY2U6IENrc1JvdXRlU2VydmljZSkge1xuICAgIHRoaXMuaXNTaWRlYmFyQ29sbGFwc2VkID0gdHJ1ZTtcbiAgICB0aGlzLmlzU2lkZWJhclZpZXdlZCA9IHRoaXMuc2lkZWJhclNlcnZpY2UuaXNTaWRlYmFyVmlld2VkO1xuICB9XG5cbiAgZG9BY3Rpb24obmF2aWdhdGlvbjogYW55KSB7XG4gICAgdGhpcy5jb2xsYXBzZVNpZGViYXIoKTtcbiAgICBpZiAobmF2aWdhdGlvbikge1xuICAgICAgaWYgKHR5cGVvZiBuYXZpZ2F0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG5hdmlnYXRpb24oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucm91dGVTZXJ2aWNlLm5hdmlnYXRlKG5hdmlnYXRpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbGxhcHNlU2lkZWJhcigpIHtcbiAgICB0aGlzLmlzU2lkZWJhckNvbGxhcHNlZCA9IHRydWU7XG4gIH1cblxuICB0b2dnbGVTaWRlYmFyKCkge1xuICAgIHRoaXMuaXNTaWRlYmFyQ29sbGFwc2VkID0gIXRoaXMuaXNTaWRlYmFyQ29sbGFwc2VkO1xuICB9XG5cbiAgaXNVc2VkUm91dGVyTGluayhuYXZpZ2F0aW9uOiBhbnkpIHtcbiAgICBpZiAoIW5hdmlnYXRpb24gfHwgdHlwZW9mIG5hdmlnYXRpb24gPT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIG5hdmlnYXRpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iXX0=
import * as tslib_1 from "tslib";
import { Component, Input, OnInit, OnDestroy, Inject, Renderer2, HostBinding } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { CksRouteService } from '../../services/route.service';
var CksTopbarComponent = /** @class */ (function () {
    function CksTopbarComponent(document, renderer, routeService) {
        this.document = document;
        this.renderer = renderer;
        this.routeService = routeService;
        this._header = true;
        this._fixedTop = false;
        this._positionFixed = false;
        this._withSidebar = false;
        this._withSubHeader = false;
    }
    CksTopbarComponent.prototype.ngOnInit = function () {
        this._fixedTop = this._positionFixed = this.fixed;
        this._withSidebar = this.withSidebar;
        this._withSubHeader = this.withSubheader;
        this.textItems = this.textItems ? this.textItems.slice(0, 3) : [];
        this.iconItems = this.iconItems ? this.iconItems.slice(0, 6) : [];
    };
    CksTopbarComponent.prototype.ngOnDestroy = function () { };
    CksTopbarComponent.prototype.doAction = function (navigation) {
        if (navigation) {
            if (typeof navigation === 'function') {
                navigation();
            }
            else {
                this.routeService.navigate(navigation);
            }
        }
    };
    CksTopbarComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Renderer2 },
        { type: CksRouteService }
    ]; };
    tslib_1.__decorate([
        Input()
    ], CksTopbarComponent.prototype, "fixed", void 0);
    tslib_1.__decorate([
        Input()
    ], CksTopbarComponent.prototype, "withSidebar", void 0);
    tslib_1.__decorate([
        Input()
    ], CksTopbarComponent.prototype, "textItems", void 0);
    tslib_1.__decorate([
        Input()
    ], CksTopbarComponent.prototype, "iconItems", void 0);
    tslib_1.__decorate([
        Input()
    ], CksTopbarComponent.prototype, "userImgUrl", void 0);
    tslib_1.__decorate([
        Input()
    ], CksTopbarComponent.prototype, "withSubheader", void 0);
    tslib_1.__decorate([
        Input()
    ], CksTopbarComponent.prototype, "breadcrumbItems", void 0);
    tslib_1.__decorate([
        HostBinding('class.cks-header')
    ], CksTopbarComponent.prototype, "_header", void 0);
    tslib_1.__decorate([
        HostBinding('class.fixed-top')
    ], CksTopbarComponent.prototype, "_fixedTop", void 0);
    tslib_1.__decorate([
        HostBinding('class.position-fixed')
    ], CksTopbarComponent.prototype, "_positionFixed", void 0);
    tslib_1.__decorate([
        HostBinding('class.cks-header-with-sidebar')
    ], CksTopbarComponent.prototype, "_withSidebar", void 0);
    tslib_1.__decorate([
        HostBinding('class.cks-header-with-subheader')
    ], CksTopbarComponent.prototype, "_withSubHeader", void 0);
    CksTopbarComponent = tslib_1.__decorate([
        Component({
            selector: 'cks-topbar',
            template: "<div class=\"d-flex\" [ngSwitch]=\"withSidebar\">\n    <button  class=\"navbar-toggler d-lg-none mr-auto\" type=\"button\" *ngSwitchCase=\"true\">\n        <fa-icon icon=\"bars\"></fa-icon>\n    </button>\n    <a class=\"cks-header-brand\">\n        <span class=\"cks-header-logo-img\"></span>\n        <span class=\"cks-header-brand-text\">Gooroom</span>\n        <span class=\"cks-header-version\">vUNKNOWN</span>\n    </a>\n    <button class=\"navbar-toggler d-none d-lg-block ml-3\" type=\"button\" *ngSwitchCase=\"true\">\n        <fa-icon icon=\"bars\"></fa-icon>\n    </button>\n</div>\n<ul class=\"nav navbar-nav d-none d-lg-flex\">\n    <li class=\"nav-item px-2\" *ngFor=\"let tItem of textItems\">\n        <a class=\"nav-link\" (click)=\"doAction(tItem.navigation)\">\n            {{ !tItem.name.translateKey ? tItem.name.label : (tItem.name.translateKey | translate) }}\n        </a>\n    </li>\n</ul>\n<ul class=\"nav navbar-nav ml-auto\">\n    <li class=\"nav-item\" *ngFor=\"let iItem of iconItems\">\n        <a class=\"nav-link\" (click)=\"doAction(iItem.navigation)\" placement=\"bottom\" ngbTooltip=\"{{ iItem.tooltip ? (!iItem.tooltip.translateKey ? iItem.tooltip.label : (iItem.tooltip.translateKey | translate)) : undefined }}\">\n            <fa-icon [icon]=\"iItem.icon\" class=\"cks-icon\"></fa-icon>\n        </a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link py-0 px-2\">\n            <fa-icon icon=\"user-circle\" class=\"profile-icon\" *ngIf=\"!userImgUrl\"></fa-icon>\n            <img [src]=\"userImgUrl\" class=\"profile-image rounded-circle\" alt=\"Avatar\" *ngIf=\"userImgUrl\">\n        </a>\n    </li>\n    <li class=\"nav-item pr-1\">\n        <button class=\"nav-button\" type=\"button\">\n            <fa-icon icon=\"ellipsis-h\"></fa-icon>\n        </button>\n    </li>\n</ul>\n<div class=\"cks-subheader justify-content-between px-3\" *ngIf=\"withSubheader\">\n    <ol class=\"breadcrumb border-0 m-0 px-0 px-md-3 bg-transparent\">\n        <li class=\"breadcrumb-item\" [ngClass]=\"{'active': isLast}\" *ngFor=\"let bItem of breadcrumbItems; last as isLast\">\n            <a (click)=\"doAction(bItem.navigation)\">{{ !bItem.name.translateKey ? bItem.name.label : (bItem.name.translateKey | translate) }}</a>\n        </li>\n    </ol>\n</div>\n"
        }),
        tslib_1.__param(0, Inject(DOCUMENT))
    ], CksTopbarComponent);
    return CksTopbarComponent;
}());
export { CksTopbarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWNoYWthbnMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3RvcGJhci90b3BiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFNL0Q7SUFlRSw0QkFBc0MsUUFBYSxFQUFVLFFBQW1CLEVBQVUsWUFBNkI7UUFBakYsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBaUI7UUFOdEYsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNoQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2IsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDZCxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNuQixtQkFBYyxHQUFHLEtBQUssQ0FBQztJQUVtRCxDQUFDO0lBRTNILHFDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNsRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDckMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDbEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNwRSxDQUFDO0lBRUQsd0NBQVcsR0FBWCxjQUFxQixDQUFDO0lBRXRCLHFDQUFRLEdBQVIsVUFBUyxVQUFlO1FBQ3RCLElBQUksVUFBVSxFQUFFO1lBQ2QsSUFBSSxPQUFPLFVBQVUsS0FBSyxVQUFVLEVBQUU7Z0JBQ3BDLFVBQVUsRUFBRSxDQUFDO2FBQ2Q7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDeEM7U0FDRjtJQUNILENBQUM7O2dEQXBCWSxNQUFNLFNBQUMsUUFBUTtnQkFBMkMsU0FBUztnQkFBd0IsZUFBZTs7SUFkOUc7UUFBUixLQUFLLEVBQUU7cURBQWdCO0lBQ2Y7UUFBUixLQUFLLEVBQUU7MkRBQXNCO0lBQ3JCO1FBQVIsS0FBSyxFQUFFO3lEQUFrQjtJQUNqQjtRQUFSLEtBQUssRUFBRTt5REFBa0I7SUFDakI7UUFBUixLQUFLLEVBQUU7MERBQW9CO0lBQ25CO1FBQVIsS0FBSyxFQUFFOzZEQUF3QjtJQUN2QjtRQUFSLEtBQUssRUFBRTsrREFBd0I7SUFFQztRQUFoQyxXQUFXLENBQUMsa0JBQWtCLENBQUM7dURBQWdCO0lBQ2hCO1FBQS9CLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQzt5REFBbUI7SUFDYjtRQUFwQyxXQUFXLENBQUMsc0JBQXNCLENBQUM7OERBQXdCO0lBQ2Q7UUFBN0MsV0FBVyxDQUFDLCtCQUErQixDQUFDOzREQUFzQjtJQUNuQjtRQUEvQyxXQUFXLENBQUMsaUNBQWlDLENBQUM7OERBQXdCO0lBYjVELGtCQUFrQjtRQUo5QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsWUFBWTtZQUN0QixreEVBQXNDO1NBQ3ZDLENBQUM7UUFnQmEsbUJBQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO09BZmxCLGtCQUFrQixDQW9DOUI7SUFBRCx5QkFBQztDQUFBLEFBcENELElBb0NDO1NBcENZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT25EZXN0cm95LCBJbmplY3QsIFJlbmRlcmVyMiwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENrc1JvdXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3JvdXRlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdja3MtdG9wYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RvcGJhci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQ2tzVG9wYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBmaXhlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgd2l0aFNpZGViYXI6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHRleHRJdGVtczogYW55W107XG4gIEBJbnB1dCgpIGljb25JdGVtczogYW55W107XG4gIEBJbnB1dCgpIHVzZXJJbWdVcmw6IHN0cmluZztcbiAgQElucHV0KCkgd2l0aFN1YmhlYWRlcjogYm9vbGVhbjtcbiAgQElucHV0KCkgYnJlYWRjcnVtYkl0ZW1zOiBhbnlbXTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNrcy1oZWFkZXInKSBfaGVhZGVyID0gdHJ1ZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5maXhlZC10b3AnKSBfZml4ZWRUb3AgPSBmYWxzZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5wb3NpdGlvbi1maXhlZCcpIF9wb3NpdGlvbkZpeGVkID0gZmFsc2U7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuY2tzLWhlYWRlci13aXRoLXNpZGViYXInKSBfd2l0aFNpZGViYXIgPSBmYWxzZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5ja3MtaGVhZGVyLXdpdGgtc3ViaGVhZGVyJykgX3dpdGhTdWJIZWFkZXIgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSByb3V0ZVNlcnZpY2U6IENrc1JvdXRlU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9maXhlZFRvcCA9IHRoaXMuX3Bvc2l0aW9uRml4ZWQgPSB0aGlzLmZpeGVkO1xuICAgIHRoaXMuX3dpdGhTaWRlYmFyID0gdGhpcy53aXRoU2lkZWJhcjtcbiAgICB0aGlzLl93aXRoU3ViSGVhZGVyID0gdGhpcy53aXRoU3ViaGVhZGVyO1xuICAgIHRoaXMudGV4dEl0ZW1zID0gdGhpcy50ZXh0SXRlbXMgPyB0aGlzLnRleHRJdGVtcy5zbGljZSgwLCAzKSA6IFtdO1xuICAgIHRoaXMuaWNvbkl0ZW1zID0gdGhpcy5pY29uSXRlbXMgPyB0aGlzLmljb25JdGVtcy5zbGljZSgwLCA2KSA6IFtdO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7fVxuXG4gIGRvQWN0aW9uKG5hdmlnYXRpb246IGFueSkge1xuICAgIGlmIChuYXZpZ2F0aW9uKSB7XG4gICAgICBpZiAodHlwZW9mIG5hdmlnYXRpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgbmF2aWdhdGlvbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yb3V0ZVNlcnZpY2UubmF2aWdhdGUobmF2aWdhdGlvbik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=
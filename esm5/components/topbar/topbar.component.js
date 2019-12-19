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
        this.classNameForBody = 'cks-body';
    }
    CksTopbarComponent.prototype.ngOnInit = function () {
        this._fixedTop = this._positionFixed = this.fixed;
        this._withSidebar = this.withSidebar;
        this._withSubHeader = this.withSubheader;
        this.textItems = this.textItems ? this.textItems.slice(0, 3) : [];
        this.iconItems = this.iconItems ? this.iconItems.slice(0, 6) : [];
        if (this.fixed) {
            this.classNameForBody += '-fixed-topbar';
            if (this.withSubheader) {
                this.classNameForBody += '-with-subheader';
            }
            this.renderer.addClass(this.document.body, this.classNameForBody);
        }
    };
    CksTopbarComponent.prototype.ngOnDestroy = function () {
        if (this.fixed) {
            this.renderer.removeClass(this.document.body, this.classNameForBody);
        }
    };
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
        HostBinding('class.cks-topbar')
    ], CksTopbarComponent.prototype, "_header", void 0);
    tslib_1.__decorate([
        HostBinding('class.fixed-top')
    ], CksTopbarComponent.prototype, "_fixedTop", void 0);
    tslib_1.__decorate([
        HostBinding('class.position-fixed')
    ], CksTopbarComponent.prototype, "_positionFixed", void 0);
    tslib_1.__decorate([
        HostBinding('class.cks-topbar-with-sidebar')
    ], CksTopbarComponent.prototype, "_withSidebar", void 0);
    tslib_1.__decorate([
        HostBinding('class.cks-topbar-with-subheader')
    ], CksTopbarComponent.prototype, "_withSubHeader", void 0);
    CksTopbarComponent = tslib_1.__decorate([
        Component({
            selector: 'cks-topbar',
            template: "<div class=\"d-flex\" [ngSwitch]=\"withSidebar\">\n    <button  class=\"navbar-toggler d-lg-none mr-auto\" type=\"button\" *ngSwitchCase=\"true\">\n        <fa-icon icon=\"bars\"></fa-icon>\n    </button>\n    <a class=\"cks-topbar-brand\">\n        <span class=\"cks-topbar-logo-img\"></span>\n        <span class=\"cks-topbar-brand-text\">Gooroom</span>\n        <span class=\"cks-topbar-version\">vUNKNOWN</span>\n    </a>\n    <button class=\"navbar-toggler d-none d-lg-block ml-3\" type=\"button\" *ngSwitchCase=\"true\">\n        <fa-icon icon=\"bars\"></fa-icon>\n    </button>\n</div>\n<ul class=\"nav navbar-nav d-none d-lg-flex\">\n    <li class=\"nav-item px-2\" *ngFor=\"let tItem of textItems\">\n        <a class=\"nav-link\" (click)=\"doAction(tItem.navigation)\">\n            {{ !tItem.name.translateKey ? tItem.name.label : (tItem.name.translateKey | translate) }}\n        </a>\n    </li>\n</ul>\n<ul class=\"nav navbar-nav ml-auto\">\n    <li class=\"nav-item\" *ngFor=\"let iItem of iconItems\">\n        <a class=\"nav-link\" (click)=\"doAction(iItem.navigation)\" placement=\"bottom\" ngbTooltip=\"{{ iItem.tooltip ? (!iItem.tooltip.translateKey ? iItem.tooltip.label : (iItem.tooltip.translateKey | translate)) : undefined }}\">\n            <fa-icon [icon]=\"iItem.icon\" class=\"cks-icon\"></fa-icon>\n        </a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link py-0 px-2\">\n            <fa-icon icon=\"user-circle\" class=\"profile-icon\" *ngIf=\"!userImgUrl\"></fa-icon>\n            <img [src]=\"userImgUrl\" class=\"profile-image rounded-circle\" alt=\"Avatar\" *ngIf=\"userImgUrl\">\n        </a>\n    </li>\n    <li class=\"nav-item pr-1\">\n        <button class=\"nav-button\" type=\"button\">\n            <fa-icon icon=\"ellipsis-h\"></fa-icon>\n        </button>\n    </li>\n</ul>\n<div class=\"cks-subheader justify-content-between px-3\" *ngIf=\"withSubheader\">\n    <ol class=\"breadcrumb border-0 m-0 px-0 px-md-3 bg-transparent\">\n        <li class=\"breadcrumb-item\" [ngClass]=\"{'active': isLast}\" *ngFor=\"let bItem of breadcrumbItems; last as isLast\">\n            <a (click)=\"doAction(bItem.navigation)\">{{ !bItem.name.translateKey ? bItem.name.label : (bItem.name.translateKey | translate) }}</a>\n        </li>\n    </ol>\n</div>\n"
        }),
        tslib_1.__param(0, Inject(DOCUMENT))
    ], CksTopbarComponent);
    return CksTopbarComponent;
}());
export { CksTopbarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWNoYWthbnMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3RvcGJhci90b3BiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFNL0Q7SUFpQkUsNEJBQXNDLFFBQWEsRUFBVSxRQUFtQixFQUFVLFlBQTZCO1FBQWpGLGFBQVEsR0FBUixRQUFRLENBQUs7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWlCO1FBUnRGLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDaEIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNiLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ2QsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDbkIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFFdkUscUJBQWdCLEdBQUcsVUFBVSxDQUFDO0lBRTRGLENBQUM7SUFFM0gscUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ2xELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNyQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDekMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNsRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ2xFLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxlQUFlLENBQUM7WUFDekMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUN0QixJQUFJLENBQUMsZ0JBQWdCLElBQUksaUJBQWlCLENBQUM7YUFDNUM7WUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUNuRTtJQUNILENBQUM7SUFFRCx3Q0FBVyxHQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDdEU7SUFDSCxDQUFDO0lBRUQscUNBQVEsR0FBUixVQUFTLFVBQWU7UUFDdEIsSUFBSSxVQUFVLEVBQUU7WUFDZCxJQUFJLE9BQU8sVUFBVSxLQUFLLFVBQVUsRUFBRTtnQkFDcEMsVUFBVSxFQUFFLENBQUM7YUFDZDtpQkFBTTtnQkFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUN4QztTQUNGO0lBQ0gsQ0FBQzs7Z0RBL0JZLE1BQU0sU0FBQyxRQUFRO2dCQUEyQyxTQUFTO2dCQUF3QixlQUFlOztJQWhCOUc7UUFBUixLQUFLLEVBQUU7cURBQWdCO0lBQ2Y7UUFBUixLQUFLLEVBQUU7MkRBQXNCO0lBQ3JCO1FBQVIsS0FBSyxFQUFFO3lEQUFrQjtJQUNqQjtRQUFSLEtBQUssRUFBRTt5REFBa0I7SUFDakI7UUFBUixLQUFLLEVBQUU7MERBQW9CO0lBQ25CO1FBQVIsS0FBSyxFQUFFOzZEQUF3QjtJQUN2QjtRQUFSLEtBQUssRUFBRTsrREFBd0I7SUFFQztRQUFoQyxXQUFXLENBQUMsa0JBQWtCLENBQUM7dURBQWdCO0lBQ2hCO1FBQS9CLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQzt5REFBbUI7SUFDYjtRQUFwQyxXQUFXLENBQUMsc0JBQXNCLENBQUM7OERBQXdCO0lBQ2Q7UUFBN0MsV0FBVyxDQUFDLCtCQUErQixDQUFDOzREQUFzQjtJQUNuQjtRQUEvQyxXQUFXLENBQUMsaUNBQWlDLENBQUM7OERBQXdCO0lBYjVELGtCQUFrQjtRQUo5QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsWUFBWTtZQUN0QixreEVBQXNDO1NBQ3ZDLENBQUM7UUFrQmEsbUJBQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO09BakJsQixrQkFBa0IsQ0FpRDlCO0lBQUQseUJBQUM7Q0FBQSxBQWpERCxJQWlEQztTQWpEWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE9uRGVzdHJveSwgSW5qZWN0LCBSZW5kZXJlcjIsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDa3NSb3V0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9yb3V0ZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2tzLXRvcGJhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi90b3BiYXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIENrc1RvcGJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgZml4ZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHdpdGhTaWRlYmFyOiBib29sZWFuO1xuICBASW5wdXQoKSB0ZXh0SXRlbXM6IGFueVtdO1xuICBASW5wdXQoKSBpY29uSXRlbXM6IGFueVtdO1xuICBASW5wdXQoKSB1c2VySW1nVXJsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHdpdGhTdWJoZWFkZXI6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGJyZWFkY3J1bWJJdGVtczogYW55W107XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5ja3MtdG9wYmFyJykgX2hlYWRlciA9IHRydWU7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuZml4ZWQtdG9wJykgX2ZpeGVkVG9wID0gZmFsc2U7XG4gIEBIb3N0QmluZGluZygnY2xhc3MucG9zaXRpb24tZml4ZWQnKSBfcG9zaXRpb25GaXhlZCA9IGZhbHNlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNrcy10b3BiYXItd2l0aC1zaWRlYmFyJykgX3dpdGhTaWRlYmFyID0gZmFsc2U7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuY2tzLXRvcGJhci13aXRoLXN1YmhlYWRlcicpIF93aXRoU3ViSGVhZGVyID0gZmFsc2U7XG5cbiAgY2xhc3NOYW1lRm9yQm9keSA9ICdja3MtYm9keSc7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgcm91dGVTZXJ2aWNlOiBDa3NSb3V0ZVNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fZml4ZWRUb3AgPSB0aGlzLl9wb3NpdGlvbkZpeGVkID0gdGhpcy5maXhlZDtcbiAgICB0aGlzLl93aXRoU2lkZWJhciA9IHRoaXMud2l0aFNpZGViYXI7XG4gICAgdGhpcy5fd2l0aFN1YkhlYWRlciA9IHRoaXMud2l0aFN1YmhlYWRlcjtcbiAgICB0aGlzLnRleHRJdGVtcyA9IHRoaXMudGV4dEl0ZW1zID8gdGhpcy50ZXh0SXRlbXMuc2xpY2UoMCwgMykgOiBbXTtcbiAgICB0aGlzLmljb25JdGVtcyA9IHRoaXMuaWNvbkl0ZW1zID8gdGhpcy5pY29uSXRlbXMuc2xpY2UoMCwgNikgOiBbXTtcbiAgICBpZiAodGhpcy5maXhlZCkge1xuICAgICAgdGhpcy5jbGFzc05hbWVGb3JCb2R5ICs9ICctZml4ZWQtdG9wYmFyJztcbiAgICAgIGlmICh0aGlzLndpdGhTdWJoZWFkZXIpIHtcbiAgICAgICAgdGhpcy5jbGFzc05hbWVGb3JCb2R5ICs9ICctd2l0aC1zdWJoZWFkZXInO1xuICAgICAgfVxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmRvY3VtZW50LmJvZHksIHRoaXMuY2xhc3NOYW1lRm9yQm9keSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZml4ZWQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5kb2N1bWVudC5ib2R5LCB0aGlzLmNsYXNzTmFtZUZvckJvZHkpO1xuICAgIH1cbiAgfVxuXG4gIGRvQWN0aW9uKG5hdmlnYXRpb246IGFueSkge1xuICAgIGlmIChuYXZpZ2F0aW9uKSB7XG4gICAgICBpZiAodHlwZW9mIG5hdmlnYXRpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgbmF2aWdhdGlvbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yb3V0ZVNlcnZpY2UubmF2aWdhdGUobmF2aWdhdGlvbik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=
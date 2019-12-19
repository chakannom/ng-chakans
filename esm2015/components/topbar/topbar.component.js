import * as tslib_1 from "tslib";
import { Component, Input, OnInit, OnDestroy, Inject, Renderer2, HostBinding } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { CksRouteService } from '../../services/route.service';
let CksTopbarComponent = class CksTopbarComponent {
    constructor(document, renderer, routeService) {
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
    ngOnInit() {
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
    }
    ngOnDestroy() {
        if (this.fixed) {
            this.renderer.removeClass(this.document.body, this.classNameForBody);
        }
    }
    doAction(navigation) {
        if (navigation) {
            if (typeof navigation === 'function') {
                navigation();
            }
            else {
                this.routeService.navigate(navigation);
            }
        }
    }
};
CksTopbarComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Renderer2 },
    { type: CksRouteService }
];
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
export { CksTopbarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWNoYWthbnMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3RvcGJhci90b3BiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFNL0QsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7SUFpQjdCLFlBQXNDLFFBQWEsRUFBVSxRQUFtQixFQUFVLFlBQTZCO1FBQWpGLGFBQVEsR0FBUixRQUFRLENBQUs7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWlCO1FBUnRGLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDaEIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNiLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ2QsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDbkIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFFdkUscUJBQWdCLEdBQUcsVUFBVSxDQUFDO0lBRTRGLENBQUM7SUFFM0gsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ2xELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNyQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDekMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNsRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ2xFLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxlQUFlLENBQUM7WUFDekMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUN0QixJQUFJLENBQUMsZ0JBQWdCLElBQUksaUJBQWlCLENBQUM7YUFDNUM7WUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUNuRTtJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDdEU7SUFDSCxDQUFDO0lBRUQsUUFBUSxDQUFDLFVBQWU7UUFDdEIsSUFBSSxVQUFVLEVBQUU7WUFDZCxJQUFJLE9BQU8sVUFBVSxLQUFLLFVBQVUsRUFBRTtnQkFDcEMsVUFBVSxFQUFFLENBQUM7YUFDZDtpQkFBTTtnQkFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUN4QztTQUNGO0lBQ0gsQ0FBQztDQUNGLENBQUE7OzRDQWhDYyxNQUFNLFNBQUMsUUFBUTtZQUEyQyxTQUFTO1lBQXdCLGVBQWU7O0FBaEI5RztJQUFSLEtBQUssRUFBRTtpREFBZ0I7QUFDZjtJQUFSLEtBQUssRUFBRTt1REFBc0I7QUFDckI7SUFBUixLQUFLLEVBQUU7cURBQWtCO0FBQ2pCO0lBQVIsS0FBSyxFQUFFO3FEQUFrQjtBQUNqQjtJQUFSLEtBQUssRUFBRTtzREFBb0I7QUFDbkI7SUFBUixLQUFLLEVBQUU7eURBQXdCO0FBQ3ZCO0lBQVIsS0FBSyxFQUFFOzJEQUF3QjtBQUVDO0lBQWhDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQzttREFBZ0I7QUFDaEI7SUFBL0IsV0FBVyxDQUFDLGlCQUFpQixDQUFDO3FEQUFtQjtBQUNiO0lBQXBDLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQzswREFBd0I7QUFDZDtJQUE3QyxXQUFXLENBQUMsK0JBQStCLENBQUM7d0RBQXNCO0FBQ25CO0lBQS9DLFdBQVcsQ0FBQyxpQ0FBaUMsQ0FBQzswREFBd0I7QUFiNUQsa0JBQWtCO0lBSjlCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxZQUFZO1FBQ3RCLGt4RUFBc0M7S0FDdkMsQ0FBQztJQWtCYSxtQkFBQSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7R0FqQmxCLGtCQUFrQixDQWlEOUI7U0FqRFksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPbkRlc3Ryb3ksIEluamVjdCwgUmVuZGVyZXIyLCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ2tzUm91dGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcm91dGUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nrcy10b3BiYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9wYmFyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBDa3NUb3BiYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGZpeGVkOiBib29sZWFuO1xuICBASW5wdXQoKSB3aXRoU2lkZWJhcjogYm9vbGVhbjtcbiAgQElucHV0KCkgdGV4dEl0ZW1zOiBhbnlbXTtcbiAgQElucHV0KCkgaWNvbkl0ZW1zOiBhbnlbXTtcbiAgQElucHV0KCkgdXNlckltZ1VybDogc3RyaW5nO1xuICBASW5wdXQoKSB3aXRoU3ViaGVhZGVyOiBib29sZWFuO1xuICBASW5wdXQoKSBicmVhZGNydW1iSXRlbXM6IGFueVtdO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuY2tzLXRvcGJhcicpIF9oZWFkZXIgPSB0cnVlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmZpeGVkLXRvcCcpIF9maXhlZFRvcCA9IGZhbHNlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnBvc2l0aW9uLWZpeGVkJykgX3Bvc2l0aW9uRml4ZWQgPSBmYWxzZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5ja3MtdG9wYmFyLXdpdGgtc2lkZWJhcicpIF93aXRoU2lkZWJhciA9IGZhbHNlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNrcy10b3BiYXItd2l0aC1zdWJoZWFkZXInKSBfd2l0aFN1YkhlYWRlciA9IGZhbHNlO1xuXG4gIGNsYXNzTmFtZUZvckJvZHkgPSAnY2tzLWJvZHknO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIHJvdXRlU2VydmljZTogQ2tzUm91dGVTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2ZpeGVkVG9wID0gdGhpcy5fcG9zaXRpb25GaXhlZCA9IHRoaXMuZml4ZWQ7XG4gICAgdGhpcy5fd2l0aFNpZGViYXIgPSB0aGlzLndpdGhTaWRlYmFyO1xuICAgIHRoaXMuX3dpdGhTdWJIZWFkZXIgPSB0aGlzLndpdGhTdWJoZWFkZXI7XG4gICAgdGhpcy50ZXh0SXRlbXMgPSB0aGlzLnRleHRJdGVtcyA/IHRoaXMudGV4dEl0ZW1zLnNsaWNlKDAsIDMpIDogW107XG4gICAgdGhpcy5pY29uSXRlbXMgPSB0aGlzLmljb25JdGVtcyA/IHRoaXMuaWNvbkl0ZW1zLnNsaWNlKDAsIDYpIDogW107XG4gICAgaWYgKHRoaXMuZml4ZWQpIHtcbiAgICAgIHRoaXMuY2xhc3NOYW1lRm9yQm9keSArPSAnLWZpeGVkLXRvcGJhcic7XG4gICAgICBpZiAodGhpcy53aXRoU3ViaGVhZGVyKSB7XG4gICAgICAgIHRoaXMuY2xhc3NOYW1lRm9yQm9keSArPSAnLXdpdGgtc3ViaGVhZGVyJztcbiAgICAgIH1cbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5kb2N1bWVudC5ib2R5LCB0aGlzLmNsYXNzTmFtZUZvckJvZHkpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmZpeGVkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZG9jdW1lbnQuYm9keSwgdGhpcy5jbGFzc05hbWVGb3JCb2R5KTtcbiAgICB9XG4gIH1cblxuICBkb0FjdGlvbihuYXZpZ2F0aW9uOiBhbnkpIHtcbiAgICBpZiAobmF2aWdhdGlvbikge1xuICAgICAgaWYgKHR5cGVvZiBuYXZpZ2F0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG5hdmlnYXRpb24oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucm91dGVTZXJ2aWNlLm5hdmlnYXRlKG5hdmlnYXRpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19
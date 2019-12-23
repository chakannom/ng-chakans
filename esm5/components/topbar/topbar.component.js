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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWNoYWthbnMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3RvcGJhci90b3BiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7R0FjRztBQUNILE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEcsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQU0vRDtJQWlCRSw0QkFBc0MsUUFBYSxFQUFVLFFBQW1CLEVBQVUsWUFBNkI7UUFBakYsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBaUI7UUFSdEYsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNoQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2IsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDZCxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNuQixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUV2RSxxQkFBZ0IsR0FBRyxVQUFVLENBQUM7SUFFNEYsQ0FBQztJQUUzSCxxQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDbEQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN6QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ2xFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDbEUsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLGdCQUFnQixJQUFJLGVBQWUsQ0FBQztZQUN6QyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxpQkFBaUIsQ0FBQzthQUM1QztZQUNELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ25FO0lBQ0gsQ0FBQztJQUVELHdDQUFXLEdBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUN0RTtJQUNILENBQUM7SUFFRCxxQ0FBUSxHQUFSLFVBQVMsVUFBZTtRQUN0QixJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksT0FBTyxVQUFVLEtBQUssVUFBVSxFQUFFO2dCQUNwQyxVQUFVLEVBQUUsQ0FBQzthQUNkO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ3hDO1NBQ0Y7SUFDSCxDQUFDOztnREEvQlksTUFBTSxTQUFDLFFBQVE7Z0JBQTJDLFNBQVM7Z0JBQXdCLGVBQWU7O0lBaEI5RztRQUFSLEtBQUssRUFBRTtxREFBZ0I7SUFDZjtRQUFSLEtBQUssRUFBRTsyREFBc0I7SUFDckI7UUFBUixLQUFLLEVBQUU7eURBQWtCO0lBQ2pCO1FBQVIsS0FBSyxFQUFFO3lEQUFrQjtJQUNqQjtRQUFSLEtBQUssRUFBRTswREFBb0I7SUFDbkI7UUFBUixLQUFLLEVBQUU7NkRBQXdCO0lBQ3ZCO1FBQVIsS0FBSyxFQUFFOytEQUF3QjtJQUVDO1FBQWhDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQzt1REFBZ0I7SUFDaEI7UUFBL0IsV0FBVyxDQUFDLGlCQUFpQixDQUFDO3lEQUFtQjtJQUNiO1FBQXBDLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQzs4REFBd0I7SUFDZDtRQUE3QyxXQUFXLENBQUMsK0JBQStCLENBQUM7NERBQXNCO0lBQ25CO1FBQS9DLFdBQVcsQ0FBQyxpQ0FBaUMsQ0FBQzs4REFBd0I7SUFiNUQsa0JBQWtCO1FBSjlCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxZQUFZO1lBQ3RCLGt4RUFBc0M7U0FDdkMsQ0FBQztRQWtCYSxtQkFBQSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7T0FqQmxCLGtCQUFrQixDQWlEOUI7SUFBRCx5QkFBQztDQUFBLEFBakRELElBaURDO1NBakRZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gQ29weXJpZ2h0IDIwMTkgQ2hhS2FuTm9tXG5cbiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT25EZXN0cm95LCBJbmplY3QsIFJlbmRlcmVyMiwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENrc1JvdXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3JvdXRlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdja3MtdG9wYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RvcGJhci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQ2tzVG9wYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBmaXhlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgd2l0aFNpZGViYXI6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHRleHRJdGVtczogYW55W107XG4gIEBJbnB1dCgpIGljb25JdGVtczogYW55W107XG4gIEBJbnB1dCgpIHVzZXJJbWdVcmw6IHN0cmluZztcbiAgQElucHV0KCkgd2l0aFN1YmhlYWRlcjogYm9vbGVhbjtcbiAgQElucHV0KCkgYnJlYWRjcnVtYkl0ZW1zOiBhbnlbXTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNrcy10b3BiYXInKSBfaGVhZGVyID0gdHJ1ZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5maXhlZC10b3AnKSBfZml4ZWRUb3AgPSBmYWxzZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5wb3NpdGlvbi1maXhlZCcpIF9wb3NpdGlvbkZpeGVkID0gZmFsc2U7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuY2tzLXRvcGJhci13aXRoLXNpZGViYXInKSBfd2l0aFNpZGViYXIgPSBmYWxzZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5ja3MtdG9wYmFyLXdpdGgtc3ViaGVhZGVyJykgX3dpdGhTdWJIZWFkZXIgPSBmYWxzZTtcblxuICBjbGFzc05hbWVGb3JCb2R5ID0gJ2Nrcy1ib2R5JztcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSByb3V0ZVNlcnZpY2U6IENrc1JvdXRlU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9maXhlZFRvcCA9IHRoaXMuX3Bvc2l0aW9uRml4ZWQgPSB0aGlzLmZpeGVkO1xuICAgIHRoaXMuX3dpdGhTaWRlYmFyID0gdGhpcy53aXRoU2lkZWJhcjtcbiAgICB0aGlzLl93aXRoU3ViSGVhZGVyID0gdGhpcy53aXRoU3ViaGVhZGVyO1xuICAgIHRoaXMudGV4dEl0ZW1zID0gdGhpcy50ZXh0SXRlbXMgPyB0aGlzLnRleHRJdGVtcy5zbGljZSgwLCAzKSA6IFtdO1xuICAgIHRoaXMuaWNvbkl0ZW1zID0gdGhpcy5pY29uSXRlbXMgPyB0aGlzLmljb25JdGVtcy5zbGljZSgwLCA2KSA6IFtdO1xuICAgIGlmICh0aGlzLmZpeGVkKSB7XG4gICAgICB0aGlzLmNsYXNzTmFtZUZvckJvZHkgKz0gJy1maXhlZC10b3BiYXInO1xuICAgICAgaWYgKHRoaXMud2l0aFN1YmhlYWRlcikge1xuICAgICAgICB0aGlzLmNsYXNzTmFtZUZvckJvZHkgKz0gJy13aXRoLXN1YmhlYWRlcic7XG4gICAgICB9XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZG9jdW1lbnQuYm9keSwgdGhpcy5jbGFzc05hbWVGb3JCb2R5KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5maXhlZCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmRvY3VtZW50LmJvZHksIHRoaXMuY2xhc3NOYW1lRm9yQm9keSk7XG4gICAgfVxuICB9XG5cbiAgZG9BY3Rpb24obmF2aWdhdGlvbjogYW55KSB7XG4gICAgaWYgKG5hdmlnYXRpb24pIHtcbiAgICAgIGlmICh0eXBlb2YgbmF2aWdhdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBuYXZpZ2F0aW9uKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJvdXRlU2VydmljZS5uYXZpZ2F0ZShuYXZpZ2F0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==
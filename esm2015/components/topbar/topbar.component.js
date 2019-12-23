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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWNoYWthbnMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3RvcGJhci90b3BiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7R0FjRztBQUNILE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEcsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQU0vRCxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFrQjtJQWlCN0IsWUFBc0MsUUFBYSxFQUFVLFFBQW1CLEVBQVUsWUFBNkI7UUFBakYsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBaUI7UUFSdEYsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNoQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2IsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDZCxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNuQixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUV2RSxxQkFBZ0IsR0FBRyxVQUFVLENBQUM7SUFFNEYsQ0FBQztJQUUzSCxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDbEQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN6QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ2xFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDbEUsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLGdCQUFnQixJQUFJLGVBQWUsQ0FBQztZQUN6QyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxpQkFBaUIsQ0FBQzthQUM1QztZQUNELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ25FO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUN0RTtJQUNILENBQUM7SUFFRCxRQUFRLENBQUMsVUFBZTtRQUN0QixJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksT0FBTyxVQUFVLEtBQUssVUFBVSxFQUFFO2dCQUNwQyxVQUFVLEVBQUUsQ0FBQzthQUNkO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ3hDO1NBQ0Y7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7NENBaENjLE1BQU0sU0FBQyxRQUFRO1lBQTJDLFNBQVM7WUFBd0IsZUFBZTs7QUFoQjlHO0lBQVIsS0FBSyxFQUFFO2lEQUFnQjtBQUNmO0lBQVIsS0FBSyxFQUFFO3VEQUFzQjtBQUNyQjtJQUFSLEtBQUssRUFBRTtxREFBa0I7QUFDakI7SUFBUixLQUFLLEVBQUU7cURBQWtCO0FBQ2pCO0lBQVIsS0FBSyxFQUFFO3NEQUFvQjtBQUNuQjtJQUFSLEtBQUssRUFBRTt5REFBd0I7QUFDdkI7SUFBUixLQUFLLEVBQUU7MkRBQXdCO0FBRUM7SUFBaEMsV0FBVyxDQUFDLGtCQUFrQixDQUFDO21EQUFnQjtBQUNoQjtJQUEvQixXQUFXLENBQUMsaUJBQWlCLENBQUM7cURBQW1CO0FBQ2I7SUFBcEMsV0FBVyxDQUFDLHNCQUFzQixDQUFDOzBEQUF3QjtBQUNkO0lBQTdDLFdBQVcsQ0FBQywrQkFBK0IsQ0FBQzt3REFBc0I7QUFDbkI7SUFBL0MsV0FBVyxDQUFDLGlDQUFpQyxDQUFDOzBEQUF3QjtBQWI1RCxrQkFBa0I7SUFKOUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFlBQVk7UUFDdEIsa3hFQUFzQztLQUN2QyxDQUFDO0lBa0JhLG1CQUFBLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTtHQWpCbEIsa0JBQWtCLENBaUQ5QjtTQWpEWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuIENvcHlyaWdodCAyMDE5IENoYUthbk5vbVxuXG4gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE9uRGVzdHJveSwgSW5qZWN0LCBSZW5kZXJlcjIsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDa3NSb3V0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9yb3V0ZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2tzLXRvcGJhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi90b3BiYXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIENrc1RvcGJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgZml4ZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHdpdGhTaWRlYmFyOiBib29sZWFuO1xuICBASW5wdXQoKSB0ZXh0SXRlbXM6IGFueVtdO1xuICBASW5wdXQoKSBpY29uSXRlbXM6IGFueVtdO1xuICBASW5wdXQoKSB1c2VySW1nVXJsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHdpdGhTdWJoZWFkZXI6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGJyZWFkY3J1bWJJdGVtczogYW55W107XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5ja3MtdG9wYmFyJykgX2hlYWRlciA9IHRydWU7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuZml4ZWQtdG9wJykgX2ZpeGVkVG9wID0gZmFsc2U7XG4gIEBIb3N0QmluZGluZygnY2xhc3MucG9zaXRpb24tZml4ZWQnKSBfcG9zaXRpb25GaXhlZCA9IGZhbHNlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNrcy10b3BiYXItd2l0aC1zaWRlYmFyJykgX3dpdGhTaWRlYmFyID0gZmFsc2U7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuY2tzLXRvcGJhci13aXRoLXN1YmhlYWRlcicpIF93aXRoU3ViSGVhZGVyID0gZmFsc2U7XG5cbiAgY2xhc3NOYW1lRm9yQm9keSA9ICdja3MtYm9keSc7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgcm91dGVTZXJ2aWNlOiBDa3NSb3V0ZVNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fZml4ZWRUb3AgPSB0aGlzLl9wb3NpdGlvbkZpeGVkID0gdGhpcy5maXhlZDtcbiAgICB0aGlzLl93aXRoU2lkZWJhciA9IHRoaXMud2l0aFNpZGViYXI7XG4gICAgdGhpcy5fd2l0aFN1YkhlYWRlciA9IHRoaXMud2l0aFN1YmhlYWRlcjtcbiAgICB0aGlzLnRleHRJdGVtcyA9IHRoaXMudGV4dEl0ZW1zID8gdGhpcy50ZXh0SXRlbXMuc2xpY2UoMCwgMykgOiBbXTtcbiAgICB0aGlzLmljb25JdGVtcyA9IHRoaXMuaWNvbkl0ZW1zID8gdGhpcy5pY29uSXRlbXMuc2xpY2UoMCwgNikgOiBbXTtcbiAgICBpZiAodGhpcy5maXhlZCkge1xuICAgICAgdGhpcy5jbGFzc05hbWVGb3JCb2R5ICs9ICctZml4ZWQtdG9wYmFyJztcbiAgICAgIGlmICh0aGlzLndpdGhTdWJoZWFkZXIpIHtcbiAgICAgICAgdGhpcy5jbGFzc05hbWVGb3JCb2R5ICs9ICctd2l0aC1zdWJoZWFkZXInO1xuICAgICAgfVxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmRvY3VtZW50LmJvZHksIHRoaXMuY2xhc3NOYW1lRm9yQm9keSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZml4ZWQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5kb2N1bWVudC5ib2R5LCB0aGlzLmNsYXNzTmFtZUZvckJvZHkpO1xuICAgIH1cbiAgfVxuXG4gIGRvQWN0aW9uKG5hdmlnYXRpb246IGFueSkge1xuICAgIGlmIChuYXZpZ2F0aW9uKSB7XG4gICAgICBpZiAodHlwZW9mIG5hdmlnYXRpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgbmF2aWdhdGlvbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yb3V0ZVNlcnZpY2UubmF2aWdhdGUobmF2aWdhdGlvbik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=
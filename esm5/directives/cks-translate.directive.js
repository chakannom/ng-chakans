import * as tslib_1 from "tslib";
/*
 Copyright 2013-2019 the original author or authors from the JHipster project.
 * Modified by ChaKanNom 2019.12.24

 This file is part of the JHipster project, see https://www.jhipster.tech/
 for more information.

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
import { Input, Directive, ElementRef, OnChanges, OnInit, Optional, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CksConfigService } from '../config.service';
/**
 * A wrapper directive on top of the translate pipe as the inbuilt translate directive from ngx-translate is too verbose and buggy
 */
var CksTranslateDirective = /** @class */ (function () {
    function CksTranslateDirective(configService, el, translateService) {
        this.configService = configService;
        this.el = el;
        this.translateService = translateService;
        this.directiveDestroyed = new Subject();
    }
    CksTranslateDirective.prototype.ngOnInit = function () {
        var _this = this;
        var enabled = this.configService.getConfig().i18nEnabled;
        if (enabled) {
            this.translateService.onLangChange.pipe(takeUntil(this.directiveDestroyed)).subscribe(function () {
                _this.getTranslation();
            });
        }
    };
    CksTranslateDirective.prototype.ngOnChanges = function () {
        var enabled = this.configService.getConfig().i18nEnabled;
        if (enabled) {
            this.getTranslation();
        }
    };
    CksTranslateDirective.prototype.ngOnDestroy = function () {
        this.directiveDestroyed.next();
        this.directiveDestroyed.complete();
    };
    CksTranslateDirective.prototype.getTranslation = function () {
        var _this = this;
        this.translateService
            .get(this.cksTranslate, this.translateValues)
            .pipe(takeUntil(this.directiveDestroyed))
            .subscribe(function (value) {
            _this.el.nativeElement.innerHTML = value;
        }, function () {
            return _this.configService.getConfig().noi18nMessage + "[" + _this.cksTranslate + "]";
        });
    };
    CksTranslateDirective.ctorParameters = function () { return [
        { type: CksConfigService },
        { type: ElementRef },
        { type: TranslateService, decorators: [{ type: Optional }] }
    ]; };
    tslib_1.__decorate([
        Input()
    ], CksTranslateDirective.prototype, "cksTranslate", void 0);
    tslib_1.__decorate([
        Input()
    ], CksTranslateDirective.prototype, "translateValues", void 0);
    CksTranslateDirective = tslib_1.__decorate([
        Directive({
            selector: '[cksTranslate]'
        }),
        tslib_1.__param(2, Optional())
    ], CksTranslateDirective);
    return CksTranslateDirective;
}());
export { CksTranslateDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2tzLXRyYW5zbGF0ZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1jaGFrYW5zLyIsInNvdXJjZXMiOlsiZGlyZWN0aXZlcy9ja3MtdHJhbnNsYXRlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtCRztBQUNILE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFckQ7O0dBRUc7QUFJSDtJQU1FLCtCQUFvQixhQUErQixFQUFVLEVBQWMsRUFBc0IsZ0JBQWtDO1FBQS9HLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUFVLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBc0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUZsSCx1QkFBa0IsR0FBRyxJQUFJLE9BQU8sRUFBUyxDQUFDO0lBRTJFLENBQUM7SUFFdkksd0NBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkMsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQUM7UUFDM0QsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7Z0JBQ3BGLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN4QixDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVELDJDQUFXLEdBQVg7UUFDRSxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDLFdBQVcsQ0FBQztRQUUzRCxJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2QjtJQUNILENBQUM7SUFFRCwyQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRU8sOENBQWMsR0FBdEI7UUFBQSxpQkFZQztRQVhDLElBQUksQ0FBQyxnQkFBZ0I7YUFDbEIsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQzthQUM1QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2FBQ3hDLFNBQVMsQ0FDUixVQUFBLEtBQUs7WUFDSCxLQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzFDLENBQUMsRUFDRDtZQUNFLE9BQVUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxhQUFhLFNBQUksS0FBSSxDQUFDLFlBQVksTUFBRyxDQUFDO1FBQ2pGLENBQUMsQ0FDRixDQUFDO0lBQ04sQ0FBQzs7Z0JBcENrQyxnQkFBZ0I7Z0JBQWMsVUFBVTtnQkFBd0MsZ0JBQWdCLHVCQUFyRCxRQUFROztJQUw3RTtRQUFSLEtBQUssRUFBRTsrREFBc0I7SUFDckI7UUFBUixLQUFLLEVBQUU7a0VBQXNCO0lBRm5CLHFCQUFxQjtRQUhqQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1NBQzNCLENBQUM7UUFPOEUsbUJBQUEsUUFBUSxFQUFFLENBQUE7T0FON0UscUJBQXFCLENBMkNqQztJQUFELDRCQUFDO0NBQUEsQUEzQ0QsSUEyQ0M7U0EzQ1kscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiBDb3B5cmlnaHQgMjAxMy0yMDE5IHRoZSBvcmlnaW5hbCBhdXRob3Igb3IgYXV0aG9ycyBmcm9tIHRoZSBKSGlwc3RlciBwcm9qZWN0LlxuICogTW9kaWZpZWQgYnkgQ2hhS2FuTm9tIDIwMTkuMTIuMjRcblxuIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBKSGlwc3RlciBwcm9qZWN0LCBzZWUgaHR0cHM6Ly93d3cuamhpcHN0ZXIudGVjaC9cbiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cblxuIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHsgSW5wdXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT25DaGFuZ2VzLCBPbkluaXQsIE9wdGlvbmFsLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQ2tzQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL2NvbmZpZy5zZXJ2aWNlJztcblxuLyoqXG4gKiBBIHdyYXBwZXIgZGlyZWN0aXZlIG9uIHRvcCBvZiB0aGUgdHJhbnNsYXRlIHBpcGUgYXMgdGhlIGluYnVpbHQgdHJhbnNsYXRlIGRpcmVjdGl2ZSBmcm9tIG5neC10cmFuc2xhdGUgaXMgdG9vIHZlcmJvc2UgYW5kIGJ1Z2d5XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tja3NUcmFuc2xhdGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBDa3NUcmFuc2xhdGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgY2tzVHJhbnNsYXRlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRyYW5zbGF0ZVZhbHVlczogYW55O1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgZGlyZWN0aXZlRGVzdHJveWVkID0gbmV3IFN1YmplY3Q8bmV2ZXI+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDa3NDb25maWdTZXJ2aWNlLCBwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBAT3B0aW9uYWwoKSBwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgZW5hYmxlZCA9IHRoaXMuY29uZmlnU2VydmljZS5nZXRDb25maWcoKS5pMThuRW5hYmxlZDtcbiAgICBpZiAoZW5hYmxlZCkge1xuICAgICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLm9uTGFuZ0NoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLmRpcmVjdGl2ZURlc3Ryb3llZCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuZ2V0VHJhbnNsYXRpb24oKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGNvbnN0IGVuYWJsZWQgPSB0aGlzLmNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnKCkuaTE4bkVuYWJsZWQ7XG5cbiAgICBpZiAoZW5hYmxlZCkge1xuICAgICAgdGhpcy5nZXRUcmFuc2xhdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZGlyZWN0aXZlRGVzdHJveWVkLm5leHQoKTtcbiAgICB0aGlzLmRpcmVjdGl2ZURlc3Ryb3llZC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRUcmFuc2xhdGlvbigpIHtcbiAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2VcbiAgICAgIC5nZXQodGhpcy5ja3NUcmFuc2xhdGUsIHRoaXMudHJhbnNsYXRlVmFsdWVzKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGlyZWN0aXZlRGVzdHJveWVkKSlcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIHZhbHVlID0+IHtcbiAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICByZXR1cm4gYCR7dGhpcy5jb25maWdTZXJ2aWNlLmdldENvbmZpZygpLm5vaTE4bk1lc3NhZ2V9WyR7dGhpcy5ja3NUcmFuc2xhdGV9XWA7XG4gICAgICAgIH1cbiAgICAgICk7XG4gIH1cbn1cbiJdfQ==
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Renderer2, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
var CksActiveLanguageDirective = /** @class */ (function () {
    function CksActiveLanguageDirective(el, renderer, translateService) {
        this.el = el;
        this.renderer = renderer;
        this.translateService = translateService;
    }
    CksActiveLanguageDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.translateService.onLangChange.subscribe(function (event) {
            _this.updateActiveFlag(event.lang);
        });
        this.updateActiveFlag(this.translateService.currentLang);
    };
    CksActiveLanguageDirective.prototype.updateActiveFlag = function (selectedLanguage) {
        if (this.cksActiveLanguage === selectedLanguage) {
            this.renderer.addClass(this.el.nativeElement, 'active');
        }
        else {
            this.renderer.removeClass(this.el.nativeElement, 'active');
        }
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], CksActiveLanguageDirective.prototype, "cksActiveLanguage", void 0);
    CksActiveLanguageDirective = tslib_1.__decorate([
        Directive({
            selector: '[cksActiveLanguage]'
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef, Renderer2, TranslateService])
    ], CksActiveLanguageDirective);
    return CksActiveLanguageDirective;
}());
export { CksActiveLanguageDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWxhbmd1YWdlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWNoYWthbnMvIiwic291cmNlcyI6WyJkaXJlY3RpdmUvYWN0aXZlLWxhbmd1YWdlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxVQUFVLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsZ0JBQWdCLEVBQW1CLE1BQU0scUJBQXFCLENBQUM7QUFLeEU7SUFHRSxvQ0FBb0IsRUFBYyxFQUFVLFFBQW1CLEVBQVUsZ0JBQWtDO1FBQXZGLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFHLENBQUM7SUFFL0csNkNBQVEsR0FBUjtRQUFBLGlCQUtDO1FBSkMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxLQUFzQjtZQUNsRSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQscURBQWdCLEdBQWhCLFVBQWlCLGdCQUFnQjtRQUMvQixJQUFJLElBQUksQ0FBQyxpQkFBaUIsS0FBSyxnQkFBZ0IsRUFBRTtZQUMvQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUN6RDthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDNUQ7SUFDSCxDQUFDO0lBakJRO1FBQVIsS0FBSyxFQUFFOzt5RUFBMkI7SUFEeEIsMEJBQTBCO1FBSHRDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxxQkFBcUI7U0FDaEMsQ0FBQztpREFJd0IsVUFBVSxFQUFvQixTQUFTLEVBQTRCLGdCQUFnQjtPQUhoRywwQkFBMEIsQ0FtQnRDO0lBQUQsaUNBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQW5CWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE9uSW5pdCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSwgTGFuZ0NoYW5nZUV2ZW50IH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tja3NBY3RpdmVMYW5ndWFnZV0nXG59KVxuZXhwb3J0IGNsYXNzIENrc0FjdGl2ZUxhbmd1YWdlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgY2tzQWN0aXZlTGFuZ3VhZ2U6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2Uub25MYW5nQ2hhbmdlLnN1YnNjcmliZSgoZXZlbnQ6IExhbmdDaGFuZ2VFdmVudCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVBY3RpdmVGbGFnKGV2ZW50LmxhbmcpO1xuICAgIH0pO1xuICAgIHRoaXMudXBkYXRlQWN0aXZlRmxhZyh0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuY3VycmVudExhbmcpO1xuICB9XG5cbiAgdXBkYXRlQWN0aXZlRmxhZyhzZWxlY3RlZExhbmd1YWdlKSB7XG4gICAgaWYgKHRoaXMuY2tzQWN0aXZlTGFuZ3VhZ2UgPT09IHNlbGVjdGVkTGFuZ3VhZ2UpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnYWN0aXZlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnYWN0aXZlJyk7XG4gICAgfVxuICB9XG59XG4iXX0=
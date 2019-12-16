import * as tslib_1 from "tslib";
import { Directive, OnInit, ElementRef, Renderer2, Input } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
let CksActiveLanguageDirective = class CksActiveLanguageDirective {
    constructor(el, renderer, translateService) {
        this.el = el;
        this.renderer = renderer;
        this.translateService = translateService;
    }
    ngOnInit() {
        this.translateService.onLangChange.subscribe((event) => {
            this.updateActiveFlag(event.lang);
        });
        this.updateActiveFlag(this.translateService.currentLang);
    }
    updateActiveFlag(selectedLanguage) {
        if (this.cksActiveLanguage === selectedLanguage) {
            this.renderer.addClass(this.el.nativeElement, 'active');
        }
        else {
            this.renderer.removeClass(this.el.nativeElement, 'active');
        }
    }
};
CksActiveLanguageDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: TranslateService }
];
tslib_1.__decorate([
    Input()
], CksActiveLanguageDirective.prototype, "cksActiveLanguage", void 0);
CksActiveLanguageDirective = tslib_1.__decorate([
    Directive({
        selector: '[cksActiveLanguage]'
    })
], CksActiveLanguageDirective);
export { CksActiveLanguageDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWxhbmd1YWdlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWNoYWthbnMvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL2FjdGl2ZS1sYW5ndWFnZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUt4RSxJQUFhLDBCQUEwQixHQUF2QyxNQUFhLDBCQUEwQjtJQUdyQyxZQUFvQixFQUFjLEVBQVUsUUFBbUIsRUFBVSxnQkFBa0M7UUFBdkYsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQUcsQ0FBQztJQUUvRyxRQUFRO1FBQ04sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFzQixFQUFFLEVBQUU7WUFDdEUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELGdCQUFnQixDQUFDLGdCQUFnQjtRQUMvQixJQUFJLElBQUksQ0FBQyxpQkFBaUIsS0FBSyxnQkFBZ0IsRUFBRTtZQUMvQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUN6RDthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDNUQ7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7WUFoQnlCLFVBQVU7WUFBb0IsU0FBUztZQUE0QixnQkFBZ0I7O0FBRmxHO0lBQVIsS0FBSyxFQUFFO3FFQUEyQjtBQUR4QiwwQkFBMEI7SUFIdEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHFCQUFxQjtLQUNoQyxDQUFDO0dBQ1csMEJBQTBCLENBbUJ0QztTQW5CWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE9uSW5pdCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSwgTGFuZ0NoYW5nZUV2ZW50IH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tja3NBY3RpdmVMYW5ndWFnZV0nXG59KVxuZXhwb3J0IGNsYXNzIENrc0FjdGl2ZUxhbmd1YWdlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgY2tzQWN0aXZlTGFuZ3VhZ2U6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2Uub25MYW5nQ2hhbmdlLnN1YnNjcmliZSgoZXZlbnQ6IExhbmdDaGFuZ2VFdmVudCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVBY3RpdmVGbGFnKGV2ZW50LmxhbmcpO1xuICAgIH0pO1xuICAgIHRoaXMudXBkYXRlQWN0aXZlRmxhZyh0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuY3VycmVudExhbmcpO1xuICB9XG5cbiAgdXBkYXRlQWN0aXZlRmxhZyhzZWxlY3RlZExhbmd1YWdlKSB7XG4gICAgaWYgKHRoaXMuY2tzQWN0aXZlTGFuZ3VhZ2UgPT09IHNlbGVjdGVkTGFuZ3VhZ2UpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnYWN0aXZlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnYWN0aXZlJyk7XG4gICAgfVxuICB9XG59XG4iXX0=
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Renderer2, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
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
export { CksActiveLanguageDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWxhbmd1YWdlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWNoYWthbnMvIiwic291cmNlcyI6WyJkaXJlY3RpdmUvYWN0aXZlLWxhbmd1YWdlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxVQUFVLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsZ0JBQWdCLEVBQW1CLE1BQU0scUJBQXFCLENBQUM7QUFLeEUsSUFBYSwwQkFBMEIsR0FBdkMsTUFBYSwwQkFBMEI7SUFHckMsWUFBb0IsRUFBYyxFQUFVLFFBQW1CLEVBQVUsZ0JBQWtDO1FBQXZGLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFHLENBQUM7SUFFL0csUUFBUTtRQUNOLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBc0IsRUFBRSxFQUFFO1lBQ3RFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxnQkFBZ0I7UUFDL0IsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEtBQUssZ0JBQWdCLEVBQUU7WUFDL0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDekQ7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQzVEO0lBQ0gsQ0FBQztDQUNGLENBQUE7QUFsQlU7SUFBUixLQUFLLEVBQUU7O3FFQUEyQjtBQUR4QiwwQkFBMEI7SUFIdEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHFCQUFxQjtLQUNoQyxDQUFDOzZDQUl3QixVQUFVLEVBQW9CLFNBQVMsRUFBNEIsZ0JBQWdCO0dBSGhHLDBCQUEwQixDQW1CdEM7U0FuQlksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPbkluaXQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UsIExhbmdDaGFuZ2VFdmVudCB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY2tzQWN0aXZlTGFuZ3VhZ2VdJ1xufSlcbmV4cG9ydCBjbGFzcyBDa3NBY3RpdmVMYW5ndWFnZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGNrc0FjdGl2ZUxhbmd1YWdlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLm9uTGFuZ0NoYW5nZS5zdWJzY3JpYmUoKGV2ZW50OiBMYW5nQ2hhbmdlRXZlbnQpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlQWN0aXZlRmxhZyhldmVudC5sYW5nKTtcbiAgICB9KTtcbiAgICB0aGlzLnVwZGF0ZUFjdGl2ZUZsYWcodGhpcy50cmFuc2xhdGVTZXJ2aWNlLmN1cnJlbnRMYW5nKTtcbiAgfVxuXG4gIHVwZGF0ZUFjdGl2ZUZsYWcoc2VsZWN0ZWRMYW5ndWFnZSkge1xuICAgIGlmICh0aGlzLmNrc0FjdGl2ZUxhbmd1YWdlID09PSBzZWxlY3RlZExhbmd1YWdlKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2FjdGl2ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2FjdGl2ZScpO1xuICAgIH1cbiAgfVxufVxuIl19
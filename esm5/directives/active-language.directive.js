import * as tslib_1 from "tslib";
import { Directive, OnInit, ElementRef, Renderer2, Input } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
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
    CksActiveLanguageDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: TranslateService }
    ]; };
    tslib_1.__decorate([
        Input()
    ], CksActiveLanguageDirective.prototype, "cksActiveLanguage", void 0);
    CksActiveLanguageDirective = tslib_1.__decorate([
        Directive({
            selector: '[cksActiveLanguage]'
        })
    ], CksActiveLanguageDirective);
    return CksActiveLanguageDirective;
}());
export { CksActiveLanguageDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWxhbmd1YWdlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWNoYWthbnMvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL2FjdGl2ZS1sYW5ndWFnZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUt4RTtJQUdFLG9DQUFvQixFQUFjLEVBQVUsUUFBbUIsRUFBVSxnQkFBa0M7UUFBdkYsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQUcsQ0FBQztJQUUvRyw2Q0FBUSxHQUFSO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQXNCO1lBQ2xFLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCxxREFBZ0IsR0FBaEIsVUFBaUIsZ0JBQWdCO1FBQy9CLElBQUksSUFBSSxDQUFDLGlCQUFpQixLQUFLLGdCQUFnQixFQUFFO1lBQy9DLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ3pEO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUM1RDtJQUNILENBQUM7O2dCQWZ1QixVQUFVO2dCQUFvQixTQUFTO2dCQUE0QixnQkFBZ0I7O0lBRmxHO1FBQVIsS0FBSyxFQUFFO3lFQUEyQjtJQUR4QiwwQkFBMEI7UUFIdEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHFCQUFxQjtTQUNoQyxDQUFDO09BQ1csMEJBQTBCLENBbUJ0QztJQUFELGlDQUFDO0NBQUEsQUFuQkQsSUFtQkM7U0FuQlksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPbkluaXQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UsIExhbmdDaGFuZ2VFdmVudCB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY2tzQWN0aXZlTGFuZ3VhZ2VdJ1xufSlcbmV4cG9ydCBjbGFzcyBDa3NBY3RpdmVMYW5ndWFnZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGNrc0FjdGl2ZUxhbmd1YWdlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLm9uTGFuZ0NoYW5nZS5zdWJzY3JpYmUoKGV2ZW50OiBMYW5nQ2hhbmdlRXZlbnQpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlQWN0aXZlRmxhZyhldmVudC5sYW5nKTtcbiAgICB9KTtcbiAgICB0aGlzLnVwZGF0ZUFjdGl2ZUZsYWcodGhpcy50cmFuc2xhdGVTZXJ2aWNlLmN1cnJlbnRMYW5nKTtcbiAgfVxuXG4gIHVwZGF0ZUFjdGl2ZUZsYWcoc2VsZWN0ZWRMYW5ndWFnZSkge1xuICAgIGlmICh0aGlzLmNrc0FjdGl2ZUxhbmd1YWdlID09PSBzZWxlY3RlZExhbmd1YWdlKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2FjdGl2ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2FjdGl2ZScpO1xuICAgIH1cbiAgfVxufVxuIl19
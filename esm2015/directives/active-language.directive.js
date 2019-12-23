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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWxhbmd1YWdlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWNoYWthbnMvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL2FjdGl2ZS1sYW5ndWFnZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7OztHQWNHO0FBQ0gsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBS3hFLElBQWEsMEJBQTBCLEdBQXZDLE1BQWEsMEJBQTBCO0lBR3JDLFlBQW9CLEVBQWMsRUFBVSxRQUFtQixFQUFVLGdCQUFrQztRQUF2RixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFBRyxDQUFDO0lBRS9HLFFBQVE7UUFDTixJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQXNCLEVBQUUsRUFBRTtZQUN0RSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsZ0JBQWdCO1FBQy9CLElBQUksSUFBSSxDQUFDLGlCQUFpQixLQUFLLGdCQUFnQixFQUFFO1lBQy9DLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ3pEO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUM1RDtJQUNILENBQUM7Q0FDRixDQUFBOztZQWhCeUIsVUFBVTtZQUFvQixTQUFTO1lBQTRCLGdCQUFnQjs7QUFGbEc7SUFBUixLQUFLLEVBQUU7cUVBQTJCO0FBRHhCLDBCQUEwQjtJQUh0QyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUscUJBQXFCO0tBQ2hDLENBQUM7R0FDVywwQkFBMEIsQ0FtQnRDO1NBbkJZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gQ29weXJpZ2h0IDIwMTkgQ2hhS2FuTm9tXG5cbiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7IERpcmVjdGl2ZSwgT25Jbml0LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlLCBMYW5nQ2hhbmdlRXZlbnQgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2Nrc0FjdGl2ZUxhbmd1YWdlXSdcbn0pXG5leHBvcnQgY2xhc3MgQ2tzQWN0aXZlTGFuZ3VhZ2VEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBja3NBY3RpdmVMYW5ndWFnZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS5vbkxhbmdDaGFuZ2Uuc3Vic2NyaWJlKChldmVudDogTGFuZ0NoYW5nZUV2ZW50KSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZUFjdGl2ZUZsYWcoZXZlbnQubGFuZyk7XG4gICAgfSk7XG4gICAgdGhpcy51cGRhdGVBY3RpdmVGbGFnKHRoaXMudHJhbnNsYXRlU2VydmljZS5jdXJyZW50TGFuZyk7XG4gIH1cblxuICB1cGRhdGVBY3RpdmVGbGFnKHNlbGVjdGVkTGFuZ3VhZ2UpIHtcbiAgICBpZiAodGhpcy5ja3NBY3RpdmVMYW5ndWFnZSA9PT0gc2VsZWN0ZWRMYW5ndWFnZSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdhY3RpdmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdhY3RpdmUnKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
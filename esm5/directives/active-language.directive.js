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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWxhbmd1YWdlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWNoYWthbnMvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL2FjdGl2ZS1sYW5ndWFnZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7OztHQWNHO0FBQ0gsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBS3hFO0lBR0Usb0NBQW9CLEVBQWMsRUFBVSxRQUFtQixFQUFVLGdCQUFrQztRQUF2RixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFBRyxDQUFDO0lBRS9HLDZDQUFRLEdBQVI7UUFBQSxpQkFLQztRQUpDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUMsS0FBc0I7WUFDbEUsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELHFEQUFnQixHQUFoQixVQUFpQixnQkFBZ0I7UUFDL0IsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEtBQUssZ0JBQWdCLEVBQUU7WUFDL0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDekQ7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQzVEO0lBQ0gsQ0FBQzs7Z0JBZnVCLFVBQVU7Z0JBQW9CLFNBQVM7Z0JBQTRCLGdCQUFnQjs7SUFGbEc7UUFBUixLQUFLLEVBQUU7eUVBQTJCO0lBRHhCLDBCQUEwQjtRQUh0QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUscUJBQXFCO1NBQ2hDLENBQUM7T0FDVywwQkFBMEIsQ0FtQnRDO0lBQUQsaUNBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQW5CWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuIENvcHlyaWdodCAyMDE5IENoYUthbk5vbVxuXG4gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgeyBEaXJlY3RpdmUsIE9uSW5pdCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSwgTGFuZ0NoYW5nZUV2ZW50IH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tja3NBY3RpdmVMYW5ndWFnZV0nXG59KVxuZXhwb3J0IGNsYXNzIENrc0FjdGl2ZUxhbmd1YWdlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgY2tzQWN0aXZlTGFuZ3VhZ2U6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2Uub25MYW5nQ2hhbmdlLnN1YnNjcmliZSgoZXZlbnQ6IExhbmdDaGFuZ2VFdmVudCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVBY3RpdmVGbGFnKGV2ZW50LmxhbmcpO1xuICAgIH0pO1xuICAgIHRoaXMudXBkYXRlQWN0aXZlRmxhZyh0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuY3VycmVudExhbmcpO1xuICB9XG5cbiAgdXBkYXRlQWN0aXZlRmxhZyhzZWxlY3RlZExhbmd1YWdlKSB7XG4gICAgaWYgKHRoaXMuY2tzQWN0aXZlTGFuZ3VhZ2UgPT09IHNlbGVjdGVkTGFuZ3VhZ2UpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnYWN0aXZlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnYWN0aXZlJyk7XG4gICAgfVxuICB9XG59XG4iXX0=
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
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
var CksDynamicComponent = /** @class */ (function () {
    function CksDynamicComponent(route) {
        this.route = route;
    }
    CksDynamicComponent.prototype.ngOnInit = function () {
        var componentFactory = this.route.snapshot.data['factory'];
        this.content.createComponent(componentFactory);
    };
    CksDynamicComponent.ctorParameters = function () { return [
        { type: ActivatedRoute }
    ]; };
    tslib_1.__decorate([
        ViewChild('content', { read: ViewContainerRef, static: true })
    ], CksDynamicComponent.prototype, "content", void 0);
    CksDynamicComponent = tslib_1.__decorate([
        Component({
            selector: 'cks-dynamic',
            template: "<div #content></div>\n"
        })
    ], CksDynamicComponent);
    return CksDynamicComponent;
}());
export { CksDynamicComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1jaGFrYW5zLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9keW5hbWljL2R5bmFtaWMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7R0FjRztBQUNILE9BQU8sRUFBRSxTQUFTLEVBQVUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU1qRDtJQUlFLDZCQUFvQixLQUFxQjtRQUFyQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtJQUFHLENBQUM7SUFFN0Msc0NBQVEsR0FBUjtRQUNFLElBQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDakQsQ0FBQzs7Z0JBTDBCLGNBQWM7O0lBRnpDO1FBREMsU0FBUyxDQUFDLFNBQVMsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7d0RBQ3JDO0lBRmYsbUJBQW1CO1FBSi9CLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLGtDQUF1QztTQUN4QyxDQUFDO09BQ1csbUJBQW1CLENBVS9CO0lBQUQsMEJBQUM7Q0FBQSxBQVZELElBVUM7U0FWWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuIENvcHlyaWdodCAyMDE5IENoYUthbk5vbVxuXG4gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nrcy1keW5hbWljJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2R5bmFtaWMuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIENrc0R5bmFtaWNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAVmlld0NoaWxkKCdjb250ZW50JywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgY29udGVudDogVmlld0NvbnRhaW5lclJlZjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5kYXRhWydmYWN0b3J5J107XG4gICAgdGhpcy5jb250ZW50LmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRGYWN0b3J5KTtcbiAgfVxufVxuIl19
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
import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
let CksRouteService = class CksRouteService {
    constructor(router) {
        this.router = router;
    }
    navigate(navigation) {
        if (typeof navigation === 'string') {
            window.location.href = navigation;
        }
        else {
            const navigationExtras = {};
            if (navigation.queryParams) {
                navigationExtras.queryParams = navigation.queryParams;
            }
            if (navigation.fragment) {
                navigationExtras.fragment = navigation.fragment;
            }
            if (navigation.routerLink && navigation.routerLink.length > 0) {
                this.router.navigate(navigation.routerLink, navigationExtras);
            }
        }
    }
};
CksRouteService.ctorParameters = () => [
    { type: Router }
];
CksRouteService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CksRouteService_Factory() { return new CksRouteService(i0.ɵɵinject(i1.Router)); }, token: CksRouteService, providedIn: "root" });
CksRouteService = tslib_1.__decorate([
    Injectable({ providedIn: 'root' })
], CksRouteService);
export { CksRouteService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWNoYWthbnMvIiwic291cmNlcyI6WyJzZXJ2aWNlcy9yb3V0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7R0FjRztBQUNILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7QUFHM0QsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtJQUMxQixZQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFHLENBQUM7SUFFdEMsUUFBUSxDQUFDLFVBQWU7UUFDdEIsSUFBSSxPQUFPLFVBQVUsS0FBSyxRQUFRLEVBQUU7WUFDbEMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO1NBQ25DO2FBQU07WUFDTCxNQUFNLGdCQUFnQixHQUFxQixFQUFFLENBQUM7WUFDOUMsSUFBSSxVQUFVLENBQUMsV0FBVyxFQUFFO2dCQUMxQixnQkFBZ0IsQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQzthQUN2RDtZQUNELElBQUksVUFBVSxDQUFDLFFBQVEsRUFBRTtnQkFDdkIsZ0JBQWdCLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUM7YUFDakQ7WUFDRCxJQUFJLFVBQVUsQ0FBQyxVQUFVLElBQUksVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUM3RCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLGdCQUFnQixDQUFDLENBQUM7YUFDL0Q7U0FDRjtJQUNILENBQUM7Q0FDRixDQUFBOztZQWxCNkIsTUFBTTs7O0FBRHZCLGVBQWU7SUFEM0IsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO0dBQ3RCLGVBQWUsQ0FtQjNCO1NBbkJZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuIENvcHlyaWdodCAyMDE5IENoYUthbk5vbVxuXG4gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uRXh0cmFzLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIENrc1JvdXRlU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHt9XG5cbiAgbmF2aWdhdGUobmF2aWdhdGlvbjogYW55KSB7XG4gICAgaWYgKHR5cGVvZiBuYXZpZ2F0aW9uID09PSAnc3RyaW5nJykge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBuYXZpZ2F0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge307XG4gICAgICBpZiAobmF2aWdhdGlvbi5xdWVyeVBhcmFtcykge1xuICAgICAgICBuYXZpZ2F0aW9uRXh0cmFzLnF1ZXJ5UGFyYW1zID0gbmF2aWdhdGlvbi5xdWVyeVBhcmFtcztcbiAgICAgIH1cbiAgICAgIGlmIChuYXZpZ2F0aW9uLmZyYWdtZW50KSB7XG4gICAgICAgIG5hdmlnYXRpb25FeHRyYXMuZnJhZ21lbnQgPSBuYXZpZ2F0aW9uLmZyYWdtZW50O1xuICAgICAgfVxuICAgICAgaWYgKG5hdmlnYXRpb24ucm91dGVyTGluayAmJiBuYXZpZ2F0aW9uLnJvdXRlckxpbmsubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShuYXZpZ2F0aW9uLnJvdXRlckxpbmssIG5hdmlnYXRpb25FeHRyYXMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19
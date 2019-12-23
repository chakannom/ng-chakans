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
var CksRouteService = /** @class */ (function () {
    function CksRouteService(router) {
        this.router = router;
    }
    CksRouteService.prototype.navigate = function (navigation) {
        if (typeof navigation === 'string') {
            window.location.href = navigation;
        }
        else {
            var navigationExtras = {};
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
    };
    CksRouteService.ctorParameters = function () { return [
        { type: Router }
    ]; };
    CksRouteService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CksRouteService_Factory() { return new CksRouteService(i0.ɵɵinject(i1.Router)); }, token: CksRouteService, providedIn: "root" });
    CksRouteService = tslib_1.__decorate([
        Injectable({ providedIn: 'root' })
    ], CksRouteService);
    return CksRouteService;
}());
export { CksRouteService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWNoYWthbnMvIiwic291cmNlcyI6WyJzZXJ2aWNlcy9yb3V0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7R0FjRztBQUNILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7QUFHM0Q7SUFDRSx5QkFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFBRyxDQUFDO0lBRXRDLGtDQUFRLEdBQVIsVUFBUyxVQUFlO1FBQ3RCLElBQUksT0FBTyxVQUFVLEtBQUssUUFBUSxFQUFFO1lBQ2xDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztTQUNuQzthQUFNO1lBQ0wsSUFBTSxnQkFBZ0IsR0FBcUIsRUFBRSxDQUFDO1lBQzlDLElBQUksVUFBVSxDQUFDLFdBQVcsRUFBRTtnQkFDMUIsZ0JBQWdCLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUM7YUFDdkQ7WUFDRCxJQUFJLFVBQVUsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3ZCLGdCQUFnQixDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDO2FBQ2pEO1lBQ0QsSUFBSSxVQUFVLENBQUMsVUFBVSxJQUFJLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDN0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO2FBQy9EO1NBQ0Y7SUFDSCxDQUFDOztnQkFqQjJCLE1BQU07OztJQUR2QixlQUFlO1FBRDNCLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztPQUN0QixlQUFlLENBbUIzQjswQkF0Q0Q7Q0FzQ0MsQUFuQkQsSUFtQkM7U0FuQlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gQ29weXJpZ2h0IDIwMTkgQ2hhS2FuTm9tXG5cbiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25FeHRyYXMsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQ2tzUm91dGVTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cblxuICBuYXZpZ2F0ZShuYXZpZ2F0aW9uOiBhbnkpIHtcbiAgICBpZiAodHlwZW9mIG5hdmlnYXRpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IG5hdmlnYXRpb247XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSB7fTtcbiAgICAgIGlmIChuYXZpZ2F0aW9uLnF1ZXJ5UGFyYW1zKSB7XG4gICAgICAgIG5hdmlnYXRpb25FeHRyYXMucXVlcnlQYXJhbXMgPSBuYXZpZ2F0aW9uLnF1ZXJ5UGFyYW1zO1xuICAgICAgfVxuICAgICAgaWYgKG5hdmlnYXRpb24uZnJhZ21lbnQpIHtcbiAgICAgICAgbmF2aWdhdGlvbkV4dHJhcy5mcmFnbWVudCA9IG5hdmlnYXRpb24uZnJhZ21lbnQ7XG4gICAgICB9XG4gICAgICBpZiAobmF2aWdhdGlvbi5yb3V0ZXJMaW5rICYmIG5hdmlnYXRpb24ucm91dGVyTGluay5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKG5hdmlnYXRpb24ucm91dGVyTGluaywgbmF2aWdhdGlvbkV4dHJhcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=
import * as tslib_1 from "tslib";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWNoYWthbnMvIiwic291cmNlcyI6WyJzZXJ2aWNlcy9yb3V0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBRzNEO0lBQ0UseUJBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUcsQ0FBQztJQUV0QyxrQ0FBUSxHQUFSLFVBQVMsVUFBZTtRQUN0QixJQUFJLE9BQU8sVUFBVSxLQUFLLFFBQVEsRUFBRTtZQUNsQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7U0FDbkM7YUFBTTtZQUNMLElBQU0sZ0JBQWdCLEdBQXFCLEVBQUUsQ0FBQztZQUM5QyxJQUFJLFVBQVUsQ0FBQyxXQUFXLEVBQUU7Z0JBQzFCLGdCQUFnQixDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDO2FBQ3ZEO1lBQ0QsSUFBSSxVQUFVLENBQUMsUUFBUSxFQUFFO2dCQUN2QixnQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQzthQUNqRDtZQUNELElBQUksVUFBVSxDQUFDLFVBQVUsSUFBSSxVQUFVLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzdELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQzthQUMvRDtTQUNGO0lBQ0gsQ0FBQzs7Z0JBakIyQixNQUFNOzs7SUFEdkIsZUFBZTtRQUQzQixVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7T0FDdEIsZUFBZSxDQW1CM0I7MEJBdkJEO0NBdUJDLEFBbkJELElBbUJDO1NBbkJZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uRXh0cmFzLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIENrc1JvdXRlU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHt9XG5cbiAgbmF2aWdhdGUobmF2aWdhdGlvbjogYW55KSB7XG4gICAgaWYgKHR5cGVvZiBuYXZpZ2F0aW9uID09PSAnc3RyaW5nJykge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBuYXZpZ2F0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge307XG4gICAgICBpZiAobmF2aWdhdGlvbi5xdWVyeVBhcmFtcykge1xuICAgICAgICBuYXZpZ2F0aW9uRXh0cmFzLnF1ZXJ5UGFyYW1zID0gbmF2aWdhdGlvbi5xdWVyeVBhcmFtcztcbiAgICAgIH1cbiAgICAgIGlmIChuYXZpZ2F0aW9uLmZyYWdtZW50KSB7XG4gICAgICAgIG5hdmlnYXRpb25FeHRyYXMuZnJhZ21lbnQgPSBuYXZpZ2F0aW9uLmZyYWdtZW50O1xuICAgICAgfVxuICAgICAgaWYgKG5hdmlnYXRpb24ucm91dGVyTGluayAmJiBuYXZpZ2F0aW9uLnJvdXRlckxpbmsubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShuYXZpZ2F0aW9uLnJvdXRlckxpbmssIG5hdmlnYXRpb25FeHRyYXMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19
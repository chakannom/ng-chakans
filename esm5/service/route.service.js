import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
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
    CksRouteService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CksRouteService_Factory() { return new CksRouteService(i0.ɵɵinject(i1.Router)); }, token: CksRouteService, providedIn: "root" });
    CksRouteService = tslib_1.__decorate([
        Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], CksRouteService);
    return CksRouteService;
}());
export { CksRouteService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWNoYWthbnMvIiwic291cmNlcyI6WyJzZXJ2aWNlL3JvdXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFvQixNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBRzNEO0lBQ0UseUJBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUcsQ0FBQztJQUV0QyxrQ0FBUSxHQUFSLFVBQVMsVUFBZTtRQUN0QixJQUFJLE9BQU8sVUFBVSxLQUFLLFFBQVEsRUFBRTtZQUNsQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7U0FDbkM7YUFBTTtZQUNMLElBQU0sZ0JBQWdCLEdBQXFCLEVBQUUsQ0FBQztZQUM5QyxJQUFJLFVBQVUsQ0FBQyxXQUFXLEVBQUU7Z0JBQzFCLGdCQUFnQixDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDO2FBQ3ZEO1lBQ0QsSUFBSSxVQUFVLENBQUMsUUFBUSxFQUFFO2dCQUN2QixnQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQzthQUNqRDtZQUNELElBQUksVUFBVSxDQUFDLFVBQVUsSUFBSSxVQUFVLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzdELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQzthQUMvRDtTQUNGO0lBQ0gsQ0FBQzs7SUFsQlUsZUFBZTtRQUQzQixVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7aURBRUwsTUFBTTtPQUR2QixlQUFlLENBbUIzQjswQkF2QkQ7Q0F1QkMsQUFuQkQsSUFtQkM7U0FuQlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25FeHRyYXMsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQ2tzUm91dGVTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cblxuICBuYXZpZ2F0ZShuYXZpZ2F0aW9uOiBhbnkpIHtcbiAgICBpZiAodHlwZW9mIG5hdmlnYXRpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IG5hdmlnYXRpb247XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSB7fTtcbiAgICAgIGlmIChuYXZpZ2F0aW9uLnF1ZXJ5UGFyYW1zKSB7XG4gICAgICAgIG5hdmlnYXRpb25FeHRyYXMucXVlcnlQYXJhbXMgPSBuYXZpZ2F0aW9uLnF1ZXJ5UGFyYW1zO1xuICAgICAgfVxuICAgICAgaWYgKG5hdmlnYXRpb24uZnJhZ21lbnQpIHtcbiAgICAgICAgbmF2aWdhdGlvbkV4dHJhcy5mcmFnbWVudCA9IG5hdmlnYXRpb24uZnJhZ21lbnQ7XG4gICAgICB9XG4gICAgICBpZiAobmF2aWdhdGlvbi5yb3V0ZXJMaW5rICYmIG5hdmlnYXRpb24ucm91dGVyTGluay5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKG5hdmlnYXRpb24ucm91dGVyTGluaywgbmF2aWdhdGlvbkV4dHJhcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=
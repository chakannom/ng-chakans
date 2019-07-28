import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
var CksRouteService = /** @class */ (function () {
    function CksRouteService(router) {
        this.router = router;
    }
    CksRouteService.prototype.navigate = function (href) {
        if (typeof href === 'string') {
            window.location.href = href;
        }
        else {
            var navigationExtras = {};
            if (href.queryParams) {
                navigationExtras.queryParams = href.queryParams;
            }
            if (href.fragment) {
                navigationExtras.fragment = href.fragment;
            }
            if (href.routerLink && href.routerLink.length > 0) {
                this.router.navigate(href.routerLink, navigationExtras);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWNoYWthbnMvIiwic291cmNlcyI6WyJzZXJ2aWNlL3JvdXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFvQixNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBRzNEO0lBQ0UseUJBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUcsQ0FBQztJQUV0QyxrQ0FBUSxHQUFSLFVBQVMsSUFBUztRQUNoQixJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUM1QixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDN0I7YUFBTTtZQUNMLElBQU0sZ0JBQWdCLEdBQXFCLEVBQUUsQ0FBQztZQUM5QyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ3BCLGdCQUFnQixDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ2pEO1lBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNqQixnQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUMzQztZQUNELElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQzthQUN6RDtTQUNGO0lBQ0gsQ0FBQzs7SUFsQlUsZUFBZTtRQUQzQixVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7aURBRUwsTUFBTTtPQUR2QixlQUFlLENBbUIzQjswQkF2QkQ7Q0F1QkMsQUFuQkQsSUFtQkM7U0FuQlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25FeHRyYXMsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQ2tzUm91dGVTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cblxuICBuYXZpZ2F0ZShocmVmOiBhbnkpIHtcbiAgICBpZiAodHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGhyZWY7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSB7fTtcbiAgICAgIGlmIChocmVmLnF1ZXJ5UGFyYW1zKSB7XG4gICAgICAgIG5hdmlnYXRpb25FeHRyYXMucXVlcnlQYXJhbXMgPSBocmVmLnF1ZXJ5UGFyYW1zO1xuICAgICAgfVxuICAgICAgaWYgKGhyZWYuZnJhZ21lbnQpIHtcbiAgICAgICAgbmF2aWdhdGlvbkV4dHJhcy5mcmFnbWVudCA9IGhyZWYuZnJhZ21lbnQ7XG4gICAgICB9XG4gICAgICBpZiAoaHJlZi5yb3V0ZXJMaW5rICYmIGhyZWYucm91dGVyTGluay5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKGhyZWYucm91dGVyTGluaywgbmF2aWdhdGlvbkV4dHJhcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=
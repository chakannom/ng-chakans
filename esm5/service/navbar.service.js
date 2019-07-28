import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
var CksNavbarService = /** @class */ (function () {
    function CksNavbarService() {
        this.navbarViewed = new BehaviorSubject(true);
    }
    Object.defineProperty(CksNavbarService.prototype, "isNavbarViewed", {
        get: function () {
            return this.navbarViewed.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    CksNavbarService.prototype.setNavbarViewed = function (navbarViewed) {
        this.navbarViewed.next(navbarViewed);
    };
    CksNavbarService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CksNavbarService_Factory() { return new CksNavbarService(); }, token: CksNavbarService, providedIn: "root" });
    CksNavbarService = tslib_1.__decorate([
        Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [])
    ], CksNavbarService);
    return CksNavbarService;
}());
export { CksNavbarService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1jaGFrYW5zLyIsInNvdXJjZXMiOlsic2VydmljZS9uYXZiYXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUd2QztJQUdFO1FBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLGVBQWUsQ0FBVSxJQUFJLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsc0JBQUksNENBQWM7YUFBbEI7WUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDMUMsQ0FBQzs7O09BQUE7SUFFRCwwQ0FBZSxHQUFmLFVBQWdCLFlBQXFCO1FBQ25DLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7O0lBYlUsZ0JBQWdCO1FBRDVCLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQzs7T0FDdEIsZ0JBQWdCLENBYzVCOzJCQWxCRDtDQWtCQyxBQWRELElBY0M7U0FkWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBDa3NOYXZiYXJTZXJ2aWNlIHtcbiAgbmF2YmFyVmlld2VkOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5uYXZiYXJWaWV3ZWQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KHRydWUpO1xuICB9XG5cbiAgZ2V0IGlzTmF2YmFyVmlld2VkKCkge1xuICAgIHJldHVybiB0aGlzLm5hdmJhclZpZXdlZC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIHNldE5hdmJhclZpZXdlZChuYXZiYXJWaWV3ZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLm5hdmJhclZpZXdlZC5uZXh0KG5hdmJhclZpZXdlZCk7XG4gIH1cbn1cbiJdfQ==
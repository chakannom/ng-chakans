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
        Injectable({ providedIn: 'root' })
    ], CksNavbarService);
    return CksNavbarService;
}());
export { CksNavbarService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1jaGFrYW5zLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFHdkM7SUFHRTtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxlQUFlLENBQVUsSUFBSSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELHNCQUFJLDRDQUFjO2FBQWxCO1lBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzFDLENBQUM7OztPQUFBO0lBRUQsMENBQWUsR0FBZixVQUFnQixZQUFxQjtRQUNuQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN2QyxDQUFDOztJQWJVLGdCQUFnQjtRQUQ1QixVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7T0FDdEIsZ0JBQWdCLENBYzVCOzJCQWxCRDtDQWtCQyxBQWRELElBY0M7U0FkWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBDa3NOYXZiYXJTZXJ2aWNlIHtcbiAgbmF2YmFyVmlld2VkOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5uYXZiYXJWaWV3ZWQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KHRydWUpO1xuICB9XG5cbiAgZ2V0IGlzTmF2YmFyVmlld2VkKCkge1xuICAgIHJldHVybiB0aGlzLm5hdmJhclZpZXdlZC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIHNldE5hdmJhclZpZXdlZChuYXZiYXJWaWV3ZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLm5hdmJhclZpZXdlZC5uZXh0KG5hdmJhclZpZXdlZCk7XG4gIH1cbn1cbiJdfQ==
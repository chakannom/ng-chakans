import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
var CksSidebarService = /** @class */ (function () {
    function CksSidebarService() {
        this.sidebarViewed = new BehaviorSubject(true);
    }
    Object.defineProperty(CksSidebarService.prototype, "isSidebarViewed", {
        get: function () {
            return this.sidebarViewed.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    CksSidebarService.prototype.setSidebarViewed = function (sidebarViewed) {
        this.sidebarViewed.next(sidebarViewed);
    };
    CksSidebarService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CksSidebarService_Factory() { return new CksSidebarService(); }, token: CksSidebarService, providedIn: "root" });
    CksSidebarService = tslib_1.__decorate([
        Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [])
    ], CksSidebarService);
    return CksSidebarService;
}());
export { CksSidebarService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctY2hha2Fucy8iLCJzb3VyY2VzIjpbInNlcnZpY2Uvc2lkZWJhci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBRXZDO0lBR0U7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksZUFBZSxDQUFVLElBQUksQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCxzQkFBSSw4Q0FBZTthQUFuQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMzQyxDQUFDOzs7T0FBQTtJQUVELDRDQUFnQixHQUFoQixVQUFpQixhQUFzQjtRQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN6QyxDQUFDOztJQWJVLGlCQUFpQjtRQUQ3QixVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7O09BQ3RCLGlCQUFpQixDQWM3Qjs0QkFqQkQ7Q0FpQkMsQUFkRCxJQWNDO1NBZFksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIENrc1NpZGViYXJTZXJ2aWNlIHtcbiAgc2lkZWJhclZpZXdlZDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2lkZWJhclZpZXdlZCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4odHJ1ZSk7XG4gIH1cblxuICBnZXQgaXNTaWRlYmFyVmlld2VkKCkge1xuICAgIHJldHVybiB0aGlzLnNpZGViYXJWaWV3ZWQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBzZXRTaWRlYmFyVmlld2VkKHNpZGViYXJWaWV3ZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNpZGViYXJWaWV3ZWQubmV4dChzaWRlYmFyVmlld2VkKTtcbiAgfVxufVxuIl19
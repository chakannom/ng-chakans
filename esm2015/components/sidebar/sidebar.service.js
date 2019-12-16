import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
let CksSidebarService = class CksSidebarService {
    constructor() {
        this.sidebarViewed = new BehaviorSubject(true);
    }
    get isSidebarViewed() {
        return this.sidebarViewed.asObservable();
    }
    setSidebarViewed(sidebarViewed) {
        this.sidebarViewed.next(sidebarViewed);
    }
};
CksSidebarService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CksSidebarService_Factory() { return new CksSidebarService(); }, token: CksSidebarService, providedIn: "root" });
CksSidebarService = tslib_1.__decorate([
    Injectable({ providedIn: 'root' })
], CksSidebarService);
export { CksSidebarService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctY2hha2Fucy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFHdkMsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFHNUI7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksZUFBZSxDQUFVLElBQUksQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCxJQUFJLGVBQWU7UUFDakIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxhQUFzQjtRQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBQ0YsQ0FBQTs7QUFkWSxpQkFBaUI7SUFEN0IsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO0dBQ3RCLGlCQUFpQixDQWM3QjtTQWRZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIENrc1NpZGViYXJTZXJ2aWNlIHtcbiAgc2lkZWJhclZpZXdlZDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2lkZWJhclZpZXdlZCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4odHJ1ZSk7XG4gIH1cblxuICBnZXQgaXNTaWRlYmFyVmlld2VkKCkge1xuICAgIHJldHVybiB0aGlzLnNpZGViYXJWaWV3ZWQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBzZXRTaWRlYmFyVmlld2VkKHNpZGViYXJWaWV3ZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNpZGViYXJWaWV3ZWQubmV4dChzaWRlYmFyVmlld2VkKTtcbiAgfVxufVxuIl19
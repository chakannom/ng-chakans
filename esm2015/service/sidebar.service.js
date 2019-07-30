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
    Injectable({ providedIn: 'root' }),
    tslib_1.__metadata("design:paramtypes", [])
], CksSidebarService);
export { CksSidebarService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctY2hha2Fucy8iLCJzb3VyY2VzIjpbInNlcnZpY2Uvc2lkZWJhci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBR3ZDLElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0lBRzVCO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLGVBQWUsQ0FBVSxJQUFJLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsYUFBc0I7UUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNGLENBQUE7O0FBZFksaUJBQWlCO0lBRDdCLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQzs7R0FDdEIsaUJBQWlCLENBYzdCO1NBZFksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQ2tzU2lkZWJhclNlcnZpY2Uge1xuICBzaWRlYmFyVmlld2VkOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zaWRlYmFyVmlld2VkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPih0cnVlKTtcbiAgfVxuXG4gIGdldCBpc1NpZGViYXJWaWV3ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2lkZWJhclZpZXdlZC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIHNldFNpZGViYXJWaWV3ZWQoc2lkZWJhclZpZXdlZDogYm9vbGVhbikge1xuICAgIHRoaXMuc2lkZWJhclZpZXdlZC5uZXh0KHNpZGViYXJWaWV3ZWQpO1xuICB9XG59XG4iXX0=
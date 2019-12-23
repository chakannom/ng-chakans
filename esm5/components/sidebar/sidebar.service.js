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
        Injectable({ providedIn: 'root' })
    ], CksSidebarService);
    return CksSidebarService;
}());
export { CksSidebarService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctY2hha2Fucy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7OztHQWNHO0FBQ0gsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUd2QztJQUdFO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLGVBQWUsQ0FBVSxJQUFJLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsc0JBQUksOENBQWU7YUFBbkI7WUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDM0MsQ0FBQzs7O09BQUE7SUFFRCw0Q0FBZ0IsR0FBaEIsVUFBaUIsYUFBc0I7UUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7SUFiVSxpQkFBaUI7UUFEN0IsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO09BQ3RCLGlCQUFpQixDQWM3Qjs0QkFqQ0Q7Q0FpQ0MsQUFkRCxJQWNDO1NBZFksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiBDb3B5cmlnaHQgMjAxOSBDaGFLYW5Ob21cblxuIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQ2tzU2lkZWJhclNlcnZpY2Uge1xuICBzaWRlYmFyVmlld2VkOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zaWRlYmFyVmlld2VkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPih0cnVlKTtcbiAgfVxuXG4gIGdldCBpc1NpZGViYXJWaWV3ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2lkZWJhclZpZXdlZC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIHNldFNpZGViYXJWaWV3ZWQoc2lkZWJhclZpZXdlZDogYm9vbGVhbikge1xuICAgIHRoaXMuc2lkZWJhclZpZXdlZC5uZXh0KHNpZGViYXJWaWV3ZWQpO1xuICB9XG59XG4iXX0=
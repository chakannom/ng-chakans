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
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CksProfileInfo } from './profile-info.model';
import { CksConfigService } from '../../config.service';
import * as i0 from "@angular/core";
import * as i1 from "../../config.service";
import * as i2 from "@angular/common/http";
var CksProfileService = /** @class */ (function () {
    function CksProfileService(configService, http) {
        this.configService = configService;
        this.http = http;
        this.infoUrl = '{SERVER_API_URL}' + 'management/info';
        var config = this.configService.getConfig();
        this.infoUrl = this.infoUrl.replace('{SERVER_API_URL}', config.serverApiUrl);
    }
    CksProfileService.prototype.getProfileInfo = function () {
        if (!this.profileInfo) {
            this.profileInfo = this.http
                .get(this.infoUrl, { observe: 'response' })
                .pipe(map(function (res) {
                var data = res.body;
                var pi = new CksProfileInfo();
                pi.activeProfiles = data['activeProfiles'];
                var displayRibbonOnProfiles = data['display-ribbon-on-profiles'].split(',');
                if (pi.activeProfiles) {
                    var ribbonProfiles = displayRibbonOnProfiles.filter(function (profile) { return pi.activeProfiles.includes(profile); });
                    if (ribbonProfiles.length !== 0) {
                        pi.ribbonEnv = ribbonProfiles[0];
                    }
                    pi.inProduction = pi.activeProfiles.includes('prod');
                    pi.swaggerEnabled = pi.activeProfiles.includes('swagger');
                }
                return pi;
            }))
                .toPromise();
        }
        return this.profileInfo;
    };
    CksProfileService.ctorParameters = function () { return [
        { type: CksConfigService },
        { type: HttpClient }
    ]; };
    CksProfileService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CksProfileService_Factory() { return new CksProfileService(i0.ɵɵinject(i1.CksConfigService), i0.ɵɵinject(i2.HttpClient)); }, token: CksProfileService, providedIn: "root" });
    CksProfileService = tslib_1.__decorate([
        Injectable({ providedIn: 'root' })
    ], CksProfileService);
    return CksProfileService;
}());
export { CksProfileService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctY2hha2Fucy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHJvZmlsZXMvcHJvZmlsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7R0FjRztBQUNILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7O0FBR3hEO0lBSUUsMkJBQW9CLGFBQStCLEVBQVUsSUFBZ0I7UUFBekQsa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUhyRSxZQUFPLEdBQUcsa0JBQWtCLEdBQUcsaUJBQWlCLENBQUM7UUFJdkQsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM5QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBRUQsMENBQWMsR0FBZDtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUk7aUJBQ3pCLEdBQUcsQ0FBaUIsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQztpQkFDMUQsSUFBSSxDQUNILEdBQUcsQ0FBQyxVQUFDLEdBQWlDO2dCQUNwQyxJQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO2dCQUN0QixJQUFNLEVBQUUsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO2dCQUNoQyxFQUFFLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUMzQyxJQUFNLHVCQUF1QixHQUFHLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDOUUsSUFBSSxFQUFFLENBQUMsY0FBYyxFQUFFO29CQUNyQixJQUFNLGNBQWMsR0FBRyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxFQUFFLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBbkMsQ0FBbUMsQ0FBQyxDQUFDO29CQUN0RyxJQUFJLGNBQWMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO3dCQUMvQixFQUFFLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDbEM7b0JBQ0QsRUFBRSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDckQsRUFBRSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztpQkFDM0Q7Z0JBQ0QsT0FBTyxFQUFFLENBQUM7WUFDWixDQUFDLENBQUMsQ0FDSDtpQkFDQSxTQUFTLEVBQUUsQ0FBQztTQUNoQjtRQUNELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDOztnQkE3QmtDLGdCQUFnQjtnQkFBZ0IsVUFBVTs7O0lBSmxFLGlCQUFpQjtRQUQ3QixVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7T0FDdEIsaUJBQWlCLENBa0M3Qjs0QkF4REQ7Q0F3REMsQUFsQ0QsSUFrQ0M7U0FsQ1ksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiBDb3B5cmlnaHQgMjAxOSBDaGFLYW5Ob21cblxuIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2tzUHJvZmlsZUluZm8gfSBmcm9tICcuL3Byb2ZpbGUtaW5mby5tb2RlbCc7XG5pbXBvcnQgeyBDa3NDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29uZmlnLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIENrc1Byb2ZpbGVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBpbmZvVXJsID0gJ3tTRVJWRVJfQVBJX1VSTH0nICsgJ21hbmFnZW1lbnQvaW5mbyc7XG4gIHByaXZhdGUgcHJvZmlsZUluZm86IFByb21pc2U8Q2tzUHJvZmlsZUluZm8+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlnU2VydmljZTogQ2tzQ29uZmlnU2VydmljZSwgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWdTZXJ2aWNlLmdldENvbmZpZygpO1xuICAgIHRoaXMuaW5mb1VybCA9IHRoaXMuaW5mb1VybC5yZXBsYWNlKCd7U0VSVkVSX0FQSV9VUkx9JywgY29uZmlnLnNlcnZlckFwaVVybCk7XG4gIH1cblxuICBnZXRQcm9maWxlSW5mbygpOiBQcm9taXNlPENrc1Byb2ZpbGVJbmZvPiB7XG4gICAgaWYgKCF0aGlzLnByb2ZpbGVJbmZvKSB7XG4gICAgICB0aGlzLnByb2ZpbGVJbmZvID0gdGhpcy5odHRwXG4gICAgICAgIC5nZXQ8Q2tzUHJvZmlsZUluZm8+KHRoaXMuaW5mb1VybCwgeyBvYnNlcnZlOiAncmVzcG9uc2UnIH0pXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgocmVzOiBIdHRwUmVzcG9uc2U8Q2tzUHJvZmlsZUluZm8+KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzLmJvZHk7XG4gICAgICAgICAgICBjb25zdCBwaSA9IG5ldyBDa3NQcm9maWxlSW5mbygpO1xuICAgICAgICAgICAgcGkuYWN0aXZlUHJvZmlsZXMgPSBkYXRhWydhY3RpdmVQcm9maWxlcyddO1xuICAgICAgICAgICAgY29uc3QgZGlzcGxheVJpYmJvbk9uUHJvZmlsZXMgPSBkYXRhWydkaXNwbGF5LXJpYmJvbi1vbi1wcm9maWxlcyddLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICBpZiAocGkuYWN0aXZlUHJvZmlsZXMpIHtcbiAgICAgICAgICAgICAgY29uc3QgcmliYm9uUHJvZmlsZXMgPSBkaXNwbGF5UmliYm9uT25Qcm9maWxlcy5maWx0ZXIocHJvZmlsZSA9PiBwaS5hY3RpdmVQcm9maWxlcy5pbmNsdWRlcyhwcm9maWxlKSk7XG4gICAgICAgICAgICAgIGlmIChyaWJib25Qcm9maWxlcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICBwaS5yaWJib25FbnYgPSByaWJib25Qcm9maWxlc1swXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBwaS5pblByb2R1Y3Rpb24gPSBwaS5hY3RpdmVQcm9maWxlcy5pbmNsdWRlcygncHJvZCcpO1xuICAgICAgICAgICAgICBwaS5zd2FnZ2VyRW5hYmxlZCA9IHBpLmFjdGl2ZVByb2ZpbGVzLmluY2x1ZGVzKCdzd2FnZ2VyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcGk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgICAudG9Qcm9taXNlKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnByb2ZpbGVJbmZvO1xuICB9XG59XG4iXX0=
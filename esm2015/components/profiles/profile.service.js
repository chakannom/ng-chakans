import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CksProfileInfo } from './profile-info.model';
import { CksConfigService } from '../../config.service';
import * as i0 from "@angular/core";
import * as i1 from "../../config.service";
import * as i2 from "@angular/common/http";
let CksProfileService = class CksProfileService {
    constructor(configService, http) {
        this.configService = configService;
        this.http = http;
        this.infoUrl = '{SERVER_API_URL}' + 'management/info';
        const config = this.configService.getConfig();
        this.infoUrl = this.infoUrl.replace('{SERVER_API_URL}', config.serverApiUrl);
    }
    getProfileInfo() {
        if (!this.profileInfo) {
            this.profileInfo = this.http
                .get(this.infoUrl, { observe: 'response' })
                .pipe(map((res) => {
                const data = res.body;
                const pi = new CksProfileInfo();
                pi.activeProfiles = data['activeProfiles'];
                const displayRibbonOnProfiles = data['display-ribbon-on-profiles'].split(',');
                if (pi.activeProfiles) {
                    const ribbonProfiles = displayRibbonOnProfiles.filter(profile => pi.activeProfiles.includes(profile));
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
    }
};
CksProfileService.ctorParameters = () => [
    { type: CksConfigService },
    { type: HttpClient }
];
CksProfileService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CksProfileService_Factory() { return new CksProfileService(i0.ɵɵinject(i1.CksConfigService), i0.ɵɵinject(i2.HttpClient)); }, token: CksProfileService, providedIn: "root" });
CksProfileService = tslib_1.__decorate([
    Injectable({ providedIn: 'root' })
], CksProfileService);
export { CksProfileService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctY2hha2Fucy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHJvZmlsZXMvcHJvZmlsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDaEUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7OztBQUd4RCxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtJQUk1QixZQUFvQixhQUErQixFQUFVLElBQWdCO1FBQXpELGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQVk7UUFIckUsWUFBTyxHQUFHLGtCQUFrQixHQUFHLGlCQUFpQixDQUFDO1FBSXZELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDOUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQUVELGNBQWM7UUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJO2lCQUN6QixHQUFHLENBQWlCLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUM7aUJBQzFELElBQUksQ0FDSCxHQUFHLENBQUMsQ0FBQyxHQUFpQyxFQUFFLEVBQUU7Z0JBQ3hDLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7Z0JBQ3RCLE1BQU0sRUFBRSxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7Z0JBQ2hDLEVBQUUsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQzNDLE1BQU0sdUJBQXVCLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM5RSxJQUFJLEVBQUUsQ0FBQyxjQUFjLEVBQUU7b0JBQ3JCLE1BQU0sY0FBYyxHQUFHLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBQ3RHLElBQUksY0FBYyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7d0JBQy9CLEVBQUUsQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNsQztvQkFDRCxFQUFFLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNyRCxFQUFFLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2lCQUMzRDtnQkFDRCxPQUFPLEVBQUUsQ0FBQztZQUNaLENBQUMsQ0FBQyxDQUNIO2lCQUNBLFNBQVMsRUFBRSxDQUFDO1NBQ2hCO1FBQ0QsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7Q0FDRixDQUFBOztZQTlCb0MsZ0JBQWdCO1lBQWdCLFVBQVU7OztBQUpsRSxpQkFBaUI7SUFEN0IsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO0dBQ3RCLGlCQUFpQixDQWtDN0I7U0FsQ1ksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2tzUHJvZmlsZUluZm8gfSBmcm9tICcuL3Byb2ZpbGUtaW5mby5tb2RlbCc7XG5pbXBvcnQgeyBDa3NDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29uZmlnLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIENrc1Byb2ZpbGVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBpbmZvVXJsID0gJ3tTRVJWRVJfQVBJX1VSTH0nICsgJ21hbmFnZW1lbnQvaW5mbyc7XG4gIHByaXZhdGUgcHJvZmlsZUluZm86IFByb21pc2U8Q2tzUHJvZmlsZUluZm8+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlnU2VydmljZTogQ2tzQ29uZmlnU2VydmljZSwgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWdTZXJ2aWNlLmdldENvbmZpZygpO1xuICAgIHRoaXMuaW5mb1VybCA9IHRoaXMuaW5mb1VybC5yZXBsYWNlKCd7U0VSVkVSX0FQSV9VUkx9JywgY29uZmlnLnNlcnZlckFwaVVybCk7XG4gIH1cblxuICBnZXRQcm9maWxlSW5mbygpOiBQcm9taXNlPENrc1Byb2ZpbGVJbmZvPiB7XG4gICAgaWYgKCF0aGlzLnByb2ZpbGVJbmZvKSB7XG4gICAgICB0aGlzLnByb2ZpbGVJbmZvID0gdGhpcy5odHRwXG4gICAgICAgIC5nZXQ8Q2tzUHJvZmlsZUluZm8+KHRoaXMuaW5mb1VybCwgeyBvYnNlcnZlOiAncmVzcG9uc2UnIH0pXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgocmVzOiBIdHRwUmVzcG9uc2U8Q2tzUHJvZmlsZUluZm8+KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzLmJvZHk7XG4gICAgICAgICAgICBjb25zdCBwaSA9IG5ldyBDa3NQcm9maWxlSW5mbygpO1xuICAgICAgICAgICAgcGkuYWN0aXZlUHJvZmlsZXMgPSBkYXRhWydhY3RpdmVQcm9maWxlcyddO1xuICAgICAgICAgICAgY29uc3QgZGlzcGxheVJpYmJvbk9uUHJvZmlsZXMgPSBkYXRhWydkaXNwbGF5LXJpYmJvbi1vbi1wcm9maWxlcyddLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICBpZiAocGkuYWN0aXZlUHJvZmlsZXMpIHtcbiAgICAgICAgICAgICAgY29uc3QgcmliYm9uUHJvZmlsZXMgPSBkaXNwbGF5UmliYm9uT25Qcm9maWxlcy5maWx0ZXIocHJvZmlsZSA9PiBwaS5hY3RpdmVQcm9maWxlcy5pbmNsdWRlcyhwcm9maWxlKSk7XG4gICAgICAgICAgICAgIGlmIChyaWJib25Qcm9maWxlcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICBwaS5yaWJib25FbnYgPSByaWJib25Qcm9maWxlc1swXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBwaS5pblByb2R1Y3Rpb24gPSBwaS5hY3RpdmVQcm9maWxlcy5pbmNsdWRlcygncHJvZCcpO1xuICAgICAgICAgICAgICBwaS5zd2FnZ2VyRW5hYmxlZCA9IHBpLmFjdGl2ZVByb2ZpbGVzLmluY2x1ZGVzKCdzd2FnZ2VyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcGk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgICAudG9Qcm9taXNlKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnByb2ZpbGVJbmZvO1xuICB9XG59XG4iXX0=
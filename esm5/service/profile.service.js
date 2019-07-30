import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CksProfileInfo } from '../model/profile-info.model';
import { CksConfigService } from '../config.service';
import * as i0 from "@angular/core";
import * as i1 from "../config.service";
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
    CksProfileService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CksProfileService_Factory() { return new CksProfileService(i0.ɵɵinject(i1.CksConfigService), i0.ɵɵinject(i2.HttpClient)); }, token: CksProfileService, providedIn: "root" });
    CksProfileService = tslib_1.__decorate([
        Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [CksConfigService, HttpClient])
    ], CksProfileService);
    return CksProfileService;
}());
export { CksProfileService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctY2hha2Fucy8iLCJzb3VyY2VzIjpbInNlcnZpY2UvcHJvZmlsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQWdCLE1BQU0sc0JBQXNCLENBQUM7QUFDaEUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUdyRDtJQUlFLDJCQUFvQixhQUErQixFQUFVLElBQWdCO1FBQXpELGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQVk7UUFIckUsWUFBTyxHQUFHLGtCQUFrQixHQUFHLGlCQUFpQixDQUFDO1FBSXZELElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDOUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQUVELDBDQUFjLEdBQWQ7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJO2lCQUN6QixHQUFHLENBQWlCLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUM7aUJBQzFELElBQUksQ0FDSCxHQUFHLENBQUMsVUFBQyxHQUFpQztnQkFDcEMsSUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztnQkFDdEIsSUFBTSxFQUFFLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztnQkFDaEMsRUFBRSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDM0MsSUFBTSx1QkFBdUIsR0FBRyxJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzlFLElBQUksRUFBRSxDQUFDLGNBQWMsRUFBRTtvQkFDckIsSUFBTSxjQUFjLEdBQUcsdUJBQXVCLENBQUMsTUFBTSxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsRUFBRSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQW5DLENBQW1DLENBQUMsQ0FBQztvQkFDdEcsSUFBSSxjQUFjLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTt3QkFDL0IsRUFBRSxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ2xDO29CQUNELEVBQUUsQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3JELEVBQUUsQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7aUJBQzNEO2dCQUNELE9BQU8sRUFBRSxDQUFDO1lBQ1osQ0FBQyxDQUFDLENBQ0g7aUJBQ0EsU0FBUyxFQUFFLENBQUM7U0FDaEI7UUFDRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQzs7SUFqQ1UsaUJBQWlCO1FBRDdCLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztpREFLRSxnQkFBZ0IsRUFBZ0IsVUFBVTtPQUpsRSxpQkFBaUIsQ0FrQzdCOzRCQXpDRDtDQXlDQyxBQWxDRCxJQWtDQztTQWxDWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDa3NQcm9maWxlSW5mbyB9IGZyb20gJy4uL21vZGVsL3Byb2ZpbGUtaW5mby5tb2RlbCc7XG5pbXBvcnQgeyBDa3NDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vY29uZmlnLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIENrc1Byb2ZpbGVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBpbmZvVXJsID0gJ3tTRVJWRVJfQVBJX1VSTH0nICsgJ21hbmFnZW1lbnQvaW5mbyc7XG4gIHByaXZhdGUgcHJvZmlsZUluZm86IFByb21pc2U8Q2tzUHJvZmlsZUluZm8+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlnU2VydmljZTogQ2tzQ29uZmlnU2VydmljZSwgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWdTZXJ2aWNlLmdldENvbmZpZygpO1xuICAgIHRoaXMuaW5mb1VybCA9IHRoaXMuaW5mb1VybC5yZXBsYWNlKCd7U0VSVkVSX0FQSV9VUkx9JywgY29uZmlnLnNlcnZlckFwaVVybCk7XG4gIH1cblxuICBnZXRQcm9maWxlSW5mbygpOiBQcm9taXNlPENrc1Byb2ZpbGVJbmZvPiB7XG4gICAgaWYgKCF0aGlzLnByb2ZpbGVJbmZvKSB7XG4gICAgICB0aGlzLnByb2ZpbGVJbmZvID0gdGhpcy5odHRwXG4gICAgICAgIC5nZXQ8Q2tzUHJvZmlsZUluZm8+KHRoaXMuaW5mb1VybCwgeyBvYnNlcnZlOiAncmVzcG9uc2UnIH0pXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgocmVzOiBIdHRwUmVzcG9uc2U8Q2tzUHJvZmlsZUluZm8+KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzLmJvZHk7XG4gICAgICAgICAgICBjb25zdCBwaSA9IG5ldyBDa3NQcm9maWxlSW5mbygpO1xuICAgICAgICAgICAgcGkuYWN0aXZlUHJvZmlsZXMgPSBkYXRhWydhY3RpdmVQcm9maWxlcyddO1xuICAgICAgICAgICAgY29uc3QgZGlzcGxheVJpYmJvbk9uUHJvZmlsZXMgPSBkYXRhWydkaXNwbGF5LXJpYmJvbi1vbi1wcm9maWxlcyddLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICBpZiAocGkuYWN0aXZlUHJvZmlsZXMpIHtcbiAgICAgICAgICAgICAgY29uc3QgcmliYm9uUHJvZmlsZXMgPSBkaXNwbGF5UmliYm9uT25Qcm9maWxlcy5maWx0ZXIocHJvZmlsZSA9PiBwaS5hY3RpdmVQcm9maWxlcy5pbmNsdWRlcyhwcm9maWxlKSk7XG4gICAgICAgICAgICAgIGlmIChyaWJib25Qcm9maWxlcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICBwaS5yaWJib25FbnYgPSByaWJib25Qcm9maWxlc1swXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBwaS5pblByb2R1Y3Rpb24gPSBwaS5hY3RpdmVQcm9maWxlcy5pbmNsdWRlcygncHJvZCcpO1xuICAgICAgICAgICAgICBwaS5zd2FnZ2VyRW5hYmxlZCA9IHBpLmFjdGl2ZVByb2ZpbGVzLmluY2x1ZGVzKCdzd2FnZ2VyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcGk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgICAudG9Qcm9taXNlKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnByb2ZpbGVJbmZvO1xuICB9XG59XG4iXX0=
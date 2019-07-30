import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CksProfileInfo } from '../model/profile-info.model';
import { CksConfigService } from '../config.service';
import * as i0 from "@angular/core";
import * as i1 from "../config.service";
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
CksProfileService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CksProfileService_Factory() { return new CksProfileService(i0.ɵɵinject(i1.CksConfigService), i0.ɵɵinject(i2.HttpClient)); }, token: CksProfileService, providedIn: "root" });
CksProfileService = tslib_1.__decorate([
    Injectable({ providedIn: 'root' }),
    tslib_1.__metadata("design:paramtypes", [CksConfigService, HttpClient])
], CksProfileService);
export { CksProfileService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctY2hha2Fucy8iLCJzb3VyY2VzIjpbInNlcnZpY2UvcHJvZmlsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQWdCLE1BQU0sc0JBQXNCLENBQUM7QUFDaEUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUdyRCxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtJQUk1QixZQUFvQixhQUErQixFQUFVLElBQWdCO1FBQXpELGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQVk7UUFIckUsWUFBTyxHQUFHLGtCQUFrQixHQUFHLGlCQUFpQixDQUFDO1FBSXZELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDOUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQUVELGNBQWM7UUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJO2lCQUN6QixHQUFHLENBQWlCLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUM7aUJBQzFELElBQUksQ0FDSCxHQUFHLENBQUMsQ0FBQyxHQUFpQyxFQUFFLEVBQUU7Z0JBQ3hDLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7Z0JBQ3RCLE1BQU0sRUFBRSxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7Z0JBQ2hDLEVBQUUsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQzNDLE1BQU0sdUJBQXVCLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM5RSxJQUFJLEVBQUUsQ0FBQyxjQUFjLEVBQUU7b0JBQ3JCLE1BQU0sY0FBYyxHQUFHLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBQ3RHLElBQUksY0FBYyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7d0JBQy9CLEVBQUUsQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNsQztvQkFDRCxFQUFFLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNyRCxFQUFFLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2lCQUMzRDtnQkFDRCxPQUFPLEVBQUUsQ0FBQztZQUNaLENBQUMsQ0FBQyxDQUNIO2lCQUNBLFNBQVMsRUFBRSxDQUFDO1NBQ2hCO1FBQ0QsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7Q0FDRixDQUFBOztBQWxDWSxpQkFBaUI7SUFEN0IsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDOzZDQUtFLGdCQUFnQixFQUFnQixVQUFVO0dBSmxFLGlCQUFpQixDQWtDN0I7U0FsQ1ksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2tzUHJvZmlsZUluZm8gfSBmcm9tICcuLi9tb2RlbC9wcm9maWxlLWluZm8ubW9kZWwnO1xuaW1wb3J0IHsgQ2tzQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL2NvbmZpZy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBDa3NQcm9maWxlU2VydmljZSB7XG4gIHByaXZhdGUgaW5mb1VybCA9ICd7U0VSVkVSX0FQSV9VUkx9JyArICdtYW5hZ2VtZW50L2luZm8nO1xuICBwcml2YXRlIHByb2ZpbGVJbmZvOiBQcm9taXNlPENrc1Byb2ZpbGVJbmZvPjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENrc0NvbmZpZ1NlcnZpY2UsIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlnU2VydmljZS5nZXRDb25maWcoKTtcbiAgICB0aGlzLmluZm9VcmwgPSB0aGlzLmluZm9VcmwucmVwbGFjZSgne1NFUlZFUl9BUElfVVJMfScsIGNvbmZpZy5zZXJ2ZXJBcGlVcmwpO1xuICB9XG5cbiAgZ2V0UHJvZmlsZUluZm8oKTogUHJvbWlzZTxDa3NQcm9maWxlSW5mbz4ge1xuICAgIGlmICghdGhpcy5wcm9maWxlSW5mbykge1xuICAgICAgdGhpcy5wcm9maWxlSW5mbyA9IHRoaXMuaHR0cFxuICAgICAgICAuZ2V0PENrc1Byb2ZpbGVJbmZvPih0aGlzLmluZm9VcmwsIHsgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9KVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoKHJlczogSHR0cFJlc3BvbnNlPENrc1Byb2ZpbGVJbmZvPikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlcy5ib2R5O1xuICAgICAgICAgICAgY29uc3QgcGkgPSBuZXcgQ2tzUHJvZmlsZUluZm8oKTtcbiAgICAgICAgICAgIHBpLmFjdGl2ZVByb2ZpbGVzID0gZGF0YVsnYWN0aXZlUHJvZmlsZXMnXTtcbiAgICAgICAgICAgIGNvbnN0IGRpc3BsYXlSaWJib25PblByb2ZpbGVzID0gZGF0YVsnZGlzcGxheS1yaWJib24tb24tcHJvZmlsZXMnXS5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgaWYgKHBpLmFjdGl2ZVByb2ZpbGVzKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHJpYmJvblByb2ZpbGVzID0gZGlzcGxheVJpYmJvbk9uUHJvZmlsZXMuZmlsdGVyKHByb2ZpbGUgPT4gcGkuYWN0aXZlUHJvZmlsZXMuaW5jbHVkZXMocHJvZmlsZSkpO1xuICAgICAgICAgICAgICBpZiAocmliYm9uUHJvZmlsZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgcGkucmliYm9uRW52ID0gcmliYm9uUHJvZmlsZXNbMF07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcGkuaW5Qcm9kdWN0aW9uID0gcGkuYWN0aXZlUHJvZmlsZXMuaW5jbHVkZXMoJ3Byb2QnKTtcbiAgICAgICAgICAgICAgcGkuc3dhZ2dlckVuYWJsZWQgPSBwaS5hY3RpdmVQcm9maWxlcy5pbmNsdWRlcygnc3dhZ2dlcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHBpO1xuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICAgLnRvUHJvbWlzZSgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wcm9maWxlSW5mbztcbiAgfVxufVxuIl19
import * as tslib_1 from "tslib";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctY2hha2Fucy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHJvZmlsZXMvcHJvZmlsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDaEUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7OztBQUd4RDtJQUlFLDJCQUFvQixhQUErQixFQUFVLElBQWdCO1FBQXpELGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQVk7UUFIckUsWUFBTyxHQUFHLGtCQUFrQixHQUFHLGlCQUFpQixDQUFDO1FBSXZELElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDOUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQUVELDBDQUFjLEdBQWQ7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJO2lCQUN6QixHQUFHLENBQWlCLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUM7aUJBQzFELElBQUksQ0FDSCxHQUFHLENBQUMsVUFBQyxHQUFpQztnQkFDcEMsSUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztnQkFDdEIsSUFBTSxFQUFFLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztnQkFDaEMsRUFBRSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDM0MsSUFBTSx1QkFBdUIsR0FBRyxJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzlFLElBQUksRUFBRSxDQUFDLGNBQWMsRUFBRTtvQkFDckIsSUFBTSxjQUFjLEdBQUcsdUJBQXVCLENBQUMsTUFBTSxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsRUFBRSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQW5DLENBQW1DLENBQUMsQ0FBQztvQkFDdEcsSUFBSSxjQUFjLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTt3QkFDL0IsRUFBRSxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ2xDO29CQUNELEVBQUUsQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3JELEVBQUUsQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7aUJBQzNEO2dCQUNELE9BQU8sRUFBRSxDQUFDO1lBQ1osQ0FBQyxDQUFDLENBQ0g7aUJBQ0EsU0FBUyxFQUFFLENBQUM7U0FDaEI7UUFDRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQzs7Z0JBN0JrQyxnQkFBZ0I7Z0JBQWdCLFVBQVU7OztJQUpsRSxpQkFBaUI7UUFEN0IsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO09BQ3RCLGlCQUFpQixDQWtDN0I7NEJBekNEO0NBeUNDLEFBbENELElBa0NDO1NBbENZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENrc1Byb2ZpbGVJbmZvIH0gZnJvbSAnLi9wcm9maWxlLWluZm8ubW9kZWwnO1xuaW1wb3J0IHsgQ2tzQ29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbmZpZy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBDa3NQcm9maWxlU2VydmljZSB7XG4gIHByaXZhdGUgaW5mb1VybCA9ICd7U0VSVkVSX0FQSV9VUkx9JyArICdtYW5hZ2VtZW50L2luZm8nO1xuICBwcml2YXRlIHByb2ZpbGVJbmZvOiBQcm9taXNlPENrc1Byb2ZpbGVJbmZvPjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENrc0NvbmZpZ1NlcnZpY2UsIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlnU2VydmljZS5nZXRDb25maWcoKTtcbiAgICB0aGlzLmluZm9VcmwgPSB0aGlzLmluZm9VcmwucmVwbGFjZSgne1NFUlZFUl9BUElfVVJMfScsIGNvbmZpZy5zZXJ2ZXJBcGlVcmwpO1xuICB9XG5cbiAgZ2V0UHJvZmlsZUluZm8oKTogUHJvbWlzZTxDa3NQcm9maWxlSW5mbz4ge1xuICAgIGlmICghdGhpcy5wcm9maWxlSW5mbykge1xuICAgICAgdGhpcy5wcm9maWxlSW5mbyA9IHRoaXMuaHR0cFxuICAgICAgICAuZ2V0PENrc1Byb2ZpbGVJbmZvPih0aGlzLmluZm9VcmwsIHsgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9KVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoKHJlczogSHR0cFJlc3BvbnNlPENrc1Byb2ZpbGVJbmZvPikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlcy5ib2R5O1xuICAgICAgICAgICAgY29uc3QgcGkgPSBuZXcgQ2tzUHJvZmlsZUluZm8oKTtcbiAgICAgICAgICAgIHBpLmFjdGl2ZVByb2ZpbGVzID0gZGF0YVsnYWN0aXZlUHJvZmlsZXMnXTtcbiAgICAgICAgICAgIGNvbnN0IGRpc3BsYXlSaWJib25PblByb2ZpbGVzID0gZGF0YVsnZGlzcGxheS1yaWJib24tb24tcHJvZmlsZXMnXS5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgaWYgKHBpLmFjdGl2ZVByb2ZpbGVzKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHJpYmJvblByb2ZpbGVzID0gZGlzcGxheVJpYmJvbk9uUHJvZmlsZXMuZmlsdGVyKHByb2ZpbGUgPT4gcGkuYWN0aXZlUHJvZmlsZXMuaW5jbHVkZXMocHJvZmlsZSkpO1xuICAgICAgICAgICAgICBpZiAocmliYm9uUHJvZmlsZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgcGkucmliYm9uRW52ID0gcmliYm9uUHJvZmlsZXNbMF07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcGkuaW5Qcm9kdWN0aW9uID0gcGkuYWN0aXZlUHJvZmlsZXMuaW5jbHVkZXMoJ3Byb2QnKTtcbiAgICAgICAgICAgICAgcGkuc3dhZ2dlckVuYWJsZWQgPSBwaS5hY3RpdmVQcm9maWxlcy5pbmNsdWRlcygnc3dhZ2dlcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHBpO1xuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICAgLnRvUHJvbWlzZSgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wcm9maWxlSW5mbztcbiAgfVxufVxuIl19
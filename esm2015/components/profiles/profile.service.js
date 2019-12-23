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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctY2hha2Fucy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHJvZmlsZXMvcHJvZmlsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7R0FjRztBQUNILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7O0FBR3hELElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0lBSTVCLFlBQW9CLGFBQStCLEVBQVUsSUFBZ0I7UUFBekQsa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUhyRSxZQUFPLEdBQUcsa0JBQWtCLEdBQUcsaUJBQWlCLENBQUM7UUFJdkQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM5QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBRUQsY0FBYztRQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUk7aUJBQ3pCLEdBQUcsQ0FBaUIsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQztpQkFDMUQsSUFBSSxDQUNILEdBQUcsQ0FBQyxDQUFDLEdBQWlDLEVBQUUsRUFBRTtnQkFDeEMsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztnQkFDdEIsTUFBTSxFQUFFLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztnQkFDaEMsRUFBRSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDM0MsTUFBTSx1QkFBdUIsR0FBRyxJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzlFLElBQUksRUFBRSxDQUFDLGNBQWMsRUFBRTtvQkFDckIsTUFBTSxjQUFjLEdBQUcsdUJBQXVCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFDdEcsSUFBSSxjQUFjLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTt3QkFDL0IsRUFBRSxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ2xDO29CQUNELEVBQUUsQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3JELEVBQUUsQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7aUJBQzNEO2dCQUNELE9BQU8sRUFBRSxDQUFDO1lBQ1osQ0FBQyxDQUFDLENBQ0g7aUJBQ0EsU0FBUyxFQUFFLENBQUM7U0FDaEI7UUFDRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztDQUNGLENBQUE7O1lBOUJvQyxnQkFBZ0I7WUFBZ0IsVUFBVTs7O0FBSmxFLGlCQUFpQjtJQUQ3QixVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7R0FDdEIsaUJBQWlCLENBa0M3QjtTQWxDWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuIENvcHlyaWdodCAyMDE5IENoYUthbk5vbVxuXG4gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDa3NQcm9maWxlSW5mbyB9IGZyb20gJy4vcHJvZmlsZS1pbmZvLm1vZGVsJztcbmltcG9ydCB7IENrc0NvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jb25maWcuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQ2tzUHJvZmlsZVNlcnZpY2Uge1xuICBwcml2YXRlIGluZm9VcmwgPSAne1NFUlZFUl9BUElfVVJMfScgKyAnbWFuYWdlbWVudC9pbmZvJztcbiAgcHJpdmF0ZSBwcm9maWxlSW5mbzogUHJvbWlzZTxDa3NQcm9maWxlSW5mbz47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDa3NDb25maWdTZXJ2aWNlLCBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnKCk7XG4gICAgdGhpcy5pbmZvVXJsID0gdGhpcy5pbmZvVXJsLnJlcGxhY2UoJ3tTRVJWRVJfQVBJX1VSTH0nLCBjb25maWcuc2VydmVyQXBpVXJsKTtcbiAgfVxuXG4gIGdldFByb2ZpbGVJbmZvKCk6IFByb21pc2U8Q2tzUHJvZmlsZUluZm8+IHtcbiAgICBpZiAoIXRoaXMucHJvZmlsZUluZm8pIHtcbiAgICAgIHRoaXMucHJvZmlsZUluZm8gPSB0aGlzLmh0dHBcbiAgICAgICAgLmdldDxDa3NQcm9maWxlSW5mbz4odGhpcy5pbmZvVXJsLCB7IG9ic2VydmU6ICdyZXNwb25zZScgfSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKChyZXM6IEh0dHBSZXNwb25zZTxDa3NQcm9maWxlSW5mbz4pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXMuYm9keTtcbiAgICAgICAgICAgIGNvbnN0IHBpID0gbmV3IENrc1Byb2ZpbGVJbmZvKCk7XG4gICAgICAgICAgICBwaS5hY3RpdmVQcm9maWxlcyA9IGRhdGFbJ2FjdGl2ZVByb2ZpbGVzJ107XG4gICAgICAgICAgICBjb25zdCBkaXNwbGF5UmliYm9uT25Qcm9maWxlcyA9IGRhdGFbJ2Rpc3BsYXktcmliYm9uLW9uLXByb2ZpbGVzJ10uc3BsaXQoJywnKTtcbiAgICAgICAgICAgIGlmIChwaS5hY3RpdmVQcm9maWxlcykge1xuICAgICAgICAgICAgICBjb25zdCByaWJib25Qcm9maWxlcyA9IGRpc3BsYXlSaWJib25PblByb2ZpbGVzLmZpbHRlcihwcm9maWxlID0+IHBpLmFjdGl2ZVByb2ZpbGVzLmluY2x1ZGVzKHByb2ZpbGUpKTtcbiAgICAgICAgICAgICAgaWYgKHJpYmJvblByb2ZpbGVzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIHBpLnJpYmJvbkVudiA9IHJpYmJvblByb2ZpbGVzWzBdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHBpLmluUHJvZHVjdGlvbiA9IHBpLmFjdGl2ZVByb2ZpbGVzLmluY2x1ZGVzKCdwcm9kJyk7XG4gICAgICAgICAgICAgIHBpLnN3YWdnZXJFbmFibGVkID0gcGkuYWN0aXZlUHJvZmlsZXMuaW5jbHVkZXMoJ3N3YWdnZXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwaTtcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIC50b1Byb21pc2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucHJvZmlsZUluZm87XG4gIH1cbn1cbiJdfQ==
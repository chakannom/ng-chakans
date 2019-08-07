import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CksProfileInfo } from './profile-info.model';
import { CksConfigService } from '../../config.service';

@Injectable({ providedIn: 'root' })
export class CksProfileService {
  private infoUrl = '{SERVER_API_URL}' + 'management/info';
  private profileInfo: Promise<CksProfileInfo>;

  constructor(private configService: CksConfigService, private http: HttpClient) {
    const config = this.configService.getConfig();
    this.infoUrl = this.infoUrl.replace('{SERVER_API_URL}', config.serverApiUrl);
  }

  getProfileInfo(): Promise<CksProfileInfo> {
    if (!this.profileInfo) {
      this.profileInfo = this.http
        .get<CksProfileInfo>(this.infoUrl, { observe: 'response' })
        .pipe(
          map((res: HttpResponse<CksProfileInfo>) => {
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
          })
        )
        .toPromise();
    }
    return this.profileInfo;
  }
}

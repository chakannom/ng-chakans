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

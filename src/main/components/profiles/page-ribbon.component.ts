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
import { Component, OnInit } from '@angular/core';
import { CksProfileService } from './profile.service';
import { CksProfileInfo } from './profile-info.model';

@Component({
  selector: 'cks-page-ribbon',
  template: `
    <div class="ribbon" *ngIf="ribbonEnv">
      <a href="">{{ 'global.ribbon.' + ribbonEnv | translate }}</a>
    </div>
  `
})
export class CksPageRibbonComponent implements OnInit {
  profileInfo: CksProfileInfo;
  ribbonEnv: string;

  constructor(private profileService: CksProfileService) {}

  ngOnInit() {
    this.profileService.getProfileInfo().then(profileInfo => {
      this.profileInfo = profileInfo;
      this.ribbonEnv = profileInfo.ribbonEnv;
    });
  }
}

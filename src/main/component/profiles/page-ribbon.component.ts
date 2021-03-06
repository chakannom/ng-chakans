import { Component, OnInit } from '@angular/core';
import { CksProfileService } from '../../service/profile.service';
import { CksProfileInfo } from '../../model/profile-info.model';

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

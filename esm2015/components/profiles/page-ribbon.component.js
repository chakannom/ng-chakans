import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CksProfileService } from './profile.service';
let CksPageRibbonComponent = class CksPageRibbonComponent {
    constructor(profileService) {
        this.profileService = profileService;
    }
    ngOnInit() {
        this.profileService.getProfileInfo().then(profileInfo => {
            this.profileInfo = profileInfo;
            this.ribbonEnv = profileInfo.ribbonEnv;
        });
    }
};
CksPageRibbonComponent.ctorParameters = () => [
    { type: CksProfileService }
];
CksPageRibbonComponent = tslib_1.__decorate([
    Component({
        selector: 'cks-page-ribbon',
        template: `
    <div class="ribbon" *ngIf="ribbonEnv">
      <a href="">{{ 'global.ribbon.' + ribbonEnv | translate }}</a>
    </div>
  `
    })
], CksPageRibbonComponent);
export { CksPageRibbonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1yaWJib24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctY2hha2Fucy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHJvZmlsZXMvcGFnZS1yaWJib24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBV3RELElBQWEsc0JBQXNCLEdBQW5DLE1BQWEsc0JBQXNCO0lBSWpDLFlBQW9CLGNBQWlDO1FBQWpDLG1CQUFjLEdBQWQsY0FBYyxDQUFtQjtJQUFHLENBQUM7SUFFekQsUUFBUTtRQUNOLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3RELElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1lBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQztRQUN6QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFBOztZQVJxQyxpQkFBaUI7O0FBSjFDLHNCQUFzQjtJQVJsQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsaUJBQWlCO1FBQzNCLFFBQVEsRUFBRTs7OztHQUlUO0tBQ0YsQ0FBQztHQUNXLHNCQUFzQixDQVlsQztTQVpZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDa3NQcm9maWxlU2VydmljZSB9IGZyb20gJy4vcHJvZmlsZS5zZXJ2aWNlJztcbmltcG9ydCB7IENrc1Byb2ZpbGVJbmZvIH0gZnJvbSAnLi9wcm9maWxlLWluZm8ubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdja3MtcGFnZS1yaWJib24nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJyaWJib25cIiAqbmdJZj1cInJpYmJvbkVudlwiPlxuICAgICAgPGEgaHJlZj1cIlwiPnt7ICdnbG9iYWwucmliYm9uLicgKyByaWJib25FbnYgfCB0cmFuc2xhdGUgfX08L2E+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQ2tzUGFnZVJpYmJvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByb2ZpbGVJbmZvOiBDa3NQcm9maWxlSW5mbztcbiAgcmliYm9uRW52OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwcm9maWxlU2VydmljZTogQ2tzUHJvZmlsZVNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5wcm9maWxlU2VydmljZS5nZXRQcm9maWxlSW5mbygpLnRoZW4ocHJvZmlsZUluZm8gPT4ge1xuICAgICAgdGhpcy5wcm9maWxlSW5mbyA9IHByb2ZpbGVJbmZvO1xuICAgICAgdGhpcy5yaWJib25FbnYgPSBwcm9maWxlSW5mby5yaWJib25FbnY7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CksProfileService } from '../../service';
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
CksPageRibbonComponent = tslib_1.__decorate([
    Component({
        selector: 'cks-page-ribbon',
        template: `
    <div class="ribbon" *ngIf="ribbonEnv">
      <a href="">{{ 'global.ribbon.' + ribbonEnv | translate }}</a>
    </div>
  `
    }),
    tslib_1.__metadata("design:paramtypes", [CksProfileService])
], CksPageRibbonComponent);
export { CksPageRibbonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1yaWJib24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctY2hha2Fucy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudC9wcm9maWxlcy9wYWdlLXJpYmJvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBV2xELElBQWEsc0JBQXNCLEdBQW5DLE1BQWEsc0JBQXNCO0lBSWpDLFlBQW9CLGNBQWlDO1FBQWpDLG1CQUFjLEdBQWQsY0FBYyxDQUFtQjtJQUFHLENBQUM7SUFFekQsUUFBUTtRQUNOLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3RELElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1lBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQztRQUN6QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFBO0FBWlksc0JBQXNCO0lBUmxDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxpQkFBaUI7UUFDM0IsUUFBUSxFQUFFOzs7O0dBSVQ7S0FDRixDQUFDOzZDQUtvQyxpQkFBaUI7R0FKMUMsc0JBQXNCLENBWWxDO1NBWlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENrc1Byb2ZpbGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZSc7XG5pbXBvcnQgeyBDa3NQcm9maWxlSW5mbyB9IGZyb20gJy4uLy4uL21vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2tzLXBhZ2UtcmliYm9uJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwicmliYm9uXCIgKm5nSWY9XCJyaWJib25FbnZcIj5cbiAgICAgIDxhIGhyZWY9XCJcIj57eyAnZ2xvYmFsLnJpYmJvbi4nICsgcmliYm9uRW52IHwgdHJhbnNsYXRlIH19PC9hPlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIENrc1BhZ2VSaWJib25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcm9maWxlSW5mbzogQ2tzUHJvZmlsZUluZm87XG4gIHJpYmJvbkVudjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJvZmlsZVNlcnZpY2U6IENrc1Byb2ZpbGVTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucHJvZmlsZVNlcnZpY2UuZ2V0UHJvZmlsZUluZm8oKS50aGVuKHByb2ZpbGVJbmZvID0+IHtcbiAgICAgIHRoaXMucHJvZmlsZUluZm8gPSBwcm9maWxlSW5mbztcbiAgICAgIHRoaXMucmliYm9uRW52ID0gcHJvZmlsZUluZm8ucmliYm9uRW52O1xuICAgIH0pO1xuICB9XG59XG4iXX0=
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CksProfileService } from '../../service/profile.service';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1yaWJib24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctY2hha2Fucy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudC9wcm9maWxlcy9wYWdlLXJpYmJvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFXbEUsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7SUFJakMsWUFBb0IsY0FBaUM7UUFBakMsbUJBQWMsR0FBZCxjQUFjLENBQW1CO0lBQUcsQ0FBQztJQUV6RCxRQUFRO1FBQ04sSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDdEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7WUFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUE7QUFaWSxzQkFBc0I7SUFSbEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQixRQUFRLEVBQUU7Ozs7R0FJVDtLQUNGLENBQUM7NkNBS29DLGlCQUFpQjtHQUoxQyxzQkFBc0IsQ0FZbEM7U0FaWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2tzUHJvZmlsZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL3Byb2ZpbGUuc2VydmljZSc7XG5pbXBvcnQgeyBDa3NQcm9maWxlSW5mbyB9IGZyb20gJy4uLy4uL21vZGVsL3Byb2ZpbGUtaW5mby5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nrcy1wYWdlLXJpYmJvbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cInJpYmJvblwiICpuZ0lmPVwicmliYm9uRW52XCI+XG4gICAgICA8YSBocmVmPVwiXCI+e3sgJ2dsb2JhbC5yaWJib24uJyArIHJpYmJvbkVudiB8IHRyYW5zbGF0ZSB9fTwvYT5cbiAgICA8L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBDa3NQYWdlUmliYm9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJvZmlsZUluZm86IENrc1Byb2ZpbGVJbmZvO1xuICByaWJib25FbnY6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByb2ZpbGVTZXJ2aWNlOiBDa3NQcm9maWxlU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnByb2ZpbGVTZXJ2aWNlLmdldFByb2ZpbGVJbmZvKCkudGhlbihwcm9maWxlSW5mbyA9PiB7XG4gICAgICB0aGlzLnByb2ZpbGVJbmZvID0gcHJvZmlsZUluZm87XG4gICAgICB0aGlzLnJpYmJvbkVudiA9IHByb2ZpbGVJbmZvLnJpYmJvbkVudjtcbiAgICB9KTtcbiAgfVxufVxuIl19
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CksProfileService } from '../../service/profile.service';
var CksPageRibbonComponent = /** @class */ (function () {
    function CksPageRibbonComponent(profileService) {
        this.profileService = profileService;
    }
    CksPageRibbonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileService.getProfileInfo().then(function (profileInfo) {
            _this.profileInfo = profileInfo;
            _this.ribbonEnv = profileInfo.ribbonEnv;
        });
    };
    CksPageRibbonComponent = tslib_1.__decorate([
        Component({
            selector: 'cks-page-ribbon',
            template: "\n    <div class=\"ribbon\" *ngIf=\"ribbonEnv\">\n      <a href=\"\">{{ 'global.ribbon.' + ribbonEnv | translate }}</a>\n    </div>\n  "
        }),
        tslib_1.__metadata("design:paramtypes", [CksProfileService])
    ], CksPageRibbonComponent);
    return CksPageRibbonComponent;
}());
export { CksPageRibbonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1yaWJib24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctY2hha2Fucy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudC9wcm9maWxlcy9wYWdlLXJpYmJvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFXbEU7SUFJRSxnQ0FBb0IsY0FBaUM7UUFBakMsbUJBQWMsR0FBZCxjQUFjLENBQW1CO0lBQUcsQ0FBQztJQUV6RCx5Q0FBUSxHQUFSO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLFdBQVc7WUFDbkQsS0FBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7WUFDL0IsS0FBSSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQVhVLHNCQUFzQjtRQVJsQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFFBQVEsRUFBRSx5SUFJVDtTQUNGLENBQUM7aURBS29DLGlCQUFpQjtPQUoxQyxzQkFBc0IsQ0FZbEM7SUFBRCw2QkFBQztDQUFBLEFBWkQsSUFZQztTQVpZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDa3NQcm9maWxlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2UvcHJvZmlsZS5zZXJ2aWNlJztcbmltcG9ydCB7IENrc1Byb2ZpbGVJbmZvIH0gZnJvbSAnLi4vLi4vbW9kZWwvcHJvZmlsZS1pbmZvLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2tzLXBhZ2UtcmliYm9uJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwicmliYm9uXCIgKm5nSWY9XCJyaWJib25FbnZcIj5cbiAgICAgIDxhIGhyZWY9XCJcIj57eyAnZ2xvYmFsLnJpYmJvbi4nICsgcmliYm9uRW52IHwgdHJhbnNsYXRlIH19PC9hPlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIENrc1BhZ2VSaWJib25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcm9maWxlSW5mbzogQ2tzUHJvZmlsZUluZm87XG4gIHJpYmJvbkVudjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJvZmlsZVNlcnZpY2U6IENrc1Byb2ZpbGVTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucHJvZmlsZVNlcnZpY2UuZ2V0UHJvZmlsZUluZm8oKS50aGVuKHByb2ZpbGVJbmZvID0+IHtcbiAgICAgIHRoaXMucHJvZmlsZUluZm8gPSBwcm9maWxlSW5mbztcbiAgICAgIHRoaXMucmliYm9uRW52ID0gcHJvZmlsZUluZm8ucmliYm9uRW52O1xuICAgIH0pO1xuICB9XG59XG4iXX0=
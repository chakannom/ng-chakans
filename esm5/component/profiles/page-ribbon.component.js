import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CksProfileService } from '../../service';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1yaWJib24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctY2hha2Fucy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudC9wcm9maWxlcy9wYWdlLXJpYmJvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBV2xEO0lBSUUsZ0NBQW9CLGNBQWlDO1FBQWpDLG1CQUFjLEdBQWQsY0FBYyxDQUFtQjtJQUFHLENBQUM7SUFFekQseUNBQVEsR0FBUjtRQUFBLGlCQUtDO1FBSkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxXQUFXO1lBQ25ELEtBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1lBQy9CLEtBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQztRQUN6QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFYVSxzQkFBc0I7UUFSbEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixRQUFRLEVBQUUseUlBSVQ7U0FDRixDQUFDO2lEQUtvQyxpQkFBaUI7T0FKMUMsc0JBQXNCLENBWWxDO0lBQUQsNkJBQUM7Q0FBQSxBQVpELElBWUM7U0FaWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2tzUHJvZmlsZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlJztcbmltcG9ydCB7IENrc1Byb2ZpbGVJbmZvIH0gZnJvbSAnLi4vLi4vbW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdja3MtcGFnZS1yaWJib24nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJyaWJib25cIiAqbmdJZj1cInJpYmJvbkVudlwiPlxuICAgICAgPGEgaHJlZj1cIlwiPnt7ICdnbG9iYWwucmliYm9uLicgKyByaWJib25FbnYgfCB0cmFuc2xhdGUgfX08L2E+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQ2tzUGFnZVJpYmJvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByb2ZpbGVJbmZvOiBDa3NQcm9maWxlSW5mbztcbiAgcmliYm9uRW52OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwcm9maWxlU2VydmljZTogQ2tzUHJvZmlsZVNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5wcm9maWxlU2VydmljZS5nZXRQcm9maWxlSW5mbygpLnRoZW4ocHJvZmlsZUluZm8gPT4ge1xuICAgICAgdGhpcy5wcm9maWxlSW5mbyA9IHByb2ZpbGVJbmZvO1xuICAgICAgdGhpcy5yaWJib25FbnYgPSBwcm9maWxlSW5mby5yaWJib25FbnY7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
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
import { Component } from '@angular/core';
import { CksProfileService } from './profile.service';
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
    CksPageRibbonComponent.ctorParameters = function () { return [
        { type: CksProfileService }
    ]; };
    CksPageRibbonComponent = tslib_1.__decorate([
        Component({
            selector: 'cks-page-ribbon',
            template: "\n    <div class=\"ribbon\" *ngIf=\"ribbonEnv\">\n      <a href=\"\">{{ 'global.ribbon.' + ribbonEnv | translate }}</a>\n    </div>\n  "
        })
    ], CksPageRibbonComponent);
    return CksPageRibbonComponent;
}());
export { CksPageRibbonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1yaWJib24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctY2hha2Fucy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHJvZmlsZXMvcGFnZS1yaWJib24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7R0FjRztBQUNILE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFXdEQ7SUFJRSxnQ0FBb0IsY0FBaUM7UUFBakMsbUJBQWMsR0FBZCxjQUFjLENBQW1CO0lBQUcsQ0FBQztJQUV6RCx5Q0FBUSxHQUFSO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLFdBQVc7WUFDbkQsS0FBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7WUFDL0IsS0FBSSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBUG1DLGlCQUFpQjs7SUFKMUMsc0JBQXNCO1FBUmxDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsUUFBUSxFQUFFLHlJQUlUO1NBQ0YsQ0FBQztPQUNXLHNCQUFzQixDQVlsQztJQUFELDZCQUFDO0NBQUEsQUFaRCxJQVlDO1NBWlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiBDb3B5cmlnaHQgMjAxOSBDaGFLYW5Ob21cblxuIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENrc1Byb2ZpbGVTZXJ2aWNlIH0gZnJvbSAnLi9wcm9maWxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2tzUHJvZmlsZUluZm8gfSBmcm9tICcuL3Byb2ZpbGUtaW5mby5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nrcy1wYWdlLXJpYmJvbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cInJpYmJvblwiICpuZ0lmPVwicmliYm9uRW52XCI+XG4gICAgICA8YSBocmVmPVwiXCI+e3sgJ2dsb2JhbC5yaWJib24uJyArIHJpYmJvbkVudiB8IHRyYW5zbGF0ZSB9fTwvYT5cbiAgICA8L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBDa3NQYWdlUmliYm9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJvZmlsZUluZm86IENrc1Byb2ZpbGVJbmZvO1xuICByaWJib25FbnY6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByb2ZpbGVTZXJ2aWNlOiBDa3NQcm9maWxlU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnByb2ZpbGVTZXJ2aWNlLmdldFByb2ZpbGVJbmZvKCkudGhlbihwcm9maWxlSW5mbyA9PiB7XG4gICAgICB0aGlzLnByb2ZpbGVJbmZvID0gcHJvZmlsZUluZm87XG4gICAgICB0aGlzLnJpYmJvbkVudiA9IHByb2ZpbGVJbmZvLnJpYmJvbkVudjtcbiAgICB9KTtcbiAgfVxufVxuIl19
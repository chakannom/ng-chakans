import * as tslib_1 from "tslib";
/*
 Copyright 2013-2019 the original author or authors from the JHipster project.
 * Modified by ChaKanNom 2019.12.24

 This file is part of the JHipster project, see https://www.jhipster.tech/
 for more information.

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
import { Input, Directive, ElementRef, OnChanges, OnInit, Optional, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CksConfigService } from '../config.service';
/**
 * A wrapper directive on top of the translate pipe as the inbuilt translate directive from ngx-translate is too verbose and buggy
 */
let CksTranslateDirective = class CksTranslateDirective {
    constructor(configService, el, translateService) {
        this.configService = configService;
        this.el = el;
        this.translateService = translateService;
        this.directiveDestroyed = new Subject();
    }
    ngOnInit() {
        const enabled = this.configService.getConfig().i18nEnabled;
        if (enabled) {
            this.translateService.onLangChange.pipe(takeUntil(this.directiveDestroyed)).subscribe(() => {
                this.getTranslation();
            });
        }
    }
    ngOnChanges() {
        const enabled = this.configService.getConfig().i18nEnabled;
        if (enabled) {
            this.getTranslation();
        }
    }
    ngOnDestroy() {
        this.directiveDestroyed.next();
        this.directiveDestroyed.complete();
    }
    getTranslation() {
        this.translateService
            .get(this.cksTranslate, this.translateValues)
            .pipe(takeUntil(this.directiveDestroyed))
            .subscribe(value => {
            this.el.nativeElement.innerHTML = value;
        }, () => {
            return `${this.configService.getConfig().noi18nMessage}[${this.cksTranslate}]`;
        });
    }
};
CksTranslateDirective.ctorParameters = () => [
    { type: CksConfigService },
    { type: ElementRef },
    { type: TranslateService, decorators: [{ type: Optional }] }
];
tslib_1.__decorate([
    Input()
], CksTranslateDirective.prototype, "cksTranslate", void 0);
tslib_1.__decorate([
    Input()
], CksTranslateDirective.prototype, "translateValues", void 0);
CksTranslateDirective = tslib_1.__decorate([
    Directive({
        selector: '[cksTranslate]'
    }),
    tslib_1.__param(2, Optional())
], CksTranslateDirective);
export { CksTranslateDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2tzLXRyYW5zbGF0ZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1jaGFrYW5zLyIsInNvdXJjZXMiOlsiZGlyZWN0aXZlcy9ja3MtdHJhbnNsYXRlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtCRztBQUNILE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFckQ7O0dBRUc7QUFJSCxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtJQU1oQyxZQUFvQixhQUErQixFQUFVLEVBQWMsRUFBc0IsZ0JBQWtDO1FBQS9HLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUFVLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBc0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUZsSCx1QkFBa0IsR0FBRyxJQUFJLE9BQU8sRUFBUyxDQUFDO0lBRTJFLENBQUM7SUFFdkksUUFBUTtRQUNOLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUMsV0FBVyxDQUFDO1FBQzNELElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtnQkFDekYsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3hCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUMsV0FBVyxDQUFDO1FBRTNELElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFFTyxjQUFjO1FBQ3BCLElBQUksQ0FBQyxnQkFBZ0I7YUFDbEIsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQzthQUM1QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2FBQ3hDLFNBQVMsQ0FDUixLQUFLLENBQUMsRUFBRTtZQUNOLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDMUMsQ0FBQyxFQUNELEdBQUcsRUFBRTtZQUNILE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUM7UUFDakYsQ0FBQyxDQUNGLENBQUM7SUFDTixDQUFDO0NBQ0YsQ0FBQTs7WUFyQ29DLGdCQUFnQjtZQUFjLFVBQVU7WUFBd0MsZ0JBQWdCLHVCQUFyRCxRQUFROztBQUw3RTtJQUFSLEtBQUssRUFBRTsyREFBc0I7QUFDckI7SUFBUixLQUFLLEVBQUU7OERBQXNCO0FBRm5CLHFCQUFxQjtJQUhqQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZ0JBQWdCO0tBQzNCLENBQUM7SUFPOEUsbUJBQUEsUUFBUSxFQUFFLENBQUE7R0FON0UscUJBQXFCLENBMkNqQztTQTNDWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuIENvcHlyaWdodCAyMDEzLTIwMTkgdGhlIG9yaWdpbmFsIGF1dGhvciBvciBhdXRob3JzIGZyb20gdGhlIEpIaXBzdGVyIHByb2plY3QuXG4gKiBNb2RpZmllZCBieSBDaGFLYW5Ob20gMjAxOS4xMi4yNFxuXG4gVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIEpIaXBzdGVyIHByb2plY3QsIHNlZSBodHRwczovL3d3dy5qaGlwc3Rlci50ZWNoL1xuIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuXG4gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgeyBJbnB1dCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBPbkNoYW5nZXMsIE9uSW5pdCwgT3B0aW9uYWwsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBDa3NDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vY29uZmlnLnNlcnZpY2UnO1xuXG4vKipcbiAqIEEgd3JhcHBlciBkaXJlY3RpdmUgb24gdG9wIG9mIHRoZSB0cmFuc2xhdGUgcGlwZSBhcyB0aGUgaW5idWlsdCB0cmFuc2xhdGUgZGlyZWN0aXZlIGZyb20gbmd4LXRyYW5zbGF0ZSBpcyB0b28gdmVyYm9zZSBhbmQgYnVnZ3lcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2Nrc1RyYW5zbGF0ZV0nXG59KVxuZXhwb3J0IGNsYXNzIENrc1RyYW5zbGF0ZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBja3NUcmFuc2xhdGU6IHN0cmluZztcbiAgQElucHV0KCkgdHJhbnNsYXRlVmFsdWVzOiBhbnk7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBkaXJlY3RpdmVEZXN0cm95ZWQgPSBuZXcgU3ViamVjdDxuZXZlcj4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENrc0NvbmZpZ1NlcnZpY2UsIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIEBPcHRpb25hbCgpIHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBlbmFibGVkID0gdGhpcy5jb25maWdTZXJ2aWNlLmdldENvbmZpZygpLmkxOG5FbmFibGVkO1xuICAgIGlmIChlbmFibGVkKSB7XG4gICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2Uub25MYW5nQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGlyZWN0aXZlRGVzdHJveWVkKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5nZXRUcmFuc2xhdGlvbigpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgY29uc3QgZW5hYmxlZCA9IHRoaXMuY29uZmlnU2VydmljZS5nZXRDb25maWcoKS5pMThuRW5hYmxlZDtcblxuICAgIGlmIChlbmFibGVkKSB7XG4gICAgICB0aGlzLmdldFRyYW5zbGF0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5kaXJlY3RpdmVEZXN0cm95ZWQubmV4dCgpO1xuICAgIHRoaXMuZGlyZWN0aXZlRGVzdHJveWVkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBwcml2YXRlIGdldFRyYW5zbGF0aW9uKCkge1xuICAgIHRoaXMudHJhbnNsYXRlU2VydmljZVxuICAgICAgLmdldCh0aGlzLmNrc1RyYW5zbGF0ZSwgdGhpcy50cmFuc2xhdGVWYWx1ZXMpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kaXJlY3RpdmVEZXN0cm95ZWQpKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgdmFsdWUgPT4ge1xuICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBgJHt0aGlzLmNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnKCkubm9pMThuTWVzc2FnZX1bJHt0aGlzLmNrc1RyYW5zbGF0ZX1dYDtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgfVxufVxuIl19
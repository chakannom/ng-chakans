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
var CksMainWithSideAndHeadComponent = /** @class */ (function () {
    function CksMainWithSideAndHeadComponent() {
    }
    CksMainWithSideAndHeadComponent = tslib_1.__decorate([
        Component({
            selector: 'cks-main-with-side-and-head',
            template: "<router-outlet name=\"sidebar\"></router-outlet>\n<div class=\"cks-main-with-side\">\n    <router-outlet name=\"topbar\"></router-outlet>\n    <div class=\"cks-main-with-head\">\n        <router-outlet></router-outlet>\n    </div>\n</div>\n"
        })
    ], CksMainWithSideAndHeadComponent);
    return CksMainWithSideAndHeadComponent;
}());
export { CksMainWithSideAndHeadComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi13aXRoLXNpZGUtYW5kLWhlYWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctY2hha2Fucy8iLCJzb3VyY2VzIjpbImxheW91dHMvbWFpbi93aXRoLXNpZGUtYW5kLWhlYWQvbWFpbi13aXRoLXNpZGUtYW5kLWhlYWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7R0FjRztBQUNILE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFNbEQ7SUFDRTtJQUFlLENBQUM7SUFETCwrQkFBK0I7UUFKM0MsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDZCQUE2QjtZQUN2Qyw0UEFBdUQ7U0FDeEQsQ0FBQztPQUNXLCtCQUErQixDQUUzQztJQUFELHNDQUFDO0NBQUEsQUFGRCxJQUVDO1NBRlksK0JBQStCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiBDb3B5cmlnaHQgMjAxOSBDaGFLYW5Ob21cblxuIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2tzLW1haW4td2l0aC1zaWRlLWFuZC1oZWFkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21haW4td2l0aC1zaWRlLWFuZC1oZWFkLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBDa3NNYWluV2l0aFNpZGVBbmRIZWFkQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7fVxufVxuIl19
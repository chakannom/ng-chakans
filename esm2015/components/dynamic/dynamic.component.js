import * as tslib_1 from "tslib";
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
let CksDynamicComponent = class CksDynamicComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        const componentFactory = this.route.snapshot.data['factory'];
        this.content.createComponent(componentFactory);
    }
};
CksDynamicComponent.ctorParameters = () => [
    { type: ActivatedRoute }
];
tslib_1.__decorate([
    ViewChild('content', { read: ViewContainerRef, static: true })
], CksDynamicComponent.prototype, "content", void 0);
CksDynamicComponent = tslib_1.__decorate([
    Component({
        selector: 'cks-dynamic',
        template: "<div class=\"cks-dynamic\" #content></div>\n"
    })
], CksDynamicComponent);
export { CksDynamicComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1jaGFrYW5zLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9keW5hbWljL2R5bmFtaWMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFNakQsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7SUFJOUIsWUFBb0IsS0FBcUI7UUFBckIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7SUFBRyxDQUFDO0lBRTdDLFFBQVE7UUFDTixNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Q0FDRixDQUFBOztZQU40QixjQUFjOztBQUZ6QztJQURDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO29EQUNyQztBQUZmLG1CQUFtQjtJQUovQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsYUFBYTtRQUN2Qix3REFBdUM7S0FDeEMsQ0FBQztHQUNXLG1CQUFtQixDQVUvQjtTQVZZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2tzLWR5bmFtaWMnLFxuICB0ZW1wbGF0ZVVybDogJy4vZHluYW1pYy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQ2tzRHluYW1pY0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnQnLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICBjb250ZW50OiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLnJvdXRlLnNuYXBzaG90LmRhdGFbJ2ZhY3RvcnknXTtcbiAgICB0aGlzLmNvbnRlbnQuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpO1xuICB9XG59XG4iXX0=
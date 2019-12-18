import * as tslib_1 from "tslib";
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
var CksDynamicComponent = /** @class */ (function () {
    function CksDynamicComponent(route) {
        this.route = route;
    }
    CksDynamicComponent.prototype.ngOnInit = function () {
        var componentFactory = this.route.snapshot.data['factory'];
        this.content.createComponent(componentFactory);
    };
    CksDynamicComponent.ctorParameters = function () { return [
        { type: ActivatedRoute }
    ]; };
    tslib_1.__decorate([
        ViewChild('content', { read: ViewContainerRef, static: true })
    ], CksDynamicComponent.prototype, "content", void 0);
    CksDynamicComponent = tslib_1.__decorate([
        Component({
            selector: 'cks-dynamic',
            template: "<div #content></div>\n"
        })
    ], CksDynamicComponent);
    return CksDynamicComponent;
}());
export { CksDynamicComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1jaGFrYW5zLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9keW5hbWljL2R5bmFtaWMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFNakQ7SUFJRSw2QkFBb0IsS0FBcUI7UUFBckIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7SUFBRyxDQUFDO0lBRTdDLHNDQUFRLEdBQVI7UUFDRSxJQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2pELENBQUM7O2dCQUwwQixjQUFjOztJQUZ6QztRQURDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO3dEQUNyQztJQUZmLG1CQUFtQjtRQUovQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUN2QixrQ0FBdUM7U0FDeEMsQ0FBQztPQUNXLG1CQUFtQixDQVUvQjtJQUFELDBCQUFDO0NBQUEsQUFWRCxJQVVDO1NBVlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdja3MtZHluYW1pYycsXG4gIHRlbXBsYXRlVXJsOiAnLi9keW5hbWljLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBDa3NEeW5hbWljQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZCgnY29udGVudCcsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiB0cnVlIH0pXG4gIGNvbnRlbnQ6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMucm91dGUuc25hcHNob3QuZGF0YVsnZmFjdG9yeSddO1xuICAgIHRoaXMuY29udGVudC5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSk7XG4gIH1cbn1cbiJdfQ==
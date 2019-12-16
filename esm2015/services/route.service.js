import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
let CksRouteService = class CksRouteService {
    constructor(router) {
        this.router = router;
    }
    navigate(navigation) {
        if (typeof navigation === 'string') {
            window.location.href = navigation;
        }
        else {
            const navigationExtras = {};
            if (navigation.queryParams) {
                navigationExtras.queryParams = navigation.queryParams;
            }
            if (navigation.fragment) {
                navigationExtras.fragment = navigation.fragment;
            }
            if (navigation.routerLink && navigation.routerLink.length > 0) {
                this.router.navigate(navigation.routerLink, navigationExtras);
            }
        }
    }
};
CksRouteService.ctorParameters = () => [
    { type: Router }
];
CksRouteService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CksRouteService_Factory() { return new CksRouteService(i0.ɵɵinject(i1.Router)); }, token: CksRouteService, providedIn: "root" });
CksRouteService = tslib_1.__decorate([
    Injectable({ providedIn: 'root' })
], CksRouteService);
export { CksRouteService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWNoYWthbnMvIiwic291cmNlcyI6WyJzZXJ2aWNlcy9yb3V0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBRzNELElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFDMUIsWUFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFBRyxDQUFDO0lBRXRDLFFBQVEsQ0FBQyxVQUFlO1FBQ3RCLElBQUksT0FBTyxVQUFVLEtBQUssUUFBUSxFQUFFO1lBQ2xDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztTQUNuQzthQUFNO1lBQ0wsTUFBTSxnQkFBZ0IsR0FBcUIsRUFBRSxDQUFDO1lBQzlDLElBQUksVUFBVSxDQUFDLFdBQVcsRUFBRTtnQkFDMUIsZ0JBQWdCLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUM7YUFDdkQ7WUFDRCxJQUFJLFVBQVUsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3ZCLGdCQUFnQixDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDO2FBQ2pEO1lBQ0QsSUFBSSxVQUFVLENBQUMsVUFBVSxJQUFJLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDN0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO2FBQy9EO1NBQ0Y7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7WUFsQjZCLE1BQU07OztBQUR2QixlQUFlO0lBRDNCLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztHQUN0QixlQUFlLENBbUIzQjtTQW5CWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkV4dHJhcywgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBDa3NSb3V0ZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxuXG4gIG5hdmlnYXRlKG5hdmlnYXRpb246IGFueSkge1xuICAgIGlmICh0eXBlb2YgbmF2aWdhdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gbmF2aWdhdGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbmF2aWdhdGlvbkV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9IHt9O1xuICAgICAgaWYgKG5hdmlnYXRpb24ucXVlcnlQYXJhbXMpIHtcbiAgICAgICAgbmF2aWdhdGlvbkV4dHJhcy5xdWVyeVBhcmFtcyA9IG5hdmlnYXRpb24ucXVlcnlQYXJhbXM7XG4gICAgICB9XG4gICAgICBpZiAobmF2aWdhdGlvbi5mcmFnbWVudCkge1xuICAgICAgICBuYXZpZ2F0aW9uRXh0cmFzLmZyYWdtZW50ID0gbmF2aWdhdGlvbi5mcmFnbWVudDtcbiAgICAgIH1cbiAgICAgIGlmIChuYXZpZ2F0aW9uLnJvdXRlckxpbmsgJiYgbmF2aWdhdGlvbi5yb3V0ZXJMaW5rLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUobmF2aWdhdGlvbi5yb3V0ZXJMaW5rLCBuYXZpZ2F0aW9uRXh0cmFzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==
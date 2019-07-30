import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
let CksRouteService = class CksRouteService {
    constructor(router) {
        this.router = router;
    }
    navigate(href) {
        if (typeof href === 'string') {
            window.location.href = href;
        }
        else {
            const navigationExtras = {};
            if (href.queryParams) {
                navigationExtras.queryParams = href.queryParams;
            }
            if (href.fragment) {
                navigationExtras.fragment = href.fragment;
            }
            if (href.routerLink && href.routerLink.length > 0) {
                this.router.navigate(href.routerLink, navigationExtras);
            }
        }
    }
};
CksRouteService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CksRouteService_Factory() { return new CksRouteService(i0.ɵɵinject(i1.Router)); }, token: CksRouteService, providedIn: "root" });
CksRouteService = tslib_1.__decorate([
    Injectable({ providedIn: 'root' }),
    tslib_1.__metadata("design:paramtypes", [Router])
], CksRouteService);
export { CksRouteService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWNoYWthbnMvIiwic291cmNlcyI6WyJzZXJ2aWNlL3JvdXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFvQixNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBRzNELElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFDMUIsWUFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFBRyxDQUFDO0lBRXRDLFFBQVEsQ0FBQyxJQUFTO1FBQ2hCLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQzVCLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUM3QjthQUFNO1lBQ0wsTUFBTSxnQkFBZ0IsR0FBcUIsRUFBRSxDQUFDO1lBQzlDLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDcEIsZ0JBQWdCLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDakQ7WUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pCLGdCQUFnQixDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQzNDO1lBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO2FBQ3pEO1NBQ0Y7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7QUFuQlksZUFBZTtJQUQzQixVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7NkNBRUwsTUFBTTtHQUR2QixlQUFlLENBbUIzQjtTQW5CWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkV4dHJhcywgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBDa3NSb3V0ZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxuXG4gIG5hdmlnYXRlKGhyZWY6IGFueSkge1xuICAgIGlmICh0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gaHJlZjtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbmF2aWdhdGlvbkV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9IHt9O1xuICAgICAgaWYgKGhyZWYucXVlcnlQYXJhbXMpIHtcbiAgICAgICAgbmF2aWdhdGlvbkV4dHJhcy5xdWVyeVBhcmFtcyA9IGhyZWYucXVlcnlQYXJhbXM7XG4gICAgICB9XG4gICAgICBpZiAoaHJlZi5mcmFnbWVudCkge1xuICAgICAgICBuYXZpZ2F0aW9uRXh0cmFzLmZyYWdtZW50ID0gaHJlZi5mcmFnbWVudDtcbiAgICAgIH1cbiAgICAgIGlmIChocmVmLnJvdXRlckxpbmsgJiYgaHJlZi5yb3V0ZXJMaW5rLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoaHJlZi5yb3V0ZXJMaW5rLCBuYXZpZ2F0aW9uRXh0cmFzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==
import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class CksRouteService {
  constructor(private router: Router) {}

  navigate(href: any) {
    if (typeof href === 'string') {
      window.location.href = href;
    } else {
      const navigationExtras: NavigationExtras = {};
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
}

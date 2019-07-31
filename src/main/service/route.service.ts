import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class CksRouteService {
  constructor(private router: Router) {}

  navigate(navigation: any) {
    if (typeof navigation === 'string') {
      window.location.href = navigation;
    } else {
      const navigationExtras: NavigationExtras = {};
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
}

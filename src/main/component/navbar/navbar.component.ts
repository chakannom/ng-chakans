import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CksNavbarService } from '../../service/navbar.service';
import { CksRouteService } from '../../service/route.service';

@Component({
  selector: 'cks-navbar',
  templateUrl: './navbar.component.html'
})
export class CksNavbarComponent {
  @Input() brand: any;
  @Input() menuItems: any[];
  isNavbarViewed: Observable<boolean>;
  isNavbarCollapsed: boolean;

  constructor(private navbarService: CksNavbarService, private routeService: CksRouteService) {
    this.isNavbarCollapsed = true;
    this.isNavbarViewed = this.navbarService.isNavbarViewed;
  }

  doAction(navigation: any) {
    this.collapseNavbar();
    if (navigation) {
      if (typeof navigation === 'function') {
        navigation();
      } else {
        this.routeService.navigate(navigation);
      }
    }
  }

  collapseNavbar() {
    this.isNavbarCollapsed = true;
  }

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
}

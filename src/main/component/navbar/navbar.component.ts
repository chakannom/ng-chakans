import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CksNavbarService, CksRouteService } from '../../service';

@Component({
  selector: 'cks-navbar',
  templateUrl: './navbar.component.html'
})
export class CksNavbarComponent implements OnInit {
  @Input() brand: any;
  @Input() menuItems: any[];
  isNavbarViewed: Observable<boolean>;
  isNavbarCollapsed: boolean;

  constructor(private navbarService: CksNavbarService, private routeService: CksRouteService) {
    this.isNavbarCollapsed = true;
    this.isNavbarViewed = this.navbarService.isNavbarViewed;
  }

  ngOnInit() {}

  navigate(href: any) {
    if (href) {
      this.routeService.navigate(href);
    }
  }

  collapseNavbar() {
    this.isNavbarCollapsed = true;
  }

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
}

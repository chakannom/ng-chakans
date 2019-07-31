import { Component, Input, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { CksSidebarService } from '../../service/sidebar.service';
import { CksRouteService } from '../../service/route.service';

@Component({
  selector: 'cks-sidebar',
  templateUrl: './sidebar.component.html'
})
export class CksSidebarComponent {
  @Input() headerTemplate: TemplateRef<any>;
  @Input() contentTemplate: TemplateRef<any>;
  @Input() footerTemplate: TemplateRef<any>;
  @Input() menuItems: any[];
  isSidebarViewed: Observable<boolean>;
  isSidebarCollapsed: boolean;

  constructor(private sidebarService: CksSidebarService, private routeService: CksRouteService) {
    this.isSidebarCollapsed = true;
    this.isSidebarViewed = this.sidebarService.isSidebarViewed;
  }

  doAction(navigation: any) {
    this.collapseSidebar();
    if (navigation) {
      if (typeof navigation === 'function') {
        navigation();
      } else {
        this.routeService.navigate(navigation);
      }
    }
  }

  collapseSidebar() {
    this.isSidebarCollapsed = true;
  }

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  isUsedRouterLink(navigation: any) {
    if (!navigation || typeof navigation === 'function' || typeof navigation === 'string') {
      return false;
    }
    return true;
  }
}

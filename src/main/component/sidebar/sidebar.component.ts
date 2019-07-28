import { Component, Input, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { CksSidebarService, CksRouteService } from '../../service';

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

  constructor(private sidebarService: CksSidebarService, private routeService: CksRouteService) {
    this.isSidebarViewed = this.sidebarService.isSidebarViewed;
  }

  navigate(href: any) {
    if (href) {
      this.routeService.navigate(href);
    }
  }
}

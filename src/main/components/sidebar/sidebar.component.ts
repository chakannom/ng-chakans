/*
 Copyright 2019 ChaKanNom

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */
import { Component, Input, TemplateRef, HostBinding } from '@angular/core';
import { Observable } from 'rxjs';
import { CksSidebarService } from './sidebar.service';
import { CksRouteService } from '../../services/route.service';

@Component({
  selector: 'cks-sidebar',
  templateUrl: './sidebar.component.html'
})
export class CksSidebarComponent {
  @HostBinding('class.cks-sidebar') _header = true;

  constructor() {}

  toggleDropdown() {}

  /*
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
  */
}

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
import { Component, Input, OnInit, OnDestroy, Inject, Renderer2, HostBinding } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { CksRouteService } from '../../services/route.service';

@Component({
  selector: 'cks-topbar',
  templateUrl: './topbar.component.html'
})
export class CksTopbarComponent implements OnInit, OnDestroy {
  @Input() fixed: boolean;
  @Input() withSidebar: boolean;
  @Input() textItems: any[];
  @Input() iconItems: any[];
  @Input() userImgUrl: string;
  @Input() withSubheader: boolean;
  @Input() breadcrumbItems: any[];

  @HostBinding('class.cks-topbar') _header = true;
  @HostBinding('class.fixed-top') _fixedTop = false;
  @HostBinding('class.position-fixed') _positionFixed = false;
  @HostBinding('class.cks-topbar-with-sidebar') _withSidebar = false;
  @HostBinding('class.cks-topbar-with-subheader') _withSubHeader = false;

  classNameForBody = 'cks-body';

  constructor(@Inject(DOCUMENT) private document: any, private renderer: Renderer2, private routeService: CksRouteService) {}

  ngOnInit(): void {
    this._fixedTop = this._positionFixed = this.fixed;
    this._withSidebar = this.withSidebar;
    this._withSubHeader = this.withSubheader;
    this.textItems = this.textItems ? this.textItems.slice(0, 3) : [];
    this.iconItems = this.iconItems ? this.iconItems.slice(0, 6) : [];
    if (this.fixed) {
      this.classNameForBody += '-fixed-topbar';
      if (this.withSubheader) {
        this.classNameForBody += '-with-subheader';
      }
      this.renderer.addClass(this.document.body, this.classNameForBody);
    }
  }

  ngOnDestroy(): void {
    if (this.fixed) {
      this.renderer.removeClass(this.document.body, this.classNameForBody);
    }
  }

  doAction(navigation: any) {
    if (navigation) {
      if (typeof navigation === 'function') {
        navigation();
      } else {
        this.routeService.navigate(navigation);
      }
    }
  }
}

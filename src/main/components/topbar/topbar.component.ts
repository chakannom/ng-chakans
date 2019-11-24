import { Component, Input, OnInit, OnDestroy, Inject, Renderer2, HostBinding } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { CksRouteService } from '../../services/route.service';

@Component({
  selector: 'cks-topbar',
  templateUrl: './topbar.component.html'
})
export class CksTopbarComponent implements OnInit, OnDestroy {
  @Input() fixed: boolean;
  @Input() textItems: any[];
  @Input() iconItems: any[];
  @Input() userImgUrl: string;
  @Input() withSubheader: boolean;
  @Input() breadcrumbItems: any[];

  @HostBinding('class.cks-header') _header = true;
  @HostBinding('class.fixed-top') _fixedTop = false;
  @HostBinding('class.position-fixed') _positionFixed = false;
  @HostBinding('class.cks-header-with-subheader') _withSubHeader = false;

  constructor(@Inject(DOCUMENT) private document: any, private renderer: Renderer2, private routeService: CksRouteService) {}

  ngOnInit(): void {
    this._fixedTop = this._positionFixed = this.fixed;
    this._withSubHeader = this.withSubheader;
    this.textItems = this.textItems ? this.textItems.slice(0, 3) : [];
    this.iconItems = this.iconItems ? this.iconItems.slice(0, 6) : [];
  }

  ngOnDestroy(): void {}

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

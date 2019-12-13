import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: '[cks-sidebar]',
  template: `
    <cks-sidebar></cks-sidebar>
  `
})
export class SidebarComponent implements OnInit {
  constructor(translate: TranslateService) {}

  ngOnInit() {}
}

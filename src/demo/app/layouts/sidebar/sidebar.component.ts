import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: '[cks-sidebar]',
  template: `
    <cks-sidebar></cks-sidebar>
  `,
  styles: [':host { margin: inherit; }']
})
export class SidebarForLayoutComponent implements OnInit {
  constructor(translate: TranslateService) {}

  ngOnInit() {}
}

import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: '[cks-sidebar]',
  template: `
    <cks-sidebar [brand]="brand"></cks-sidebar>
  `
})
export class SidebarComponent implements OnInit {
  brand: any;

  constructor(translate: TranslateService) {}

  ngOnInit() {
    this.brand = {
      title: {
        label: 'Gooroom'
      },
      version: 'vUNKNOWN'
    };
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[cks-navbar]',
  template: `
    <cks-navbar [brand]="brand" [menuItems]="menuItems"></cks-navbar>
  `
})
export class NavbarComponent implements OnInit {
  brand: any;
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.brand = {
      title: {
        label: 'NgChakansModule',
        translateKey: 'global.title'
      },
      version: 'vUNKNOWN'
    };
  }
}

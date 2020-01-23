import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: '[cks-sidebar]',
  template: `
    <cks-sidebar [brand]="brand" [menuItems]="menuItems"></cks-sidebar>
  `
})
export class SidebarComponent implements OnInit {
  brand: any;
  menuItems: any[];

  constructor(translate: TranslateService) {}

  ngOnInit() {
    this.brand = {
      title: {
        label: 'Gooroom'
      },
      version: 'vUNKNOWN'
    };
    this.menuItems = [
      {
        type: 'link',
        navigation: {
          routerLink: ['/navbar']
        },
        icon: ['fa', 'home'],
        name: {
          label: 'Home',
          translateKey: 'global.navbar.home'
        }
      },
      {
        type: 'title',
        name: {
          label: 'TITLE',
          translateKey: 'global.navbar.title'
        }
      },
      {
        type: 'link',
        navigation: {
          routerLink: ['/navbar']
        },
        icon: ['fa', 'home'],
        name: {
          label: 'Home',
          translateKey: 'global.navbar.home'
        }
      },
      {
        type: 'dropdown',
        id: 'home-menu',
        icon: ['fa', 'home'],
        name: {
          label: 'Home',
          translateKey: 'global.navbar.home'
        },
        subItems: [
          {
            navigation: {
              routerLink: ['/navbar']
            },
            name: {
              label: 'Home',
              translateKey: 'global.navbar.home'
            }
          },
          {
            name: {
              label: 'Home',
              translateKey: 'global.navbar.home'
            }
          }
        ]
      },
      {
        type: 'divider'
      }
    ];
  }
}

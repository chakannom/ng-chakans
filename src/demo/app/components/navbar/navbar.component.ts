import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: '[cks-navbar]',
  template: `
    <cks-navbar [brand]="brand" [menuItems]="menuItems"></cks-navbar>
  `
})
export class NavbarComponent implements OnInit {
  brand: any;
  menuItems: any[];

  constructor(translate: TranslateService) {
    translate.setDefaultLang('ko');
    translate.use('ko');
  }

  ngOnInit() {
    this.brand = {
      title: {
        label: 'NgChakans'
      },
      version: 'vUNKNOWN'
    };
    this.menuItems = [
      {
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
            icon: ['fa', 'home'],
            name: {
              label: 'Home',
              translateKey: 'global.navbar.home'
            }
          },
          {
            icon: ['fa', 'home'],
            name: {
              label: 'Home',
              translateKey: 'global.navbar.home'
            }
          }
        ]
      }
    ];
  }
}

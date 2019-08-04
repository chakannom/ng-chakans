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
        label: 'NgChakansModule'
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
          label: 'Home'
        }
      },
      {
        id: 'home-menu',
        icon: ['fa', 'home'],
        name: {
          label: 'Home'
        },
        subItems: [
          {
            navigation: {
              routerLink: ['/navbar']
            },
            icon: ['fa', 'home'],
            name: {
              label: 'Home'
            }
          },
          {
            icon: ['fa', 'home'],
            name: {
              label: 'Home'
            }
          }
        ]
      }
    ];
  }
}

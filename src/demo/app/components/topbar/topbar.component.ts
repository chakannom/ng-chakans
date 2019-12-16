import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: '[cks-topbar]',
  template: `
    <cks-topbar
      [fixed]="true"
      [textItems]="textItems"
      [iconItems]="iconItems"
      [withSubheader]="true"
      [breadcrumbItems]="breadcrumbItems"
    ></cks-topbar>
    <br /><br /><br /><br /><br /><br />
    <cks-topbar [textItems]="textItems" [iconItems]="iconItems"></cks-topbar>
    <br />
    <cks-topbar [withSidebar]="true" [textItems]="textItems" [iconItems]="iconItems"></cks-topbar>
  `
})
export class TopbarComponent implements OnInit {
  brand: any;
  textItems: any[];
  iconItems: any[];
  userImgUrl: string;
  breadcrumbItems: any[];

  constructor(translate: TranslateService) {
    translate.setDefaultLang('ko');
    translate.use('ko');
  }

  ngOnInit() {
    this.textItems = [
      {
        navigation: {
          routerLink: ['/components/topbar']
        },
        name: {
          label: 'Dashboard',
          translateKey: 'global.topbar.dashboard'
        }
      },
      {
        navigation: {
          routerLink: ['/components/topbar']
        },
        name: {
          label: 'Users',
          translateKey: 'global.topbar.users'
        }
      },
      {
        navigation: {
          routerLink: ['/components/topbar']
        },
        name: {
          label: 'Settings',
          translateKey: 'global.topbar.settings'
        }
      }
    ];
    this.iconItems = [
      {
        navigation: {
          routerLink: ['/components/topbar']
        },
        icon: ['far', 'bell']
      },
      {
        navigation: {
          routerLink: ['/components/topbar']
        },
        icon: ['fas', 'list-ul'],
        tooltip: {
          label: 'Tasks',
          translateKey: 'global.topbar.tasks'
        }
      }
    ];
    this.breadcrumbItems = [
      {
        navigation: {
          routerLink: ['/components/topbar']
        },
        name: {
          label: 'Home',
          translateKey: 'global.topbar.home'
        }
      },
      {
        name: {
          label: 'Dashboard',
          translateKey: 'global.topbar.dashboard'
        }
      }
    ];
  }
}

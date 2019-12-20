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
import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class CksRouteService {
  constructor(private router: Router) {}

  navigate(navigation: any) {
    if (typeof navigation === 'string') {
      window.location.href = navigation;
    } else {
      const navigationExtras: NavigationExtras = {};
      if (navigation.queryParams) {
        navigationExtras.queryParams = navigation.queryParams;
      }
      if (navigation.fragment) {
        navigationExtras.fragment = navigation.fragment;
      }
      if (navigation.routerLink && navigation.routerLink.length > 0) {
        this.router.navigate(navigation.routerLink, navigationExtras);
      }
    }
  }
}

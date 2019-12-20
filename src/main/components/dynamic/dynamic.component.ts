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
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cks-dynamic',
  templateUrl: './dynamic.component.html'
})
export class CksDynamicComponent implements OnInit {
  @ViewChild('content', { read: ViewContainerRef, static: true })
  content: ViewContainerRef;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const componentFactory = this.route.snapshot.data['factory'];
    this.content.createComponent(componentFactory);
  }
}

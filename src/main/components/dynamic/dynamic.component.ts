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

import { OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
export declare class CksDynamicComponent implements OnInit {
    private route;
    content: ViewContainerRef;
    constructor(route: ActivatedRoute);
    ngOnInit(): void;
}

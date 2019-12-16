import { BehaviorSubject } from 'rxjs';
export declare class CksSidebarService {
    sidebarViewed: BehaviorSubject<boolean>;
    constructor();
    readonly isSidebarViewed: import("rxjs").Observable<boolean>;
    setSidebarViewed(sidebarViewed: boolean): void;
}

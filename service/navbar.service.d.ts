import { BehaviorSubject } from 'rxjs';
export declare class CksNavbarService {
    navbarViewed: BehaviorSubject<boolean>;
    constructor();
    readonly isNavbarViewed: import("rxjs").Observable<boolean>;
    setNavbarViewed(navbarViewed: boolean): void;
}

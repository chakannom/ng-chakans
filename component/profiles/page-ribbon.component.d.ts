import { OnInit } from '@angular/core';
import { CksProfileService } from '../../service';
import { CksProfileInfo } from '../../model';
export declare class CksPageRibbonComponent implements OnInit {
    private profileService;
    profileInfo: CksProfileInfo;
    ribbonEnv: string;
    constructor(profileService: CksProfileService);
    ngOnInit(): void;
}

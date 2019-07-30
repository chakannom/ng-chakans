import { OnInit } from '@angular/core';
import { CksProfileService } from '../../service/profile.service';
import { CksProfileInfo } from '../../model/profile-info.model';
export declare class CksPageRibbonComponent implements OnInit {
    private profileService;
    profileInfo: CksProfileInfo;
    ribbonEnv: string;
    constructor(profileService: CksProfileService);
    ngOnInit(): void;
}

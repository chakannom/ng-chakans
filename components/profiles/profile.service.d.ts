import { HttpClient } from '@angular/common/http';
import { CksProfileInfo } from './profile-info.model';
import { CksConfigService } from '../../config.service';
export declare class CksProfileService {
    private configService;
    private http;
    private infoUrl;
    private profileInfo;
    constructor(configService: CksConfigService, http: HttpClient);
    getProfileInfo(): Promise<CksProfileInfo>;
}

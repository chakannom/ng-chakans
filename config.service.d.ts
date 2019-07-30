import { CksModuleConfig } from './config';
export declare class CksConfigService {
    CONFIG_OPTIONS: CksModuleConfig;
    constructor(moduleConfig?: CksModuleConfig);
    getConfig(): CksModuleConfig;
}

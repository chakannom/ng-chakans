import { Injectable } from '@angular/core';
import { CksModuleConfig } from './config';

@Injectable({
  providedIn: 'root'
})
export class CksConfigService {
  CONFIG_OPTIONS: CksModuleConfig;

  constructor(moduleConfig?: CksModuleConfig) {
    this.CONFIG_OPTIONS = {
      ...new CksModuleConfig(),
      ...moduleConfig
    };
  }

  getConfig(): CksModuleConfig {
    return this.CONFIG_OPTIONS;
  }
}

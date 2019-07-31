import { CksModuleConfig } from '../main/config';
import { CksConfigService } from '../main/config.service';

describe('ConfigService Test', () => {
  it('should have default values as specified in ModuleConfig when initiated', () => {
    const defaultConfig = new CksModuleConfig();
    const configService = new CksConfigService();
    expect(defaultConfig.serverApiUrl).toBe(configService.getConfig().serverApiUrl);
  });

  it('should not have default values as specified in ModuleConfig when initiated', () => {
    const defaultConfig = new CksModuleConfig();
    const configService = new CksConfigService({ serverApiUrl: '/api' });
    expect(defaultConfig.serverApiUrl).not.toBe(configService.getConfig().serverApiUrl);
    expect(configService.getConfig().serverApiUrl).toBe('/api');
  });
});

import { CksModuleConfig } from '../main/config';

describe('ModuleConfig Test', () => {
  it('should have default values as specified', () => {
    const config = new CksModuleConfig();

    expect(config.serverApiUrl).toBe('/');
  });
});

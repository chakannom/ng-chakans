import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SampleAppModule } from './app.module';

if (module['hot']) {
  module['hot'].accept();
}

platformBrowserDynamic()
  .bootstrapModule(SampleAppModule, { preserveWhitespaces: true })
  .then(success => console.log(`Application started`))
  .catch(err => console.error(err));

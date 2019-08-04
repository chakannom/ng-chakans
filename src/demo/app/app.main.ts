import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgChakansAppModule } from './app.module';

if (module['hot']) {
  module['hot'].accept();
}

platformBrowserDynamic()
  .bootstrapModule(NgChakansAppModule, { preserveWhitespaces: true })
  .then(success => console.log(`Application started`))
  .catch(err => console.error(err));

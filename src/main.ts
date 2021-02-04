<<<<<<< HEAD
=======
import 'hammerjs';
>>>>>>> 6f705bb4acb32c47658e93f78b9f83190f25d2a3
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
<<<<<<< HEAD
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
});
=======
     platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
   });
>>>>>>> 6f705bb4acb32c47658e93f78b9f83190f25d2a3

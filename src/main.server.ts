import { enableProdMode } from '@angular/core';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

export { AppServerModule } from './app/app.server.module';
<<<<<<< HEAD
export { renderModule, renderModuleFactory } from '@angular/platform-server';
=======
export { ngExpressEngine } from "@nguniversal/express-engine";
export { provideModuleMap } from "@nguniversal/module-map-ngfactory-loader";

>>>>>>> 6f705bb4acb32c47658e93f78b9f83190f25d2a3

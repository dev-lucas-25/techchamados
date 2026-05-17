import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { importProvidersFrom } from '@angular/core';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    importProvidersFrom(NgCircleProgressModule.forRoot({
      radius: 60,
      space: -10,
      outerStrokeWidth: 10,
      innerStrokeWidth: 10,
      animationDuration: 300,
      showSubtitle: false
    }))
  ],
});

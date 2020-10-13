import { HashLocationStrategy, isPlatformBrowser, LocationStrategy } from '@angular/common';
import { APP_ID, Inject, NgModule, PLATFORM_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { LayoutModule } from '@angular/cdk/layout';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavModule } from './nav/nav.module';
import { CoreModule } from './core/core.module';

import { EffectsModule } from '@ngrx/effects';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent],
    imports: [
        BrowserModule.withServerTransition({ appId: 'my-shop' }),
        BrowserAnimationsModule,
        NavModule,
        LayoutModule,
        CoreModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    ],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
})
export class AppModule {
    constructor(@Inject(PLATFORM_ID) private platformId: {}, @Inject(APP_ID) private appId: string) {
        const platform = isPlatformBrowser(platformId) ? 'in the browser' : 'on the server';
    }
}

import { isPlatformBrowser } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { APP_ID, Inject, NgModule, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroService } from './hero.service';
import { HeroesComponent } from './heroes/heroes.component';
import { InMemoryDataService } from './in-memory-data.service';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';

import { SharedModule } from './shared/shared.module';

import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';

import { NavComponent } from './shared/nav/nav.component';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroesComponent,
        HeroDetailComponent,
        MessagesComponent,
        HeroSearchComponent,
        NavComponent,
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'tour-of-heroes' }),
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
            dataEncapsulation: false,
        }),
        BrowserAnimationsModule,
        SharedModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
    ],
    providers: [HeroService, MessageService],
})
export class AppModule {
    constructor(@Inject(PLATFORM_ID) private platformId: Object, @Inject(APP_ID) private appId: string) {
        const platform = isPlatformBrowser(platformId) ? 'in the browser' : 'on the server';
        console.log(`Running ${platform} with appId=${appId}`);
    }
}

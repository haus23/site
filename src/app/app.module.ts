import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RankingModule } from './ranking/ranking.module';
import { SharedModule } from './shared/shared.module';
import { environment } from '../environments/environment';
import { HammerConfig } from './hammer.config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),

    SharedModule,

    RankingModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HAMMER_GESTURE_CONFIG, useClass: HammerConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

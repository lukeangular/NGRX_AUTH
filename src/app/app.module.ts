import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SpinnnerComponent } from './shared/spinnner/spinnner.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from './environments/environment';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './appstate/app.state';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffect } from './auth/state/auth.effects';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SpinnnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EffectsModule.forRoot([AuthEffect]),
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument(
      {
        maxAge: 25, // number of state it could show (last 25)
        logOnly: environment.production
      }
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

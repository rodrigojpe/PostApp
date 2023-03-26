import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// ngrx
import { StoreModule } from '@ngrx/store';
import { postReducer } from './post/post.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { PostModule } from './post/post.module';
import { ReactiveFormsModule } from '@angular/forms';

import { appReducers } from './app.reducer';

@NgModule({
  declarations: [
    AppComponent,
   
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
  PostModule,
  StoreModule.forRoot( appReducers ),
  StoreDevtoolsModule.instrument({
    maxAge: 25, // Retains last 25 states
    logOnly: !isDevMode(), // Restrict extension to log-only mode
    autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
    traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
  }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

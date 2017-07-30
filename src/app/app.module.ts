import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';

import { HttpModule } from '@angular/http';

import {dataService} from './app.service';

import { AppComponent } from './app.component';
import { mapComponent } from './app.map';
import { AppLogin } from './app.login';
import {MdInputModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    mapComponent,
    AppLogin
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdInputModule,
    MdButtonModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBjR-7KOsTx0Yt4rjMwTE564rxgggu_8Vc'
    }),
    RouterModule.forRoot([
        {path: '', component: AppLogin},
        {path: 'chat/:room', component: mapComponent}
    ])
    ],
  providers: [dataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

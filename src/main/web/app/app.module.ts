import './vendor.ts';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {ClarityModule} from "@clr/angular";
import { MainComponent } from './main/main.component';
import { MapViewComponent } from './map-view/map-view.component';
import {GisService} from "./service/gis.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    MapViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule
  ],
  providers: [GisService],
  bootstrap: [AppComponent]
})
export class AppModule { }

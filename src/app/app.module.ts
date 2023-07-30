import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NcMatModule } from './mat.moudle';
import { LayoutEngineComponent } from './engine/layout-engine/layout-engine.component';
import { WidgetEngineComponent } from './engine/widget-engine/widget-engine.component';
import { LibModule } from './libs/lib.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutEngineComponent,
    WidgetEngineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NcMatModule,
    LibModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

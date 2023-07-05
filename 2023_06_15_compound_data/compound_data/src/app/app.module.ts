import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HibaComponent } from './hiba/hiba.component';
import { ArrayComponent } from './array/array.component';
import { ObjectComponent } from './object/object.component';

@NgModule({
  declarations: [
    AppComponent,
    HibaComponent,
    ArrayComponent,
    ObjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

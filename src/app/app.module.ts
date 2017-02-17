import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AppComponent, LiliComponent, LiDeComponent, ModLiComponent} from './app.component';
import {DataService} from "./app.dataservice";
import {LogService} from "./app.logservice";

@NgModule({
  declarations: [
    AppComponent,
    LiliComponent,
    LiDeComponent,
    ModLiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService,
              LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }

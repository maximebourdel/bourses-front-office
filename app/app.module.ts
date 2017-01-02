import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule }  from '@angular/http';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }             from './app.component';

import { QuotesListComponent } from './yahoo/finance/quotes/quotes-list.component';
import { IndustryListComponent } from './yahoo/finance/industry/industry-list.component';

import { WikiComponent }      from './wiki/wiki.component';
import { WikiSmartComponent } from './wiki/wiki-smart.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    QuotesListComponent,
    IndustryListComponent,
    WikiComponent,
    WikiSmartComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }



/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/

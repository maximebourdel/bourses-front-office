import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { FormsModule }              from '@angular/forms';
import { HttpModule, JsonpModule }  from '@angular/http';

import { AppRoutingModule }         from './app-routing.module';

import { AppComponent }             from './app.component';


import { QuotesDetailComponent }    from './yahoo/finance/quotes/quotes-detail.component';
import { QuotesListComponent }      from './yahoo/finance/quotes/quotes-list.component';

import { IndustryListComponent }    from './yahoo/finance/industry/industry-list.component';

import { WikiComponent }            from './wiki/wiki.component';
import { WikiSmartComponent }       from './wiki/wiki-smart.component';

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
    QuotesDetailComponent,
    QuotesListComponent,
    IndustryListComponent,
    WikiComponent,
    WikiSmartComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

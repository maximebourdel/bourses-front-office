import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';
import { IndustryListComponent }    from './yahoo/finance/industry/industry-list.component';
import { QuotesListComponent }      from './yahoo/finance/quotes/quotes-list.component';
import { QuotesDetailComponent }    from './yahoo/finance/quotes/quotes-detail.component';
import { AppComponent }             from './app.component';

const routes: Routes = [
    { path: '', redirectTo: '/quotes', pathMatch: 'full' },
    { path: 'quotes', component: QuotesListComponent },
    { path: 'industry', component: IndustryListComponent },
    { path: 'quotes/:shortName', component: QuotesDetailComponent },
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}

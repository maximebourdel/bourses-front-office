import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';
import { IndustryListComponent }    from './yahoo/finance/industry/industry-list.component';
import { QuotesListComponent }      from './yahoo/finance/quotes/quotes-list.component';
import { AppComponent }             from './app.component';

const routes: Routes = [
    { path: '', redirectTo: '/quotes', pathMatch: 'full' },
    { path: 'quotes', component: QuotesListComponent },
    { path: 'industry', component: IndustryListComponent },
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
import { NgModule }                     from '@angular/core';
import { RouterModule, Routes }         from '@angular/router';
import { IndustryListComponent }        from './yahoo/finance/industry/industry-list.component';
import { QuotesListComponent }          from './yahoo/finance/quotes/quotes-list.component';
import { QuotesDetailComponent }        from './yahoo/finance/quotes/quotes-detail.component';
import { HistoricaldataListComponent }  from './yahoo/finance/historicaldata/historicaldata-list.component';
import { DashboardListComponent }       from './dashboard/dashboard-list.component';


const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'quotes', component: QuotesListComponent },
    { path: 'industry', component: IndustryListComponent },
    
    { path: 'dashboard/:shortName', component: DashboardListComponent },
    { path: 'quotes/:shortName', component: QuotesDetailComponent },
    { path: 'historicaldata/:shortName', component: HistoricaldataListComponent }
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}

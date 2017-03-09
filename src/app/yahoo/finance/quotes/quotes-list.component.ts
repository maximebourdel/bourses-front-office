import { Component, OnInit }    from '@angular/core';

import { Router }               from '@angular/router';

import { Quotes }               from './quotes';
import { QuotesService }        from './quotes.service';

@Component({
    selector: 'quotes-list',
    providers: [QuotesService],
    templateUrl: 'quotes-list.component.html'
})
export class QuotesListComponent implements OnInit {
    
    errorMessage: string;
    listQuotes: Quotes[];

    constructor (
        private quotesService: QuotesService,
        private router: Router,
    ) {}
    
    ngOnInit(): void { this.getListQuotes() } 

    getListQuotes() {
        this.quotesService.getListQuotes()
                        .subscribe(
                            listQuotes => this.listQuotes = listQuotes,
                            error =>  this.errorMessage = <any>error
                        );
    }   
    
    gotoDetail(quotes: Quotes): void {
        this.router.navigate(['/quotes', quotes.Symbol]);
    }
    
    gotoDetailHistoricaldata(shortName: String): void {
        this.router.navigate(['/historicaldata', shortName]);
    }

    gotoListDashboard(shortName: String): void {
        this.router.navigate(['/dashboard', shortName]);
    }
}

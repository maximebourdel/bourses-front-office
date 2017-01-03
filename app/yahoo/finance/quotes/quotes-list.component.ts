import { Component, OnInit }    from '@angular/core';

import { Router }               from '@angular/router';

import { Quotes }               from './quotes';
import { QuotesService }        from './quotes.service';

@Component({
    moduleId: module.id,
    selector: 'quotes-list',
    providers: [QuotesService],
    templateUrl: 'quotes-list.component.html',
    styleUrls: ['.error {color:red;}']
})
export class QuotesListComponent implements OnInit {
    
    errorMessage: string;
    listQuotes: Quotes[];
    mode = 'Observable';

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
}

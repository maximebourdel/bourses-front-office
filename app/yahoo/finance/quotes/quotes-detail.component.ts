import { Component, OnInit }        from '@angular/core';

import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Quotes }                   from './quotes';
import { QuotesService }            from './quotes.service';

@Component({
    moduleId: module.id,
    selector: 'quotes-detail',
    providers: [QuotesService],
    templateUrl: 'quotes-detail.component.html',
    styleUrls: ['.error {color:red;}']
}) 
export class QuotesDetailComponent implements OnInit {
    
    errorMessage: string;
    quotes: Quotes;
    mode = 'Observable';
 
    constructor (
        private quotesService: QuotesService,
        private route: ActivatedRoute,
        private location: Location,
    ) {}
    
    ngOnInit(): void{
        this.route.params
            .switchMap((params: Params) => this.quotesService.getQuotes(params['shortName']))
            .subscribe(quotes => this.quotes = quotes);
    }
        
}

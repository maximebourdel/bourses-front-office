import { Component, OnInit }    from '@angular/core';

import { Router }               from '@angular/router';
 
import { Industry }             from './industry';
import { IndustryService }      from './industry.service';

import { Observable }           from 'rxjs/Observable';

@Component({
    moduleId: module.id,
    selector: 'industry-list',
    templateUrl: 'industry-list.component.html',
    providers: [ IndustryService ],
    styles: ['.error {color:red;}']
})
export class IndustryListComponent implements OnInit {
    
    errorMessage: string;
    listIndustry: Industry[];
    listSearchIndustry: Observable<Industry[]>; 
    shortName: string;

    constructor (
        private industryService: IndustryService,
        private router: Router,
    ) {}

    ngOnInit() { this.getListIndustry(); }

    search (term: string) {
        this.listSearchIndustry = this.industryService.getSearchIndustry(term);
    }

    getListIndustry() {
        
        this.industryService.getListIndustry()
            .subscribe(
                listIndustry => this.listIndustry = listIndustry,
                error =>  this.errorMessage = <any>error,
            );
    }
  
    gotoListDashboard(shortName: String): void {
        this.router.navigate(['/dashboard', shortName]);
    }
    
    gotoDetailQuotes(shortName: String): void {
        this.router.navigate(['/quotes', shortName]);
    }
    
    gotoDetailHistoricaldata(shortName: String): void {
        this.router.navigate(['/historicaldata', shortName]);
    }
}

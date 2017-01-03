// Observable Version
import { Component, OnInit }    from '@angular/core';

import { Router } from '@angular/router';
 
import { Industry }             from './industry';
import { Observable }           from 'rxjs/Observable';

import { IndustryService }      from './industry.service';


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
    mode = 'Observable';
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
  
    gotoDetailQuotes(shortName: String): void {
        this.router.navigate(['/quotes', shortName]);
    }   
  
}

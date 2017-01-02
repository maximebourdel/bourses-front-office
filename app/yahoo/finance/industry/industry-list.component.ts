// Observable Version
import { Component, OnInit } from '@angular/core';
import { Industry }              from './industry';
import { Observable }       from 'rxjs/Observable';

import { IndustryService }       from './industry.service';


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

  constructor (private industryService: IndustryService) {}

  ngOnInit() { this.getIndustry(); }

  search (term: string) {
    this.listSearchIndustry = this.industryService.getSearchIndustry(term);
  }

  getIndustry() {
    this.industryService.getIndustry()
                    .subscribe(
                        listIndustry => this.listIndustry = listIndustry,
                        error =>  this.errorMessage = <any>error,
                    );
  }
}

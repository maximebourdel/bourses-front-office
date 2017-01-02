/* tslint:disable: member-ordering forin */
import { Component }        from '@angular/core';
import { Observable }       from 'rxjs/Observable';
import { Subject }          from 'rxjs/Subject';

import { WikipediaService } from './wikipedia.service';

@Component({
  moduleId: module.id,
  selector: 'my-wiki-smart',
  templateUrl: 'wiki.component.html',
  providers: [ WikipediaService ]
})
export class WikiSmartComponent {
  title   = 'Smarter Wikipedia Demo';
  fetches = 'Fetches when typing stops';
  items: Observable<string[]>;

  private searchTermStream = new Subject<string>();
  search(term: string) { this.searchTermStream.next(term); }

  constructor (private wikipediaService: WikipediaService) {
    this.items = this.searchTermStream
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap((term: string) => this.wikipediaService.search(term));
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
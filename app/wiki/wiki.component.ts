import { Component }        from '@angular/core';
import { Observable }       from 'rxjs/Observable';

import { WikipediaService } from './wikipedia.service';

@Component({
  moduleId: module.id,
  selector: 'my-wiki',
  templateUrl: 'wiki.component.html',
  providers: [ WikipediaService ]
})
export class WikiComponent {
  title   = 'Wikipedia Demo';
  fetches = 'Fetches after each keystroke';
  items: Observable<string[]>;

  search (term: string) {
    this.items = this.wikipediaService.search(term);
  }

  constructor (private wikipediaService: WikipediaService) { }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
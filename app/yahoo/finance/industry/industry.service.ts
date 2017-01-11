import { Injectable }                       from '@angular/core';
import { Http, Response }                   from '@angular/http';

import { Industry }                         from './industry';
import { Observable }                       from 'rxjs/Observable';

@Injectable()
export class IndustryService {
        
    constructor (private http: Http) {}
 
    getListIndustry (): Observable<Industry[]> {
        
        let url = 'http://localhost:80/bourses-back/web/app_dev.php/industry/all';

        return this.http.get(url)
                   .map( this.extractData )
                   .catch(this.handleError);         
    }
    
    getSearchIndustry (term: string): Observable<Industry[]> {
        
        let url = 'http://localhost:80/bourses-back/web/app_dev.php/industries/' + term;

        return this.http.get(url)
                   .map( this.extractData )
                   .catch(this.handleError);         
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }

    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
          const body = error.json() || '';
          const err = body.error || JSON.stringify(body);
          errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
          errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        console.error("errMsg");
        return Observable.throw(errMsg);
    }
}

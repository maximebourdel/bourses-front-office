import { Injectable }                       from '@angular/core';
import { Http, Response, URLSearchParams }  from '@angular/http';

import { Api }                         from './api';
import { Observable }                       from 'rxjs/Observable';

@Injectable()
export class ApiService {
        
    constructor (private http: Http) {}

    getApiService (dimensions: string , metrics: string): Observable<Api> {
        
        let url: string = 'http://localhost:8081/bourses/google-analytics';
        let params: URLSearchParams = new URLSearchParams();
    
        params.set('dimensions', dimensions);
        params.set('metrics', metrics);

        return this.http.get( url , { search: params })
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

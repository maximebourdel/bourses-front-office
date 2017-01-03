// Observable Version
import { Injectable }                       from '@angular/core';
import { Http, Response, URLSearchParams }  from '@angular/http';

import { Quotes }                           from './quotes';
import { Observable }                       from 'rxjs/Observable';

@Injectable()
export class QuotesService {
        
    constructor (private http: Http) {}

    getListQuotes (): Observable<Quotes[]> {
        /*
         * https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22PARRO.PA%22%2C%22AAPL%22%2C%22GOOG%22%2C%22MSFT%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys
         */
        
        let boursesUrl = 'https://query.yahooapis.com/v1/public/yql';
        
        let params = new URLSearchParams();
        params.set('q', 'select * from yahoo.finance.quotes where symbol in ("PARRO.PA","AAPL","GOOG","MSFT")');
        params.set('format', 'json');
        params.set('diagnostics', 'false'); //facultatif
        params.set('env', 'store://datatables.org/alltableswithkeys')
        
        return this.http.get(boursesUrl, { search: params })
                   .map( this.extractData )
                   .catch(this.handleError);
    }

    getQuotes (shortName: String): Observable<Quotes> {
        
        let boursesUrl = 'https://query.yahooapis.com/v1/public/yql';
        
        let params = new URLSearchParams();
        params.set('q', 'select * from yahoo.finance.quotes where symbol in ("'+ shortName +'")');
        params.set('format', 'json');
        params.set('diagnostics', 'false'); //facultatif
        params.set('env', 'store://datatables.org/alltableswithkeys')
        
        return this.http.get(boursesUrl, { search: params })
                   .map( this.extractData )
                   .catch(this.handleError);
    }


    private extractData(res: Response) {
        let body = res.json();
        return body.query.results.quote || { };
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
        return Observable.throw(errMsg);
    }
}

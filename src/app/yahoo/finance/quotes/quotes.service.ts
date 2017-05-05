// Observable Version
import { Injectable }                       from '@angular/core';
import { Http }                             from '@angular/http';

import { YahooFinanceService }              from '../yahoo-finance.service'

import { Quotes }                           from './quotes';
import { Observable }                       from 'rxjs/Observable';

@Injectable()
export class QuotesService extends YahooFinanceService {
        
    constructor (private http: Http) { super(); }

    getListQuotes (): Observable<Quotes[]> {
        
        //initialise les parametres par defauts
        super.setDefaultParams();
        
        super.addParam( 'q'
            , 'select * from yahoo.finance.quotes where symbol in ("PARRO.PA","AAPL","GOOG","MSFT","BND.PA")'
        );
        
        return this.http.get( super.getBoursesUrl(), { search: super.getParams() } )
                   .map( super.extractData )
                   .catch( super.handleError );
    }

    getQuotes (shortName: String): Observable<Quotes> {
        
        //initialise les parametres par defauts
        super.setDefaultParams();
        
        super.addParam( 'q'
            , 'select * from yahoo.finance.quotes where symbol in ("'+ shortName +'")'
        );
        
        return this.http.get( super.getBoursesUrl(), { search: super.getParams() } )
                   .map( super.extractData )
                   .catch( super.handleError );
    }
}

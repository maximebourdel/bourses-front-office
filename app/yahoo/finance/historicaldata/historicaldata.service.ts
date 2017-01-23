// Observable Version
import { Injectable }           from '@angular/core';
import { Http }                 from '@angular/http';

import { YahooFinanceService }  from '../yahoo-finance.service'

import { Historicaldata }       from './historicaldata';
import { Observable }           from 'rxjs/Observable';

@Injectable()
export class HistoricaldataService extends YahooFinanceService {
    
    constructor (private http: Http) { super(); }
    
    getListHistoricaldata (shortName: String): Observable<Historicaldata[]> {
                
        //initialise les parametres par defauts
        super.setDefaultParams();
        
        let dateJour = new Date();
        
        super.addParam( 'q'
            , 'select * from yahoo.finance.historicaldata where'
            + ' symbol = "'         + shortName + '"'
            + ' and startDate = "'  + new Date(dateJour.setDate(dateJour.getDate() - 500)).toISOString() + '"'
            + ' and endDate = "'    + new Date().toISOString() + '"'
            + ' | sort(field="Date") '
        );
              
        return this.http.get( super.getBoursesUrl(), { search: super.getParams() } )
                   .map( res =>  super.extractData(res) )
                   .catch( super.handleError );
                
    }    
}

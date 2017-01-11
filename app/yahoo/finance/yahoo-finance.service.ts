// Observable Version
import { Injectable }                       from '@angular/core';
import { Response, URLSearchParams }        from '@angular/http';

import { Observable }                       from 'rxjs/Observable';

@Injectable()
export abstract class YahooFinanceService {
    
    protected boursesUrl: string = 'https://query.yahooapis.com/v1/public/yql';
    protected params: URLSearchParams = new URLSearchParams();
    
    
    protected setDefaultParams() {
        this.addParam('format', 'json');
        this.addParam('diagnostics', 'false'); //facultatif
        this.addParam('env', 'store://datatables.org/alltableswithkeys');
    }
    
    protected extractData(res: Response) {
        let body = res.json();
        return body.query.results.quote || { };
    }    

    protected handleError (error: Response | any) {
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
    
    protected getBoursesUrl(): string {
        return this.boursesUrl;
    }

    protected getParams(): URLSearchParams {
        return this.params;
    }
    
    protected addParam(param: string, val: string) {
        this.params.set(param, val);
    }
    
    protected removeParam(param: string) {
        this.params.delete(param);
    }
}

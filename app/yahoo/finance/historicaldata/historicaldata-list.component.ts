import { Component, OnInit }        from '@angular/core';

import { ActivatedRoute, Params }   from '@angular/router';
 
import { Historicaldata }           from './historicaldata';
import { HistoricaldataService }    from './historicaldata.service';

@Component({
    moduleId: module.id,
    selector: 'historicaldata-list',
    templateUrl: 'historicaldata-list.component.html',
    providers: [ HistoricaldataService ],
    styles: ['chart { display: block;}']
})
export class HistoricaldataListComponent implements OnInit {
    
    errorMessage: string;
    listHistoricaldata: Historicaldata[];
    list: number[] = [];
    
    //Graph
    options: Object;
    
    constructor (
        private historicaldataService: HistoricaldataService,
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {
        
//        for (var i = 1; i <= 10; i++){
//            this.list.push(+this.listHistoricaldata[i].Open);
//        }
//        
//       this.options = {
//            title : { text : 'simple chart' },
//            series: [{
//                data: this.list,
//            }]
//        }; 
        
        this.getListHistoricaldata(); 
    }

    getListHistoricaldata() {
        this.route.params
            .switchMap((params: Params) => this.historicaldataService.getListHistoricaldata(params['shortName']))
            .subscribe(listHistoricaldata => this.listHistoricaldata = listHistoricaldata);
    }
}

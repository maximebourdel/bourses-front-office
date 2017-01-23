import { Component, OnInit }        from '@angular/core';

import { ActivatedRoute, Params }   from '@angular/router';
 
import { Historicaldata }           from './historicaldata';
import { HistoricaldataService }    from './historicaldata.service';


@Component({
    moduleId: module.id,
    selector: 'historicaldata-list',
    templateUrl: 'historicaldata-list.component.html',
    providers: [ HistoricaldataService ],
})
export class HistoricaldataListComponent implements OnInit {
    
    errorMessage: string;
    listHistoricaldata: Historicaldata[];
    
    constructor (
        private historicaldataService: HistoricaldataService,
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.getListHistoricaldata(); 
    }

    getListHistoricaldata() {
        this.route.params
            .switchMap((params: Params) => this.historicaldataService.getListHistoricaldata(params['shortName']))
            .subscribe(listHistoricaldata => this.listHistoricaldata = listHistoricaldata);
    }
}
 

/************************************************************
 ************ Changement de composant ***********************
 ************************************************************/


@Component({
    moduleId: module.id,
    selector: 'historicaldata-chart',
    template: `
        <chart [options]="options"></chart>
    `,
    providers: [ HistoricaldataService ],
    styles: ['chart { display: block;}']
})
export class HistoricaldataGraphComponent implements OnInit {
    
    errorMessage: string;
    listHigh: number[] = new Array();
    listLow: number[] = new Array();
    listDate: String[] = new Array();
        
    //Graph
    options: Object;
    
    constructor (
        private historicaldataService: HistoricaldataService,
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.getChartHistoricaldata();  
    }

    getChartHistoricaldata() {
          
        this.route.params
            .switchMap((params: Params)=> this.historicaldataService.getListHistoricaldata(params['shortName']))
            .subscribe((listHistoricaldata) => {
                
                for (let historicaldata of listHistoricaldata){
                    this.listDate.push(historicaldata.Date)
                    
                    this.listHigh.push(+historicaldata.High)
                    this.listLow.push(+historicaldata.Low)
                }
                
                this.options = {
                    title : { text : 'Récupération valeurs' },
                    xAxis: {
                        categories: this.listDate
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'right',
                        verticalAlign: 'middle',
                        borderWidth: 0
                    },
                    series: [
                         {name: 'High', data: this.listHigh }
                        ,{name: 'Low', data: this.listLow }
                    ]    
                };
                
            });         
    }
}

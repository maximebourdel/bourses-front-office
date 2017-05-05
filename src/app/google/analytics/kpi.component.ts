import { Component, OnInit }    from '@angular/core';
import { Http } from '@angular/http';

import { Router }               from '@angular/router';

import { Report }             from './report';
import { Api }             from './api';


import { ReportService }      from './report.service';
import { ApiService }      from './api.service';

import { Observable }           from 'rxjs/Observable';
 
@Component({
    moduleId: module.id,
    selector: 'kpi',
    templateUrl: 'kpi.html',
    styles: ['chart { display: block;}'],
    providers: [ ReportService,ApiService ],
})
export class KPIComponent implements OnInit { 
 
    errorMessage: string;
    listLegend: any = new Array();
    listData: any = new Array();
    listFinal: Object = new Object();
    listFinal2: any = new Array();

    //Graph
    optionsPie: Object;
    optionsPie2: Object;
    optionsPie3: Object;
    optionsLine: Object;


    constructor (
        private reportService: ReportService,
        private apiService: ApiService,
        private router: Router,
    ) {}
 
    ngOnInit() {
        
        this.getCharts();     
    } 
    
    
    getCharts() {
       
        this.apiService.getApiService('ga:deviceCategory', 'ga:sessions')
            .subscribe((apiListData) => {
                       
                this.listData = new Array();       
                for (let data of apiListData.rows){
                    let list: any[] = new Array();
                    list.push(data[0]);
                    list.push(+data[1]);
                    this.listData.push(list);                    
                }
                
                this.optionsPie = { 
                    title: {
                        text: "Types d'utilisateurs",
                        align: 'center',
                    },
                    
                    series: [{
                        type: 'pie',
                        name: 'Browser share',
                        innerSize: '50%',
                        data: this.listData
                    }]    
                }; 
            });  
            
        this.apiService.getApiService('ga:userType', 'ga:newUsers')
            .subscribe((apiListData) => {
                 
                this.listData = new Array();
                
                for (let data of apiListData.rows){
                    let list: any[] = new Array();
                    list.push(data[0]);
                    list.push(+data[1]);
                    this.listData.push(list);                    
                }
                
                this.optionsPie2 = { 
                    title: {
                        text: "Types d'utilisateurs",
                        align: 'center',
                    },
                    
                    series: [{
                        type: 'pie',
                        name: 'Browser share',
                        innerSize: '50%',
                        data: this.listData
                    }]    
                }; 
            });     
        this.apiService.getApiService('ga:country', 'ga:sessions')
            .subscribe((apiListData) => {
                 
                this.listData = new Array();                
                for (let data of apiListData.rows){
                    let list: any[] = new Array();
                    list.push(data[0]);
                    list.push(+data[1]);
                    this.listData.push(list);                    
                }
                
                this.optionsPie3 = { 
                    title: {
                        text: "Pays par sessions",
                        align: 'center',
                    },
                    
                    series: [{
                        type: 'pie',
                        name: 'Browser share',
                        innerSize: '50%',
                        data: this.listData
                    }]    
                }; 
            }); 
            
        this.apiService.getApiService('ga:date', 'ga:users')
            .subscribe((apiListData) => {
                 
                this.listData = new Array();   
                for (let data of apiListData.rows){
                    let list: any[] = new Array();
                    list.push(+data[1]);
                    this.listData.push(list);                    
                }
//                this.listFinal["name"] = apiListData.rows[0][0];
//                this.listFinal["data"] = this.listData;
//                
//                this.listFinal2.push(this.listFinal);
                
                this.optionsLine = { 
                    title: {
                        text: "Pays par sessions",
                        align: 'center',
                    },
                    
                    series: [{
                        name: apiListData.rows[0][0],
                        data: this.listData,
                    }] 
                }; 
            });         
                
    }
}

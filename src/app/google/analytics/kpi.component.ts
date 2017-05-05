import { Component, OnInit }    from '@angular/core';
import { Http }                 from '@angular/http';

import { Router }               from '@angular/router';

import { Api }                  from './api';
import { ApiService }           from './api.service';

import { Observable }           from 'rxjs/Observable';
 
@Component({
    moduleId: module.id,
    selector: 'kpi',
    templateUrl: 'kpi.html',
    styles: ['chart { display: block;}'],
    providers: [ ApiService ],
})
export class KPIComponent implements OnInit { 

    errorMessage: string;
    listLegend: any = new Array();
    listData: any = new Array();
    listFinal: Object = new Object();

    //Graph
    optionsPie: Object;
    optionsPie2: Object;
    optionsPie3: Object;
    optionsLine: Object;


    constructor (
        private apiService: ApiService,
        private router: Router,
    ) {}
 
    ngOnInit() {
        this.getCharts();     
    }
    
    getCharts() {
       
        this.apiService.getApiService('90daysAgo', 'yesterday', 'ga:deviceCategory', 'ga:sessions')
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
                        text: "Types d'appareils",
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
            
        this.apiService.getApiService('14daysAgo', 'yesterday', 'ga:userType', 'ga:newUsers')
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
        this.apiService.getApiService('90daysAgo', 'yesterday', 'ga:country', 'ga:sessions')
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
                        text: "Nombre de sessions par pays",
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
            
        this.apiService.getApiService('14daysAgo', 'yesterday', 'ga:date', 'ga:users')
            .subscribe((apiListData) => {
                 
                this.listData = new Array();   
                for (let data of apiListData.rows){
                    let list: any[] = new Array();
                    list.push(+data[1]);
                    this.listData.push(list);                    
                }
                
                this.optionsLine = { 
                    title: {
                        text: "Nombre d'utilisateurs par jours",
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

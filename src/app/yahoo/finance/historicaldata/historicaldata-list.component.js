"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var historicaldata_service_1 = require('./historicaldata.service');
var HistoricaldataListComponent = (function () {
    function HistoricaldataListComponent(historicaldataService, route) {
        this.historicaldataService = historicaldataService;
        this.route = route;
    }
    HistoricaldataListComponent.prototype.ngOnInit = function () {
        this.getListHistoricaldata();
    };
    HistoricaldataListComponent.prototype.getListHistoricaldata = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.historicaldataService.getListHistoricaldata(params['shortName']); })
            .subscribe(function (listHistoricaldata) { return _this.listHistoricaldata = listHistoricaldata; });
    };
    HistoricaldataListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'historicaldata-list',
            templateUrl: 'historicaldata-list.component.html',
            providers: [historicaldata_service_1.HistoricaldataService],
        }), 
        __metadata('design:paramtypes', [historicaldata_service_1.HistoricaldataService, router_1.ActivatedRoute])
    ], HistoricaldataListComponent);
    return HistoricaldataListComponent;
}());
exports.HistoricaldataListComponent = HistoricaldataListComponent;
/************************************************************
 ************ Changement de composant ***********************
 ************************************************************/
var HistoricaldataGraphComponent = (function () {
    function HistoricaldataGraphComponent(historicaldataService, route) {
        this.historicaldataService = historicaldataService;
        this.route = route;
        this.listHigh = new Array();
        this.listLow = new Array();
        this.listDate = new Array();
    }
    HistoricaldataGraphComponent.prototype.ngOnInit = function () {
        this.getChartHistoricaldata();
    };
    HistoricaldataGraphComponent.prototype.getChartHistoricaldata = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.historicaldataService.getListHistoricaldata(params['shortName']); })
            .subscribe(function (listHistoricaldata) {
            for (var _i = 0, listHistoricaldata_1 = listHistoricaldata; _i < listHistoricaldata_1.length; _i++) {
                var historicaldata = listHistoricaldata_1[_i];
                _this.listDate.push(historicaldata.Date);
                _this.listHigh.push(+historicaldata.High);
                _this.listLow.push(+historicaldata.Low);
            }
            _this.options = {
                title: { text: 'Récupération valeurs' },
                xAxis: {
                    categories: _this.listDate
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: [
                    { name: 'High', data: _this.listHigh },
                    { name: 'Low', data: _this.listLow }
                ]
            };
        });
    };
    HistoricaldataGraphComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'historicaldata-chart',
            template: "\n        <chart [options]=\"options\"></chart>\n    ",
            providers: [historicaldata_service_1.HistoricaldataService],
            styles: ['chart { display: block;}']
        }), 
        __metadata('design:paramtypes', [historicaldata_service_1.HistoricaldataService, router_1.ActivatedRoute])
    ], HistoricaldataGraphComponent);
    return HistoricaldataGraphComponent;
}());
exports.HistoricaldataGraphComponent = HistoricaldataGraphComponent;
//# sourceMappingURL=historicaldata-list.component.js.map
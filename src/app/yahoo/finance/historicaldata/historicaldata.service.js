"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Observable Version
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var yahoo_finance_service_1 = require('../yahoo-finance.service');
var HistoricaldataService = (function (_super) {
    __extends(HistoricaldataService, _super);
    function HistoricaldataService(http) {
        _super.call(this);
        this.http = http;
    }
    HistoricaldataService.prototype.getListHistoricaldata = function (shortName) {
        var _this = this;
        //initialise les parametres par defauts
        _super.prototype.setDefaultParams.call(this);
        var dateJour = new Date();
        _super.prototype.addParam.call(this, 'q', 'select * from yahoo.finance.historicaldata where'
            + ' symbol = "' + shortName + '"'
            + ' and startDate = "' + new Date(dateJour.setDate(dateJour.getDate() - 500)).toISOString() + '"'
            + ' and endDate = "' + new Date().toISOString() + '"'
            + ' | sort(field="Date") ');
        return this.http.get(_super.prototype.getBoursesUrl.call(this), { search: _super.prototype.getParams.call(this) })
            .map(function (res) { return _super.prototype.extractData.call(_this, res); })
            .catch(_super.prototype.handleError);
    };
    HistoricaldataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HistoricaldataService);
    return HistoricaldataService;
}(yahoo_finance_service_1.YahooFinanceService));
exports.HistoricaldataService = HistoricaldataService;
//# sourceMappingURL=historicaldata.service.js.map
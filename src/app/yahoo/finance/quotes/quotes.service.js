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
var QuotesService = (function (_super) {
    __extends(QuotesService, _super);
    function QuotesService(http) {
        _super.call(this);
        this.http = http;
    }
    QuotesService.prototype.getListQuotes = function () {
        //initialise les parametres par defauts
        _super.prototype.setDefaultParams.call(this);
        _super.prototype.addParam.call(this, 'q', 'select * from yahoo.finance.quotes where symbol in ("PARRO.PA","AAPL","GOOG","MSFT")');
        return this.http.get(_super.prototype.getBoursesUrl.call(this), { search: _super.prototype.getParams.call(this) })
            .map(_super.prototype.extractData)
            .catch(_super.prototype.handleError);
    };
    QuotesService.prototype.getQuotes = function (shortName) {
        //initialise les parametres par defauts
        _super.prototype.setDefaultParams.call(this);
        _super.prototype.addParam.call(this, 'q', 'select * from yahoo.finance.quotes where symbol in ("' + shortName + '")');
        return this.http.get(_super.prototype.getBoursesUrl.call(this), { search: _super.prototype.getParams.call(this) })
            .map(_super.prototype.extractData)
            .catch(_super.prototype.handleError);
    };
    QuotesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], QuotesService);
    return QuotesService;
}(yahoo_finance_service_1.YahooFinanceService));
exports.QuotesService = QuotesService;
//# sourceMappingURL=quotes.service.js.map
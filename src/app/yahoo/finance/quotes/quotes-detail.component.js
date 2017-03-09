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
var common_1 = require('@angular/common');
var quotes_service_1 = require('./quotes.service');
var QuotesDetailComponent = (function () {
    function QuotesDetailComponent(quotesService, route, location) {
        this.quotesService = quotesService;
        this.route = route;
        this.location = location;
    }
    QuotesDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.quotesService.getQuotes(params['shortName']); })
            .subscribe(function (quotes) { return _this.quotes = quotes; });
    };
    QuotesDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    QuotesDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'quotes-detail',
            providers: [quotes_service_1.QuotesService],
            templateUrl: 'quotes-detail.component.html',
            styleUrls: ['.error {color:red;}']
        }), 
        __metadata('design:paramtypes', [quotes_service_1.QuotesService, router_1.ActivatedRoute, common_1.Location])
    ], QuotesDetailComponent);
    return QuotesDetailComponent;
}());
exports.QuotesDetailComponent = QuotesDetailComponent;
//# sourceMappingURL=quotes-detail.component.js.map
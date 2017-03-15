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
var quotes_service_1 = require('./quotes.service');
var QuotesListComponent = (function () {
    function QuotesListComponent(quotesService, router) {
        this.quotesService = quotesService;
        this.router = router;
    }
    QuotesListComponent.prototype.ngOnInit = function () { this.getListQuotes(); };
    QuotesListComponent.prototype.getListQuotes = function () {
        var _this = this;
        this.quotesService.getListQuotes()
            .subscribe(function (listQuotes) { return _this.listQuotes = listQuotes; }, function (error) { return _this.errorMessage = error; });
    };
    QuotesListComponent.prototype.gotoDetail = function (quotes) {
        this.router.navigate(['/quotes', quotes.Symbol]);
    };
    QuotesListComponent.prototype.gotoDetailHistoricaldata = function (shortName) {
        this.router.navigate(['/historicaldata', shortName]);
    };
    QuotesListComponent.prototype.gotoListDashboard = function (shortName) {
        this.router.navigate(['/dashboard', shortName]);
    };
    QuotesListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'quotes-list',
            providers: [quotes_service_1.QuotesService],
            templateUrl: 'quotes-list.component.html',
            styleUrls: ['.error {color:red;}']
        }), 
        __metadata('design:paramtypes', [quotes_service_1.QuotesService, router_1.Router])
    ], QuotesListComponent);
    return QuotesListComponent;
}());
exports.QuotesListComponent = QuotesListComponent;
//# sourceMappingURL=quotes-list.component.js.map
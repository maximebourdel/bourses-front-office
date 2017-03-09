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
var industry_service_1 = require('./industry.service');
var IndustryListComponent = (function () {
    function IndustryListComponent(industryService, router) {
        this.industryService = industryService;
        this.router = router;
    }
    IndustryListComponent.prototype.ngOnInit = function () { this.getListIndustry(); };
    IndustryListComponent.prototype.search = function (term) {
        this.listSearchIndustry = this.industryService.getSearchIndustry(term);
    };
    IndustryListComponent.prototype.getListIndustry = function () {
        var _this = this;
        this.industryService.getListIndustry()
            .subscribe(function (listIndustry) { return _this.listIndustry = listIndustry; }, function (error) { return _this.errorMessage = error; });
    };
    IndustryListComponent.prototype.gotoListDashboard = function (shortName) {
        this.router.navigate(['/dashboard', shortName]);
    };
    IndustryListComponent.prototype.gotoDetailQuotes = function (shortName) {
        this.router.navigate(['/quotes', shortName]);
    };
    IndustryListComponent.prototype.gotoDetailHistoricaldata = function (shortName) {
        this.router.navigate(['/historicaldata', shortName]);
    };
    IndustryListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'industry-list',
            templateUrl: 'industry-list.component.html',
            providers: [industry_service_1.IndustryService],
            styles: ['.error {color:red;}']
        }), 
        __metadata('design:paramtypes', [industry_service_1.IndustryService, router_1.Router])
    ], IndustryListComponent);
    return IndustryListComponent;
}());
exports.IndustryListComponent = IndustryListComponent;
//# sourceMappingURL=industry-list.component.js.map
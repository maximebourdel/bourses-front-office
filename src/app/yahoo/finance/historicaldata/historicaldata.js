"use strict";
var Historicaldata = (function () {
    function Historicaldata(Symbol, Date, Open, High, Low, Close, Volume, Adj_Close) {
        this.Symbol = Symbol;
        this.Date = Date;
        this.Open = Open;
        this.High = High;
        this.Low = Low;
        this.Close = Close;
        this.Volume = Volume;
        this.Adj_Close = Adj_Close;
    }
    return Historicaldata;
}());
exports.Historicaldata = Historicaldata;
//# sourceMappingURL=historicaldata.js.map
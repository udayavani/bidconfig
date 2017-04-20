/**
 * Created by Owner on 4/18/2017.
 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var BidConfigService = (function () {
    function BidConfigService(http) {
        this.http = http;
        this.bidconfigUrl = 'http://localhost:3000/api/bidconfig'; // URL to web api
    }
    BidConfigService.prototype.getBidconfigByLastUpdated = function (limitVal, tagVal) {
        var params = new http_1.URLSearchParams();
        params.set('sortBy', 'datetimes.updated');
        params.set('sortDir', "1");
        params.set('limit', limitVal);
        params.set('tagVal', tagVal);
        var requestOptions = new http_1.RequestOptions();
        requestOptions.search = params;
        return this.http.get(this.bidconfigUrl, requestOptions)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    BidConfigService.prototype.getBidconfigByLastExcuted = function (limitVal, tagVal) {
        var params = new http_1.URLSearchParams();
        params.set('sortBy', 'datetimes.last_executed');
        params.set('sortDir', "1");
        params.set('limit', limitVal);
        params.set('tagVal', tagVal);
        var requestOptions = new http_1.RequestOptions();
        requestOptions.search = params;
        return this.http.get(this.bidconfigUrl, requestOptions)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    BidConfigService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return BidConfigService;
}());
BidConfigService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], BidConfigService);
exports.BidConfigService = BidConfigService;
var _a;
//# sourceMappingURL=bidconfig.service.js.map
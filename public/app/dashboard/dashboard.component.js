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
var router_deprecated_1 = require("@angular/router-deprecated");
var bidconfig_service_1 = require("../services/bidconfig.service");
var DashboardComponent = (function () {
    function DashboardComponent(router, bidConfigService) {
        this.router = router;
        this.bidConfigService = bidConfigService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bidConfigService.getBidconfigByLastUpdated(3, "this").then(function (data) {
            _this.bidConfigs = data;
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'my-dashboard',
        templateUrl: 'app/dashboard/dashboard.component.html',
        styleUrls: ['./app/dashboard/dashboard.component.css']
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_deprecated_1.Router !== "undefined" && router_deprecated_1.Router) === "function" && _a || Object, bidconfig_service_1.BidConfigService])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
var _a;
//# sourceMappingURL=dashboard.component.js.map
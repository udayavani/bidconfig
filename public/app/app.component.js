"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var router_deprecated_1 = require("@angular/router-deprecated");
var bidconfig_service_1 = require("./services/bidconfig.service");
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    router_deprecated_1.RouteConfig([
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: dashboard_component_1.DashboardComponent,
            useAsDefault: true
        }
    ]),
    core_1.Component({
        selector: 'my-app',
        template: "      \n        <a [routerLink]=\"['Dashboard']\"></a>\n    <router-outlet></router-outlet>\n  ",
        styleUrls: ['./app/app.component.css'],
        directives: [router_deprecated_1.ROUTER_DIRECTIVES],
        providers: [
            router_deprecated_1.ROUTER_PROVIDERS,
            bidconfig_service_1.BidConfigService
        ]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
import { Component } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component'
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {BidConfigService} from "./services/bidconfig.service";

@RouteConfig([
  {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardComponent,
      useAsDefault: true
  }
])
@Component({
    selector: 'my-app',
    template: `      
        <a [routerLink]="['Dashboard']"></a>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
    providers: [
    ROUTER_PROVIDERS,
      BidConfigService
    ]
})
export class AppComponent {
}

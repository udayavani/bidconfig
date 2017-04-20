import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import {BidConfigService} from "../services/bidconfig.service";
import {IBidconfig} from "../model/IBidconfig";



@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard/dashboard.component.html',
  styleUrls: ['./app/dashboard/dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  bidConfigs:IBidconfig[];

    constructor(
        private router: Router,
        private bidConfigService:BidConfigService){

    }

    ngOnInit(){
        this.bidConfigService.getBidconfigByLastUpdated(3, "this").then(data =>
        {
          this.bidConfigs = data;
        });
    }

 }

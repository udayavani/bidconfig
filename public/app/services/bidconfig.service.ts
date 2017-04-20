/**
 * Created by Owner on 4/18/2017.
 */

import { Injectable }    from '@angular/core';
import { Headers, Http, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {IBidconfig} from "../model/IBidconfig";

@Injectable()
export class BidConfigService {

  private bidconfigUrl = 'http://localhost:3000/api/bidconfig';  // URL to web api

  constructor(private http: Http) { }


  getBidconfigByLastUpdated(limitVal, tagVal):Promise<IBidconfig[]>{
    let params: URLSearchParams = new URLSearchParams();
    params.set('sortBy','datetimes.updated');
    params.set('sortDir',"1");
    params.set('limit',limitVal);
    params.set('tagVal',tagVal);

    let requestOptions = new RequestOptions();
    requestOptions.search = params;

    return this.http.get(this.bidconfigUrl, requestOptions)
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);
  }

  getBidconfigByLastExcuted(limitVal, tagVal):Promise<IBidconfig[]>{

    let params: URLSearchParams = new URLSearchParams();
    params.set('sortBy','datetimes.last_executed');
    params.set('sortDir',"1");
    params.set('limit',limitVal);
    params.set('tagVal',tagVal);

    let requestOptions = new RequestOptions();
    requestOptions.search = params;

    return this.http.get(this.bidconfigUrl, requestOptions)
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}


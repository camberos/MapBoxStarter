import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';


import 'rxjs/add/operator/toPromise';
import { Observable }     from 'rxjs/Observable';


import { Countries } from  './class.countries';

import { Demographics } from './demographics';

@Injectable()
export class DemographicsService {

  private demographicsUrl = 'http://119.9.52.47:3000/api/data/byradius?';  // URL to web api
  private countriesUrl = 'http://119.9.52.47:3000/api/countries';
  private classificationsUrl = 'http://119.9.52.47:3000/api/Classifications';
  private classificationsGroupsUrl = 'http://119.9.52.47:3000/api/ClassificationGroups';

  //private demographicsUrl = "app/demographics.json"
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http) { }

  getDemographics(): Promise<Demographics[]> {
    return this.http.get(this.demographicsUrl)
               .toPromise()
               .then(response => response.json() as Demographics[])
               .catch(this.handleError);
  }

  getCountries (): Observable<Demographics[]> {
    return this.http.get(this.countriesUrl)
                .map(res => res.json())
                .catch(this.handleError);
  }

  getClassifications (country:any): Observable<Demographics[]>{
    if (country!='all')
      this.classificationsUrl='http://119.9.52.47:3000/api/Classifications'+'?filter={"where":{"id":'+country+'}}';
    return this.http.get(this.classificationsUrl)
                .map(res => res.json())
                .catch(this.handleError);
  }

   getClassificationsGroups (): Observable<Demographics[]>{
    return this.http.get(this.classificationsGroupsUrl)
                .map(res => res.json())
                .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    // Add remote logging for errors, just in case we want to monitor
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }



}

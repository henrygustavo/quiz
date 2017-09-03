import { Injectable } from  '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Location } from "../model/Location";

import * as globals from '../globals';

@Injectable()
export class ApiService  {

  private api_url: string = '';

  constructor(private http: Http) {

   this.api_url = globals.apiURL;
    
  }

  public getDepartamentos(): Observable<Location[]> {
  
     return this.getLocation(this.api_url + 'departamentos');
  }

  public getProvincias(): Observable<Location[]> {

      return this.getLocation(this.api_url + 'provincias');
  }

  public getDistritos(): Observable<Location[]> {

      return this.getLocation(this.api_url + 'distritos');
  }

 private getLocation(url: string): Observable<Location[]> {

    return this.http.get( url)
    .map((response: Response) => response.json())
    .catch((error: any) => Observable.throw(error || 'Server error'));
  }


  


}
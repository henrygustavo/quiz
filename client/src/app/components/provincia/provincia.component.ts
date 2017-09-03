import { Component, OnInit } from '@angular/core';
import {Location} from '../../model/location';
import { ApiService } from "../../shared/api.service";

@Component({
    selector: 'provincia-component',
    templateUrl: './provincia.component.html'
})
export class ProvinciaComponent implements OnInit {

    public locations : Location[];

    constructor(private _apiService: ApiService) {
     

    }

    ngOnInit() {
      
        this._apiService .getProvincias()
        .subscribe(locations => {
            this.locations = locations
        }, error => {
            alert(error)
        });


    }
}
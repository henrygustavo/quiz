import { Component, OnInit } from '@angular/core';
import {Location} from '../../model/location';
import { ApiService } from "../../shared/api.service";

@Component({
    selector: 'distrito-component',
    templateUrl: './distrito.component.html'
})
export class DistritoComponent implements OnInit {

    public locations : Location[];
    
    constructor(private _apiService: ApiService) {
     

    }

    ngOnInit() {
        
        this._apiService .getDistritos()
        .subscribe(locations => {
            this.locations = locations
        }, error => {
            alert(error)
        });

    }
}
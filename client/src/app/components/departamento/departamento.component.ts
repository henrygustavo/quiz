import {Component, OnInit} from '@angular/core';
import {Location} from '../../model/location';
import {ApiService} from "../../shared/api.service";

@Component({selector: 'departamento-component', templateUrl: './departamento.component.html'})
export class DepartamentoComponent implements OnInit {

    public locations : Location[];

    constructor(private _apiService : ApiService) {}

    ngOnInit() : void {

        this._apiService .getDepartamentos()
            .subscribe(locations => {
                this.locations = locations
            }, error => {
                alert(error)
            });
    }
}
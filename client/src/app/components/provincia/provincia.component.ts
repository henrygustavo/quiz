import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../shared/api.service";

@Component({
    selector: 'provincia-component',
    templateUrl: './provincia.component.html'
})
export class ProvinciaComponent implements OnInit {

    constructor(private _apiService: ApiService) {
     

    }

    ngOnInit() {
      
        this._apiService.getProvincias().subscribe(
            
                        data => { console.log(data); },
                        error => { console.log("error");}
                       
                    );

    }
}
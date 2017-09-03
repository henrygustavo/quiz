import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../shared/api.service";

@Component({
    selector: 'distrito-component',
    templateUrl: './distrito.component.html'
})
export class DistritoComponent implements OnInit {

    constructor(private _apiService: ApiService) {
     

    }

    ngOnInit() {
        
        this._apiService.getDistritos().subscribe(
            
                        data => { console.log(data); },
                        error => { console.log("error");}
                       
                    );

    }
}
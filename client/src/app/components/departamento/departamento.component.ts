import { Component, OnInit } from '@angular/core';

import { ApiService } from "../../shared/api.service";

@Component({
    selector: 'departamento-component',
    templateUrl: './departamento.component.html'
})
export class DepartamentoComponent implements OnInit {

    constructor(private _apiService: ApiService) {
     

    }

    ngOnInit() {
      
        this._apiService.getDepartamentos().subscribe(
            
                        data => { console.log(data); },
                        error => { console.log("error");}
                       
                    );
    }
}
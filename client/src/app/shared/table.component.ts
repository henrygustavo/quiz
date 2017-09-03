import { Component, OnInit,Input  } from '@angular/core';
import { Location } from '../model/location';

@Component({
    selector: 'table-component',
    templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {

    @Input()
    title: string;
    
    @Input()
    locations: Location[];

    constructor() {
     

    }

    ngOnInit() {
      

    }
}
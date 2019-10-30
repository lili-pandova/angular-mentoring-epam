import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    constructor() {}

    find(value: string) {
        console.log(value);
    }

    ngOnInit() {}
}

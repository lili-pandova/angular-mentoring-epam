import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
    @Output() public searchName = new EventEmitter();

    constructor() {}

    findName(value: string) {
        this.searchName.emit(value);
    }
}

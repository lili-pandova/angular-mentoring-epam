import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-add-courses-btn',
    templateUrl: './add-courses-btn.component.html',
    styleUrls: ['./add-courses-btn.component.scss']
})
export class AddCoursesBtnComponent {
    show: boolean = true;
    @Output() showModal  = new EventEmitter<boolean>(); 

    constructor() {}

    showPopUp() {
        this.showModal.emit(this.show);
    }

}

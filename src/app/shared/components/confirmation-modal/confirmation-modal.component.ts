import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-confirmation-modal',
    templateUrl: './confirmation-modal.component.html',
    styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent implements OnInit {
    @Output() public delete = new EventEmitter();

    constructor() {}

    ngOnInit() {}

    onCancel() {
        document.querySelector('.confirmation-modal').classList.remove('block');
    }

    onDelete() {
        console.log("Delete courses on click")
        this.delete.emit(true);
    }
}

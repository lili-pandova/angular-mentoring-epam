import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-confirmation-modal',
    templateUrl: './confirmation-modal.component.html',
    styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent implements OnInit {
    @Output() public cancel = new EventEmitter();
    @Output() public delete = new EventEmitter();

    constructor() {}

    ngOnInit() {}

    onCancel() {
        // document.querySelector('.confirmation-modal').classList.remove('block');
        this.cancel.emit(true);
    }

    onDelete() {
        // document.querySelector('.confirmation-modal').classList.remove('block');
        console.log("Delete courses on click")
        this.delete.emit(true);
    }

    close() {
        document.querySelector('.confirmation-modal').classList.remove('block');
    }
}

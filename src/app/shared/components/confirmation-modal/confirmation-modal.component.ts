import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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
        this.delete.emit(true);
    }
}

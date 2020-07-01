import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-confirmation-modal',
    templateUrl: './confirmation-modal.component.html',
    styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent {
    @Output() public delete = new EventEmitter();

    onCancel(): void {
        document.querySelector('.confirmation-modal').classList.remove('block');
    }

    onDelete() {
        return this.delete.emit(true);
    }
}

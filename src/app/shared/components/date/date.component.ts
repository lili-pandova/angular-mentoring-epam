import {Component, forwardRef, Input} from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-date',
    templateUrl: './date.component.html',
    styleUrls: ['./date.component.scss'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DateComponent),
        multi: true
    }]
})
export class DateComponent implements ControlValueAccessor{
    @Input('control') public control: FormControl;

    public value: string;
    public date: string;

    onChange: () => void;

    onTouched: () => void;

    writeValue(value: string) : void {
        this.value = value ? value : '';
    }

    registerOnChange(fn: any) : void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any) : void {
        this.onTouched = fn;
    }
}

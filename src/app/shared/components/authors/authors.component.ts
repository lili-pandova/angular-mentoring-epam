import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AuthorsComponent),
    multi: true
  }]
})
export class AuthorsComponent implements ControlValueAccessor {

    public value: string;

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

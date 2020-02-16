import {Component, forwardRef, Input} from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DurationComponent),
    multi: true
  }]
})
export class DurationComponent implements ControlValueAccessor {
  @Input('control') public control: FormControl;

    public value: string;

    
  constructor() {}

    onChange: () => void;

    onTouched(): void {
      this.control.markAsTouched();
  }
  

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

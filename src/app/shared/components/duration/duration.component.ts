import { Component, Output, EventEmitter, Input } from '@angular/core';
import { NgModel, FormControl } from '@angular/forms';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.scss']
})
export class DurationComponent {
  @Input('control') public control: FormControl;
  duration: any;
  @Output() durationField = new EventEmitter();

  constructor() {}

  onChange($event, duration) {
    console.log($event, "EVENT")
    console.log(duration, "duration");
    this.duration = duration;
    this.durationField.emit("duration: " + this.duration);
  }

}

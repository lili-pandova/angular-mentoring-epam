import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-courses-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Input('form') public form: FormGroup;

  constructor(private router: Router) { }

  cancel(){
    this.router.navigateByUrl('/courses');
  }
}

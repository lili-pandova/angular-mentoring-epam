import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';


import { AuthorsService } from '../../../shared/services/authors.service';
import { MatInput } from '@angular/material';

@Component({
  selector: 'app-courses-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent  {
  @Input('form') public form: FormGroup;
  @Input() public selectedAuthors: any;
  @ViewChild('authorsInput', {static: false}) public authorsInput: MatInput;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  public arrSuggestions: Array<any>

  public authorSuggestions: any;
  public authors: any = [];

  @ViewChild('auto', { static: false }) matAutocomplete: MatAutocomplete;

  constructor(
    private router: Router,
    private _authorService: AuthorsService
  ) { }

  cancel() {
    this.router.navigateByUrl('/courses');
  }

  showSuggestions(value) {
    console.log(value.srcElement.value);

    this._authorService.findAuthors(value.srcElement.value).subscribe(res => this.authorSuggestions = res,
      error => console.log(error))
  }

  remove(author: { name: string }): void {
    const finalAuthors = this.form.controls['authors'].value.filter(item => item.name !== author.name);
    this.form.controls['authors'].setValue(finalAuthors);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const finalAuthors = this.form.controls['authors'].value;
    finalAuthors.push(event.option.value);
    this.form.controls['authors'].setValue(finalAuthors);

    const authorsAuto: any = document.getElementById('authors-autocomplete');
    authorsAuto.value = '';
  }

}

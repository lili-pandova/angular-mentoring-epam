import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';


import { AuthorsService } from '../../../shared/services/authors.service';

@Component({
  selector: 'app-courses-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent  {
  @Input('form') public form: FormGroup;

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

  showSuggestions() {
    this._authorService.findAuthors(this.form.controls['authors'].value).subscribe(res => this.authorSuggestions = res,
      error => console.log(error))
  }

  remove(author: { name: string }): void {
    this.authors = this.authors.filter(item => item.name !== author.name);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.authors.push(event.option.value);
  }

}

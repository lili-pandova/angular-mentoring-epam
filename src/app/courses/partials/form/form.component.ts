import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';


import { AuthorsService } from '../../../shared/services/authors.service';

@Component({
  selector: 'app-courses-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input('form') public form: FormGroup;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  public arrSuggestions: Array<any>

  public authorSuggestions: any;
  public authors: any = [];

  // @ViewChild('authors', {static: false}) authors: ElementRef<HTMLInputElement>;
  @ViewChild('auto', { static: false }) matAutocomplete: MatAutocomplete;

  constructor(
    private router: Router,
    private _authorService: AuthorsService
  ) { }

  cancel() {
    this.router.navigateByUrl('/courses');
  }

  ngOnInit() {
    // this.form.markAllAsTouched();
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

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.authorSuggestions.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }

}

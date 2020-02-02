import {COMMA, ENTER} from '@angular/cdk/keycodes';
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

  public suggestions: any;

  @ViewChild('authors', {static: false}) authors: ElementRef<HTMLInputElement>;
  @ViewChild('auto', {static: false}) matAutocomplete: MatAutocomplete;

  constructor(
    private router: Router,
    private _authorService: AuthorsService
    ) { }

  cancel(){
    this.router.navigateByUrl('/courses');
  }

  ngOnInit() {
    this.form.markAllAsTouched();
  }

  showSuggestions(suggestions: any) {
    this._authorService.findAuthors(suggestions).subscribe(res => this.suggestions = res,
                                                          error => console.log(error))
  }

  add(event: MatChipInputEvent): void {
  
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      if ((value || '').trim()) {
        this.arrSuggestions.push(value.trim());
        console.log(this.arrSuggestions, "PUSH suggestions")
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.form.setValue(null);
    }
  }

  remove(fruit: string): void {
    const index = this.suggestions.indexOf(fruit);

    if (index >= 0) {
      this.arrSuggestions.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.suggestions.push(event.option.viewValue);
    this.authors.nativeElement.value = '';
    this.form.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.suggestions.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }

}

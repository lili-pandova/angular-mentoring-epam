import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCoursesBtnComponent } from './add-courses-btn.component';

describe('AddCoursesBtnComponent', () => {
  let component: AddCoursesBtnComponent;
  let fixture: ComponentFixture<AddCoursesBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCoursesBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCoursesBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

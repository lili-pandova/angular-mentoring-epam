import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';

import { UserLogComponent } from './user-log.component';

const routes = [ // change it!
  { path: '', redirectTo: 'home', pathMatch: 'full' },
]

describe('UserLogComponent', () => {
  let component: UserLogComponent;
  let fixture: ComponentFixture<UserLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLogComponent ],
      providers: [Store],
      imports: [
        RouterTestingModule.withRoutes(routes),
        HttpClientTestingModule,
        HttpClientModule,
        StoreModule.forRoot({})
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

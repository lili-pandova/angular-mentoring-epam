import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Store, StoreModule } from '@ngrx/store';

import { LogoComponent } from '../logo/logo.component';
import { UserLogComponent } from '../user-log/user-log.component';
import { HeaderComponent } from './header.component';


const routes = [ // TODO: change it
  { path: '', redirectTo: 'home', pathMatch: 'full' },
]

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        LogoComponent,
        UserLogComponent
      ],
      providers: [Store],
      imports:
      [
        RouterTestingModule.withRoutes(routes), 
        HttpClientTestingModule,
        HttpClientModule,
        StoreModule.forRoot({})
      ] 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

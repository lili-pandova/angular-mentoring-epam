import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { Store, StoreModule } from '@ngrx/store';
import { Router } from '@angular/router';

import { LoginComponent } from './login.component';
import { LoadingService } from '../../services/loading.service';
import { AuthorizationService } from '../../services/auth-service/auth-service';

const routes = [ // TODO: another path
  { path: '', redirectTo: 'home', pathMatch: 'full' }
]

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [
        LoadingService,
        AuthorizationService
      ],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule.withRoutes(routes), 
        HttpClientTestingModule,
        HttpClientModule,
        StoreModule.forRoot({})
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

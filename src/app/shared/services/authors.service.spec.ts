import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

import { AuthorsService } from './authors.service';

describe('AuthorsService', () => {
  
  beforeEach(() => TestBed.configureTestingModule({
              declarations: [ AuthorsService ],
              imports:
              [
                HttpClientTestingModule,
                HttpClientModule
              ] 
                
  }).compileComponents()
  );

  it('should be created', () => {
    const service: AuthorsService = TestBed.get(AuthorsService);
    expect(service).toBeTruthy();
  });
});

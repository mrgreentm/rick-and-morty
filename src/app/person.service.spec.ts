import { HttpClientTestingModule } from '@angular/common/http/testing'
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { PersonService } from './person.service';

describe('PersonService', () => {
  let service: PersonService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PersonService);
    http = TestBed.inject(HttpClient)
  });

  it('should calls method GET with endpoint https://rickandmortyapi.com/api/character', () => {
    const spy = spyOn(http, 'get').and.callThrough();
    service.getPersons();
    expect(spy).toHaveBeenCalledWith('https://rickandmortyapi.com/api/character');
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from './person';


@Injectable({
  providedIn: 'root'
})
export class PersonService {
  urlAPI = 'https://rickandmortyapi.com/api/character'

  constructor(private httpClient: HttpClient) { }

  getPersons():Observable<any>{
    return this.httpClient.get(this.urlAPI)
  }
}

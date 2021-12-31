import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { Person } from '../person'

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
  persons?:Person[]
  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.getPersons()
  }
  getPersons(){
    this.personService.getPersons().subscribe(res=>{
      this.persons = res?.results
      console.log(this.persons);
    })
  }
}

import { Component } from '@angular/core';
import { Person } from './person';
import { PersonService } from './person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ricky-and-morty';
  person = 'ricky';
  persons?: Array<Person> = []

  constructor(public personService: PersonService) { }

  ngOnInit(): void {
    this.getPersons()
  }
  changeTitle(newTitle: string){
    this.title = newTitle
  }
  getPersons() {
    this.personService.getPersons().subscribe(res => {
      this.persons = res?.results
      console.log(this.persons);
    })
  }
}

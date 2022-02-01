import { Component, Input, OnInit } from '@angular/core';
import { map, Observable, startWith } from 'rxjs';
import { Person } from '../person'

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
  searchText: any;
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;
  @Input() persons?: Person[]
  constructor() { }

  ngOnInit(): void {
    
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}

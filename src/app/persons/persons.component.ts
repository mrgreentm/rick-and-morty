import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../person'

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
  @Input() persons?: Person[]
  constructor() { }

  ngOnInit(): void {
  }

}

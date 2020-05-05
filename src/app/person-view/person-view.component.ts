import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../interfaces/people';

@Component({
  selector: 'app-person-view',
  templateUrl: './person-view.component.html',
  styleUrls: ['./person-view.component.css']
})

export class PersonViewComponent implements OnInit {
  @Input() myPerson:Person;

  constructor() { }

  ngOnInit(): void {
  }

}

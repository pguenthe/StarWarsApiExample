import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars-service.service';
import { People, Person } from '../interfaces/people';

@Component({
  selector: 'app-people-view',
  templateUrl: './people-view.component.html',
  styleUrls: ['./people-view.component.css']
})
export class PeopleViewComponent implements OnInit {
  people:People;
  
  constructor(private swService: StarWarsService) { }

  ngOnInit(): void {
    this.swService.getPeople().subscribe(
      (data: People) => this.people = { ...data }, 
      error => console.error(error)
    );
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { StarWarsService } from '../star-wars-service.service';
import { Planet } from '../interfaces/planet';

@Component({
  selector: 'app-planet-view',
  templateUrl: './planet-view.component.html',
  styleUrls: ['./planet-view.component.css']
})
export class PlanetViewComponent implements OnInit {
  planet:Planet;
  @Input() url:string;

  constructor(private swService: StarWarsService) { }

  ngOnInit(): void {
    this.swService.getPlanet(this.url).subscribe(
      (data: Planet) => this.planet = { ...data }, 
      error => console.error(error)
    );
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { StarWarsService } from '../star-wars-service.service';
import { Film } from '../interfaces/film';

@Component({
  selector: 'app-film-view',
  templateUrl: './film-view.component.html',
  styleUrls: ['./film-view.component.css']
})

export class FilmViewComponent implements OnInit {
  film:Film;
  @Input() url:string;

  constructor(private swService: StarWarsService) { }

  ngOnInit(): void {
    this.swService.getFilm(this.url).subscribe(
      (data: Film) => this.film = { ...data }, 
      error => console.error(error)
    );
  }

}

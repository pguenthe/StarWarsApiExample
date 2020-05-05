import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { People } from './interfaces/people';

@Injectable({
  providedIn: 'root'
})

//the service handles the API requests for all components
export class StarWarsService {
  apiUrl = 'https://swapi.dev/api';

  constructor(private http:HttpClient) { }

  getPeople() {
    return this.http.get<People>(`${this.apiUrl}/people/`);
  }
}

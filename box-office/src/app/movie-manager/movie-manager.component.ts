import { Component, OnInit } from '@angular/core';
import { MOVIES } from '../module/movies';

@Component({
  selector: 'app-movie-manager',
  templateUrl: './movie-manager.component.html',
  styleUrls: ['./movie-manager.component.css']
})
export class MovieManagerComponent implements OnInit {
  
movies = MOVIES;
  searchText: string = '';

search() {
    if (this.searchText === '' || !this.searchText)
    this.movies = MOVIES;
  else {
    this.movies = MOVIES;
    this.movies = this.movies.filter(movie=> movie.movieTitle?.startsWith(this.searchText.toLowerCase()));
  }

  }
  reset() {
    this.searchText = '';
    this.movies = MOVIES;
  }
  constructor() { }

  ngOnInit(): void {
  }

}

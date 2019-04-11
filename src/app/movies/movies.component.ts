import { Component, OnInit, Input } from '@angular/core';
import { apiServices } from '../services/apiServices'
import { detailsService } from '../services/details'
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  @Input() searchText: string
  movieName: String;
  movies: any
  trendingMovies = []
  constructor(private API: apiServices, private details: detailsService, private router: Router) { }

  onSearch = (event) => {
    console.log(event)
  }
  onClickDetails = (data) => {
    this.details.setData(data)
    this.router.navigate(['details'])
  }

  async ngOnInit() {
    this.movies = await this.API.getTrendingMovies()
    this.trendingMovies = this.movies.results
  }

}

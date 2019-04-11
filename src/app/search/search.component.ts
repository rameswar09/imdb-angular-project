import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { apiServices } from '../services/apiServices';
import { detailsService } from '../services/details'


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  movies = {
    results: []
  }
  trendingMovies = []
  peoples = {
    results: []
  }
  trendingPeople = []
  searchText: string
  isMovieShow=false;
  isActorShow=false
  constructor(private activatedroute: ActivatedRoute, private API: apiServices, private details: detailsService, private router: Router) { }

  onClickDetails = (data) => {
    console.log(this.searchText)
    this.details.setData(data)
    this.router.navigate(['details'])
  }

  async ngOnInit() {
    this.activatedroute.params.subscribe((params) => {
      this.searchText = params.search.replace("_", " ");
    })
    if (this.activatedroute.snapshot._routerState.url.includes("movies")) {
      this.movies = await this.API.getTrendingMovies()
      this.trendingMovies = this.movies.results;
      this.trendingMovies = this.trendingMovies.filter((item) => item.title == this.searchText)
      this.isMovieShow=true
    } else {
      this.peoples= await this.API.getTrendingPeoples()
      this.trendingPeople = this.peoples.results
      this.trendingPeople = this.trendingPeople.filter((item) => item.name == this.searchText)
      this.isActorShow=true
    }

  }
}

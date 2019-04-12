import { Component, OnInit,Input,OnChanges,SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { apiServices } from '../services/apiServices';
import { detailsService } from '../services/details'


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit,OnChanges {
  @Input() searchMovie:any
  movies: any
  trendingMovies = []
  peoples: any
  trendingPeople = []
  searchText: string
  isMovieShow = false;
  isActorShow = false
  constructor(private activatedroute: ActivatedRoute, private API: apiServices, private details: detailsService, private router: Router) { }
  ngOnChanges(changes: SimpleChanges): void {
      console.log('hello onChange')
      console.log(changes)
  }
  onClickDetails = (data) => {
    console.log(this.searchText)
    this.details.setData(data)
    this.router.navigate(['details'])
  }

  async ngOnInit() {
    this.activatedroute.params.subscribe((params) => {
      this.searchText = params.search
    })
    console.log(this.searchText)
    if (this.router.routerState.snapshot.url.includes("movies")) {
      this.movies = await this.API.getTrendingMovies()
      this.trendingMovies = this.movies.results;
      this.trendingMovies = this.trendingMovies.filter((item) => {
        if(item.title.replace(/\s+/g, "").toLowerCase().includes(this.searchText.toLowerCase())){
          return item
        }
      })
      this.isMovieShow = true
    } else {
      this.peoples = await this.API.getTrendingPeoples()
      this.trendingPeople = this.peoples.results
      this.trendingPeople = this.trendingPeople.filter((item) => {
        if(item.name.replace(/\s+/g, "").toLowerCase().includes(this.searchText.toLowerCase())){
          return item
        }
      })
      this.isActorShow = true
    }
  }
}

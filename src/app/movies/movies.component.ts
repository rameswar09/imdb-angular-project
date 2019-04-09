import { Component, OnInit } from '@angular/core';
import { apiServices } from '../services/apiServices'
import {detailsService} from '../services/details'
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movieName: String;
  movies={
    results:[]
  }
  trendingMovies=[]
  constructor( private API:apiServices,private details:detailsService,private router:Router) { }

  onClickSearchMovies=()=>{
    this.trendingMovies= this.movies.results.filter((item)=>{
      if(item.title.toLowerCase().includes(this.movieName.toLowerCase())){
        return item
      }
    })
    console.log(this.trendingMovies)
  }

  onClickDetails=(data)=>{
    console.log(data)
    this.details.setData(data)
    this.router.navigate(['details'])
  }

  async ngOnInit() {
        this.movies= await this.API.getTrendingMovies()
        this.trendingMovies=this.movies.results
  }

}

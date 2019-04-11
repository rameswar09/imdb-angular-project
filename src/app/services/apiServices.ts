import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { ajax } from 'rxjs/ajax';

@Injectable()
export class apiServices {
  constructor(private http: Http) { }

  getTrendingMovies = async () => {
    let data = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=3ebe7f44a343fc7c8c085ccfef4cc493&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWJlN2Y0NGEzNDNmYzdjOGMwODVjY2ZlZjRjYzQ5MyIsInN1YiI6IjVjNWU3MmI0YzNhMzY4M2NjZjhkNDM1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XYra3lypk70Rh69HEVdi76crIKkKJZE6KY350cEB3Ow', { method: 'get' })
    data = await data.json()
    return data
  }

  getTrendingPeoples = async () => {
    let data = await fetch('https://api.themoviedb.org/3/trending/person/day?api_key=3ebe7f44a343fc7c8c085ccfef4cc493&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWJlN2Y0NGEzNDNmYzdjOGMwODVjY2ZlZjRjYzQ5MyIsInN1YiI6IjVjNWU3MmI0YzNhMzY4M2NjZjhkNDM1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XYra3lypk70Rh69HEVdi76crIKkKJZE6KY350cEB3Ow', { method: 'get' })
    data = await data.json()
    return data
  }
}

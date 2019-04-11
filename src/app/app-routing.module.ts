import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { PeoplesComponent } from './peoples/peoples.component';
import { DetailsComponent } from './details/details.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:"",component:MoviesComponent},
  {path:"movies",component:MoviesComponent},
   {path:"peoples",component:PeoplesComponent},
   {path:"details",component:DetailsComponent},
   {path:"movies/:search",component:SearchComponent},
   {path:"actors/:search",component:SearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

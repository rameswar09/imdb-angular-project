import { Component, Output, EventEmitter, } from '@angular/core';
import { apiServices } from './services/apiServices';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IMDB';
  itemName = "";
  // isSearchShow=false
  constructor(
    private apiServices: apiServices,
    private router: Router,
    private activatedroute: ActivatedRoute) { }
  onClickSearch = async () => {
    this.itemName= await this.itemName.replace(/\s+/g, "")
    if (this.router.routerState.snapshot.url.startsWith("/movies")) {
      this.router.navigate([`movies/${this.itemName}`])
    } else {
      this.router.navigate([`actors/${this.itemName}`])
    }
    this.itemName=""
  }
}

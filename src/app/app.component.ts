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
  itemName = ""
  constructor(
    private apiServices: apiServices,
    private router: Router,
    private activatedroute: ActivatedRoute) { }
  onClickSearch = () => {
    this.itemName = this.itemName.replace(" ", "_");
    if (this.router.routerState.snapshot.url ==="/movies") {
      this.router.navigate([`movies/${this.itemName}`])
    } else {
      this.router.navigate([`actors/${this.itemName}`])
    }
  }
}

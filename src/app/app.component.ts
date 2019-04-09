import { Component } from '@angular/core';
import {apiServices} from './services/apiServices'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IMDB';
  itemName=""
  constructor(private apiServices:apiServices ) { }
onClickSearch=()=>{
}
}

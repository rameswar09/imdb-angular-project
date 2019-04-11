import { Component, OnInit } from '@angular/core';
import { detailsService } from '../services/details';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  isMovie = false;
  isPerson = false;
  displayItemDetails: any
  constructor(private detailsService: detailsService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.displayItemDetails = this.detailsService.getData()
    if (typeof (this.displayItemDetails.title) != "undefined") {
      this.isMovie = true
    } else {
      this.isPerson = true
    }
  }

}

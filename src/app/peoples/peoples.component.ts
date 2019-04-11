import { Component, OnInit } from '@angular/core';
import { apiServices } from '../services/apiServices'
import { detailsService } from '../services/details'
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.css']
})
export class PeoplesComponent implements OnInit {
  personName: String;
  peoples :any
  trendingPeople = []
  constructor(private API: apiServices, private detailsService: detailsService, private router: Router) { }

  onClickSearchPerson = () => {
    this.trendingPeople = this.peoples.results.filter((item) => {
      if (item.name.toLowerCase().includes(this.personName.toLowerCase())) {
        return item
      }
    })
    console.log(this.trendingPeople)
  }
  onClickDetails = (data) => {
    this.detailsService.setPersonData(data)
    this.router.navigate(['details'])
  }
  async ngOnInit() {
    this.peoples = await this.API.getTrendingPeoples()
    this.trendingPeople = this.peoples.results
  }

}

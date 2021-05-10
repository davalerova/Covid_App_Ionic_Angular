import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CovidAPIService } from '../services/covid-api.service';

@Component({
  selector: 'app-detail-countries',
  templateUrl: './detail-countries.page.html',
  styleUrls: ['./detail-countries.page.scss'],
})
export class DetailCountriesPage implements OnInit {

  countries;
  totalConfirmed;
  totalNewConfirmed;
  totalRecovered;
  totalNewRecovered;
  totalDeaths;
  totalNewDeaths;


  constructor(private router: Router, private myApi: CovidAPIService) { }


  ngOnInit() {
    this.myApi.getSummary().subscribe(resp=>{
      console.log(resp.Countries);
      this.countries = resp.Countries;
      this.totalConfirmed = resp.Global.TotalConfirmed;
      this.totalNewConfirmed = resp.Global.NewConfirmed;
      this.totalRecovered = resp.Global.TotalRecovered;
      this.totalNewRecovered = resp.Global.NewRecovered;
      this.totalNewRecovered = resp.Global.NewRecovered;
      this.totalDeaths = resp.Global.TotalDeaths;
      this.totalNewDeaths = resp.Global.NewDeaths;

    });
    
  }
  back(){
    this.router.navigate(['/tabs/tab1']);
  }

}

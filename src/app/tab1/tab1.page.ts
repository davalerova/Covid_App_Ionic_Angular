import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CovidAPIService } from '../services/covid-api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  
  totalConfirmed;
  totalNewConfirmed;
  totalRecovered;
  totalNewRecovered;
  totalDeaths;
  totalNewDeaths;
  totalConfirmedCol;
  totalNewConfirmedCol;
  totalRecoveredCol;
  totalNewRecoveredCol;
  totalDeathsCol;
  totalNewDeathsCol;
  countries;
  topOneTotalConfirmed = 0;
  topTwoTotalConfirmed = 0;
  topThreeTotalConfirmed = 0;
  topOneCountry;
  topTwoCountry;
  topThreeCountry;
  topOneCountryCode;
  topTwoCountryCode;
  topThreeCountryCode;

  constructor(private route: Router, private myApi: CovidAPIService) {}
  ngOnInit() {
    this.myApi.getSummary().subscribe(resp=>{
      this.countries = resp.Countries;
      this.totalConfirmed = resp.Global.TotalConfirmed.toLocaleString();
      this.totalNewConfirmed = resp.Global.NewConfirmed.toLocaleString();
      this.totalRecovered = resp.Global.TotalRecovered.toLocaleString();
      this.totalNewRecovered = resp.Global.NewRecovered.toLocaleString();
      this.totalNewRecovered = resp.Global.NewRecovered.toLocaleString();
      this.totalDeaths = resp.Global.TotalDeaths.toLocaleString();
      this.totalNewDeaths = resp.Global.NewDeaths.toLocaleString();
      
      for(let col of this.countries){
        if(col.TotalConfirmed > this.topThreeTotalConfirmed){
          if(col.TotalConfirmed > this.topTwoTotalConfirmed){
            if(col.TotalConfirmed > this.topOneTotalConfirmed){
              this.topOneTotalConfirmed = col.TotalConfirmed;
              this.topOneCountry = col.Country;
              this.topOneCountryCode =col.CountryCode;
            }
            else {
              this.topTwoTotalConfirmed = col.TotalCofirmed;
              this.topTwoCountry = col.Country;
              this.topTwoCountryCode =col.CountryCode;
            }
          }
          else {
            this.topThreeTotalConfirmed = col.TotalConfirmed;
            this.topThreeCountry = col.Country;
            this.topThreeCountryCode =col.CountryCode;
          }
        }
        if(col.Country == "Colombia"){
          this.totalConfirmedCol = col.TotalConfirmed.toLocaleString();
          this.totalNewConfirmedCol = col.NewConfirmed.toLocaleString();
          this.totalRecoveredCol = col.TotalRecovered.toLocaleString();
          this.totalNewRecoveredCol = col.NewRecovered.toLocaleString();
          this.totalNewRecoveredCol = col.NewRecovered.toLocaleString();
          this.totalDeathsCol = col.TotalDeaths.toLocaleString();
          this.totalNewDeathsCol = col.NewDeaths.toLocaleString();
        }
      }

    });
  }
  detailCountries(){
    this.route.navigate(['/tabs/detail-countries']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CovidAPIService } from '../services/covid-api.service';
import { LoadingController } from '@ionic/angular';
import { OrderPipe } from 'ngx-order-pipe';


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
  topCountries;
  topOneTotalConfirmed;
  topTwoTotalConfirmed;
  topThreeTotalConfirmed;
  topOneCountry;
  topTwoCountry;
  topThreeCountry;
  topOneCountryCode;
  topTwoCountryCode;
  topThreeCountryCode;
  i;

  constructor(
    private route: Router, 
    private myApi: CovidAPIService,
    public loadingController: LoadingController,
    private orderPipe : OrderPipe
    ) {}
  async ngOnInit() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...'
    });
    await loading.present();


    this.myApi.getSummary().subscribe(resp=>{
      this.countries = this.orderPipe.transform(resp.Countries, 'TotalConfirmed', true);
      this.totalConfirmed = resp.Global.TotalConfirmed.toLocaleString();
      this.totalNewConfirmed = resp.Global.NewConfirmed.toLocaleString();
      this.totalRecovered = resp.Global.TotalRecovered.toLocaleString();
      this.totalNewRecovered = resp.Global.NewRecovered.toLocaleString();
      this.totalNewRecovered = resp.Global.NewRecovered.toLocaleString();
      this.totalDeaths = resp.Global.TotalDeaths.toLocaleString();
      this.totalNewDeaths = resp.Global.NewDeaths.toLocaleString();
      this.i = 0;
      for(let col of this.countries){
        if(this.i==0){
          
          this.topOneTotalConfirmed = col.TotalConfirmed;
          this.topOneCountry = col.Country;
          this.topOneCountryCode =col.CountryCode;
          this.i++;
          }
        else if(this.i==1){
          this.topTwoTotalConfirmed = col.TotalConfirmed;
          this.topTwoCountry = col.Country;
          this.topTwoCountryCode =col.CountryCode;
          this.i++;
        
        }
        else if(this.i==2){{
          this.topThreeTotalConfirmed = col.TotalConfirmed;
          this.topThreeCountry = col.Country;
          this.topThreeCountryCode =col.CountryCode;
          this.i++;
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
      console.log(resp)
      loading.dismiss();
    });
  }
  detailCountries(){
    this.route.navigate(['/tabs/detail-countries']);
  }
}

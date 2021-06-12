import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CovidAPIService } from '../services/covid-api.service';
import {OrderPipe} from 'ngx-order-pipe';

@Component({
  selector: 'app-detail-countries',
  templateUrl: './detail-countries.page.html',
  styleUrls: ['./detail-countries.page.scss'],
})
export class DetailCountriesPage implements OnInit {

  countries;


  constructor(
    private router: Router, 
    private myApi: CovidAPIService,
    private orderPipe: OrderPipe
    ) { }


  ngOnInit() {
    this.myApi.getSummary().subscribe(resp=>{
      console.log(resp.Countries);
      this.countries = resp.Countries;

    });
    
  }
  back(){
    this.router.navigate(['/tabs/tab1']);
  }

  search(event){
  }

}

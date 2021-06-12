import { Component } from '@angular/core';
import { ApiNewsService } from '../services/api-news.service';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  dataNews;
  constructor(private myApi: ApiNewsService) {

  }
  ngOnInit(){
    this.myApi.getTopHeadLines().subscribe(resp=>{
    this.dataNews = resp.articles;
    })

  }

}

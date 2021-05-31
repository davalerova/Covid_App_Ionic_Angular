import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiCovidService {

url = 'https://api.covid19api.com/summary';
urlNoticia = 'https://newsapi.org/v2/top-headlines?q=covid&country=co&category=Health&apiKey=57bcb3e504f7450494c5d8b6425b4488';

  constructor(private http: HttpClient) {

   }

   getLines(): Observable<any>{
     return this.http.get(this.url).pipe();
   }
   getLinesnoticia(): Observable<any>{
    return this.http.get(this.urlNoticia).pipe();
  }



}

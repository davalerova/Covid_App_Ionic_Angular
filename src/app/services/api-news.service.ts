import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiNewsService {


  constructor(private http: HttpClient) {

   }
getTopHeadLines(): Observable<any>{
  return this.http.get('https://newsapi.org/v2/top-headlines?country=co&q=covid&apiKey=6ec402ff475b4c308f630f6ebb2f25f8').pipe();
}

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(public http: HttpClient) { }

  getNewsEgypt(): Observable<any>{
    return this.http.get('https://gorest.co.in/public-api/users?_format=json&access-token=2_dklSTsEVK4IwYy8dVTmTqXPR_VUcddcCsh');
  }
  getNewsUsa(): Observable<any>{
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=716c9fe4bdc340d6bf3e3d18d3f73f60');
  }
}

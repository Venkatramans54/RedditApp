import { Injectable } from '@angular/core';
import {HttpClient,HttpClientModule} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RedditService {
  url="https://www.reddit.com/r/pics/.json"

  constructor(private http: HttpClient) { }

  getData(){
    console.log("hi")
    return this.http.get<any>(this.url)
  }
}

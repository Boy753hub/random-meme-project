import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, pipe } from 'rxjs';
import { rightmemes } from './interface/rightmemes.interface';
import { response } from './interface/response.interface';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  //api links
  private url = 'https://meme-api.com/gimme/rape_hentai'
  private url2 = 'https://meme-api.com/gimme/jerkbudsHentai'
  constructor(private http: HttpClient) { }

 

  //fetching data from api links
  getMemes(size: number = 20): Observable<any>{
    return this.http.get<any>(`${this.url}/${size}`).pipe(
        map(response => this.processResponse(response)))
  }
  getAnimeMemes(size: number = 20): Observable<any>{
    return this.http.get<any>(`${this.url2}/${size}`).pipe(
        map(response => this.processResponse(response)))
  }
  
//sorting data to get only info that is needed
  private processResponse(response: response) : response {
    return {
    count: response.count,
    memes: response.memes.map((rightmemes:any) => (<rightmemes>{
      nsfw: rightmemes.nsfw,
      postLink: rightmemes.postlink,
      spoiler: rightmemes.spoiler,
      subreddit: rightmemes.subreddit,
      title: rightmemes.title,
      url: rightmemes.url
    }))
  };
}
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { rightmemes } from './interface/rightmemes.interface';
import { response } from './interface/response.interface';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

 
  //api links
  private url = 'https://meme-api.com/gimme'
  constructor(private http: HttpClient) { }

 

  //fetching data from api links
  getMemes(size: number, reddit: string): Observable<any>{
    return this.http.get<any>(`${this.url}${reddit}/${size}`).pipe(
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

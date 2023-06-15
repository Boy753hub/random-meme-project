import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private stringSource = new BehaviorSubject<string>('');

  updateString(value: string): void {
    this.stringSource.next(value);
  }
  
  getString(): Observable<string> {
    return this.stringSource.asObservable();
  }
  
}

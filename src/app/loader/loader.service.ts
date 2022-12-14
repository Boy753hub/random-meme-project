import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  //getting boolian  int for ngif 
  public isLoading:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  public isNotLoading:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true)
  constructor() { }
}

import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, observable } from 'rxjs';
import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'random_meme_project0+.';
  savedStatus: any
  status: boolean = false
  constructor(private searchService: SearchService) { }

  
  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
    this.status = !this.status
    localStorage.setItem('theme' , JSON.stringify(this.status))
  }
  ngOnInit(): void {
    this.savedStatus = localStorage.getItem('theme')
    if(this.savedStatus === 'true'){
      return this.toggleDarkTheme()
    }
  }
  
  onSubmit(event: NgForm) {
    // this.searchService.setObservableValue(event.value.search);
    // console.log(this.search)
    this.searchService.updateString(event.value.search);
    event.reset()
 }
}

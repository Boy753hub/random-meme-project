import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  title = 'random_meme_project0+.';
  savedStatus: any
  status: boolean = false
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
    console.log(this.savedStatus)
  }

}

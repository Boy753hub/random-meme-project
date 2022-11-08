import { Component, Input, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { LoaderService } from '../loader/loader.service';

@Component({
  selector: 'app-dank-memes',
  templateUrl: './dank-memes.component.html',
  styleUrls: ['./dank-memes.component.css']
})
export class DankMemesComponent implements OnInit {

  constructor(private memeslink: DatabaseService , public loadingService:LoaderService) { }

  memes:any
  selectedIndex = 0
  @Input() controls = true;

  ngOnInit(): void {
    //getting sorted info from api and putting in memes int
    this.memeslink.getMemes().subscribe((response) =>{
      this.memes = response.memes
      console.log(this.memes)
    })
  }
  
//carusel prev button function pressing and getting back to prev meme
  onPrevClick(): void{
    if(this.selectedIndex === 0) {
      this.selectedIndex = this.memes.length - 1;
      } else{
      this.selectedIndex--;
    } 
    if(this.selectedIndex === 9){
      window.location.reload();
    }

  }
  //carusel next button function pressing and getting  to next meme
  onNextClick():void{
    if(this.selectedIndex === this.memes.length - 1) {
      this.selectedIndex = 0;
      }else{
      this.selectedIndex ++;
    }
    if(this.selectedIndex === 9){
      window.location.reload();
    }
  }

}
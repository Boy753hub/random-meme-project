import { Component, Input, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { LoaderService } from '../loader/loader.service';

@Component({
  selector: 'app-anime-memes',
  templateUrl: './anime-memes.component.html',
  styleUrls: ['./anime-memes.component.css']
})
export class AnimeMemesComponent implements OnInit {

  constructor(private animememes: DatabaseService,public loadingService:LoaderService) { }
  Animememes: any
  selectedIndex = 0
  @Input() controls = true;

  //here everything is same as in dank memes component but here we get data from diffent api, its same api but we get diffrent data
  ngOnInit(): void {
    this.animememes.getAnimeMemes().subscribe((response) =>{
      this.Animememes = response.memes
    })
  }
  onPrevClick(): void{
    if(this.selectedIndex === 0) {
      this.selectedIndex = this.Animememes.length - 1;
      } else{
      this.selectedIndex--;
    } 
    if(this.selectedIndex === 9){
      window.location.reload();
    }

  }
  onNextClick():void{
    if(this.selectedIndex === this.Animememes.length - 1) {
      this.selectedIndex = 0;
      }else{
      this.selectedIndex ++;
    }
    if(this.selectedIndex === 9){
      window.location.reload();
    }
  }
  
}

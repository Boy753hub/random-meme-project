import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { DatabaseService } from '../database.service';
import { LoaderService } from '../loader/loader.service';

@Component({
  selector: 'app-anime-memes',
  templateUrl: './anime-memes.component.html',
  styleUrls: ['./anime-memes.component.css']
})
export class AnimeMemesComponent implements OnInit {

  constructor(private animememes: DatabaseService,public loadingService:LoaderService) { }
  numbers = 20
  //Number = 0
  Animememes: any
  Animememes2 = []
  selectedIndex = 0
  @Input() controls = true;
  gettingdata(){
    this.animememes.getAnimeMemes().subscribe((response) =>{
      this.Animememes = response.memes
      //this.Number + 15
    })
  }
  //here everything is same as in dank memes component but here we get data from diffent api, its same api but we get diffrent data
  ngOnInit(): void {
    this.gettingdata()
  }
  onPrevClick(): void{
    if(this.selectedIndex === 0) {
      this.selectedIndex = this.Animememes.length - 1;
      } else{
      this.selectedIndex--;
    } 
                    if(this.selectedIndex % this.numbers === 0){
                      
                      this.animememes.getAnimeMemes().subscribe((response) =>{
                        this.Animememes2 = response.memes})
                     
                        for(let meme of this.Animememes2){
                              this.Animememes.push(meme)
                              this.Animememes.splice(0, 20);
                              
                            }
                            this.Animememes.shift(); // Remove the first item from the array
                            this.Animememes.unshift(...this.Animememes2); // Add the new items to the beginning of the array
                        
                          }
                          
                          console.log(this.numbers)
                          console.log(this.selectedIndex)
  }
  onNextClick():void{
    if(this.selectedIndex === this.Animememes.length - 1) {
      this.selectedIndex = 0;
      }else{
      this.selectedIndex ++;
    }
                    if(this.selectedIndex % this.numbers === 0){
                      
                      this.animememes.getAnimeMemes().subscribe((response) =>{
                      this.Animememes2 = response.memes})
                      for(let meme of this.Animememes2){
                      this.Animememes.push(meme)
                      this.Animememes.splice(0, 20);
                          
                      }
                      this.Animememes.shift(); // Remove the first item from the array
                      this.Animememes.unshift(...this.Animememes2); // Add the new items to the beginning of the array
                  
                      
                    }
                    console.log(this.Animememes)
                    console.log(this.numbers)
                    console.log(this.selectedIndex)
                    
  }
  
}

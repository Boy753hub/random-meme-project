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
  numbers = 20
  memes:any
  memes2 = []
  selectedIndex = 0
  @Input() controls = true;
  gettingdata(){
    this.memeslink.getMemes().subscribe((response) =>{
      this.memes = response.memes
      console.log(this.memes)
    })
  }
  ngOnInit(): void {
    //getting sorted info from api and putting in memes int
    this.gettingdata()
  }
  
//carusel prev button function pressing and getting back to prev meme
onPrevClick(): void{
  if(this.selectedIndex === 0) {
    this.selectedIndex = this.memes.length - 1;
    } else{
    this.selectedIndex--;
  } 
                  if(this.selectedIndex % this.numbers === 0){
                    
                    this.memeslink.getMemes().subscribe((response) =>{
                      this.memes2 = response.memes})
                   
                      for(let meme of this.memes2){
                            this.memes.push(meme)
                            this.memes.splice(0, 20);
                            
                          }
                          this.memes.shift(); // Remove the first item from the array
                          this.memes.unshift(...this.memes2); // Add the new items to the beginning of the array
                      
                        }
                        
                        console.log(this.numbers)
                        console.log(this.selectedIndex)
}
onNextClick():void{
  if(this.selectedIndex === this.memes.length - 1) {
    this.selectedIndex = 0;
    }else{
    this.selectedIndex ++;
  }
                  if(this.selectedIndex % this.numbers === 0){
                    
                    this.memeslink.getMemes().subscribe((response) =>{
                    this.memes2 = response.memes})
                    for(let meme of this.memes2){
                    this.memes.push(meme)
                    this.memes.splice(0, 20);
                        
                    }
                    this.memes.shift(); // Remove the first item from the array
                    this.memes.unshift(...this.memes2); // Add the new items to the beginning of the array
                
                    
                  }
                  console.log(this.memes)
                  console.log(this.numbers)
                  console.log(this.selectedIndex)
                  
}

}
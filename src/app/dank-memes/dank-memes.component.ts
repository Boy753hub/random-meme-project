import { Component, Input, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { LoaderService } from '../loader/loader.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, observable } from 'rxjs';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-dank-memes',
  templateUrl: './dank-memes.component.html',
  styleUrls: ['./dank-memes.component.css']
})
export class DankMemesComponent implements OnInit {

  constructor(private memeslink: DatabaseService , public loadingService:LoaderService,private route: ActivatedRoute, private searchService: SearchService) { }
  numbers:number = 20
  reddit:string = ''
  memes:any
  memes2 = []
  selectedIndex = 0
  @Input() controls = true;
  text = ''
  // @Input() search: string = ''


  gettingdata(){
    this.memeslink.getMemes(this.numbers, this.text).subscribe((response) =>{
      this.memes = response.memes
    }, error => {
      alert("server error press ok to try again " + error.error.message)
      this.text = 'memes'
      location.reload()
    })
  }
  ngOnInit(): void {
    // getting sorted info from api and putting in memes int
    // console.log(this.search)
    this.searchService.getString().subscribe(value => {
      // console.log(value)
      if(value === ''){
        this.gettingdata()
      }
      if(String(value) && value !== ""){
          this.text = '/' + value
          this.memeslink.getMemes(this.numbers, this.text).subscribe((response) =>{
            this.memes = response.memes
          }, error => {
            alert(error.error.message)
          });
      }

      // Call any other function or perform any logic based on the updated string value
    });
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
      
      this.gettingdata()
      
        for(let meme of this.memes2){
              this.memes.push(meme)
              this.memes.splice(0, 20);
              
            }
            this.memes.shift(); 
            this.memes.unshift(...this.memes2); 
        
          }
                        
}
onNextClick():void{
  if(this.selectedIndex === this.memes.length - 1) {
    this.selectedIndex = 0;
    }else{
    this.selectedIndex ++;
  }
      if(this.selectedIndex % this.numbers === 0){
        
        this.gettingdata()

        for(let meme of this.memes2){
        this.memes.push(meme)
        this.memes.splice(0, 20);
            
        }
        this.memes.shift(); 
        this.memes.unshift(...this.memes2); 
    
        
      }
                  
}

}
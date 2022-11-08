import {  HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import {MatProgressBarModule} from '@angular/material/progress-bar' ;
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DankMemesComponent } from './dank-memes/dank-memes.component';
import { AnimeMemesComponent } from './anime-memes/anime-memes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { InteceptorService } from './loader/inteceptor.service';
import {MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { InteceptorService2 } from './loader/inteceptor.service 2';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
@NgModule({
  declarations: [
    AppComponent,
    DankMemesComponent,
    AnimeMemesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SwiperModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule
  ],
  providers: [ 
    {provide:HTTP_INTERCEPTORS, useClass: InteceptorService, multi:true},
    {provide:HTTP_INTERCEPTORS, useClass: InteceptorService2, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

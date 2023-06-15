import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeMemesComponent } from './anime-memes/anime-memes.component';
import { DankMemesComponent } from './dank-memes/dank-memes.component';

const routes: Routes = [
  { path: 'memes', component: DankMemesComponent },
  { path: 'animememes', component: AnimeMemesComponent},
  { path: '**', redirectTo: 'memes'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

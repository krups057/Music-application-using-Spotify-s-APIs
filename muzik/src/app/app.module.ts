import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { ArtistComponent } from './artist/artist.component';
import { HttpModule } from '@angular/http';
import { ServiceService } from './service.service';
import {LogoutService} from './logout.service';
import { AlbumComponent } from './album/album.component';

import { LogoutComponent } from './logout/logout.component';
import { SearchalbumComponent } from './searchalbum/searchalbum.component';
import { PlaylistComponent } from './playlist/playlist.component'

const routes: Routes = [
  {path:'', component: SearchComponent},
  {path:'about', component: AboutComponent},
  {path:'logout',component: LogoutComponent},
  {path:'artist/:id' , component:ArtistComponent},
  {path:'searchalbums',component:SearchalbumComponent},
  {path:'playlist',component:PlaylistComponent},
  {path:'album/:id' , component:AlbumComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    SearchComponent,
    ArtistComponent,
    AlbumComponent,
    LogoutComponent,
    SearchalbumComponent,
    PlaylistComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [ServiceService,LogoutService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

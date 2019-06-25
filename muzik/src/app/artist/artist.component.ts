import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute , Params } from "@angular/router";
import { Artist } from "../Artist";
import { Album } from "../Album"
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  id:number;
  name:string;
  genre:any;
  artist:Artist[];
  albums:Album[];

  constructor(private _spotifyService: ServiceService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params
    .map(params => params['id'])
    .subscribe((id) => { 
       this._spotifyService.getToken()
        .subscribe(data => {
          this._spotifyService.getArtist(id, data.access_token)
           .subscribe(artist=> {
             this.artist = artist;
          })
          this._spotifyService.getAlbums(id, data.access_token)
              .subscribe(albums => {
                this.albums = albums.items;
              })
          })
    })
}



  

}

import { Component, OnInit } from '@angular/core';
import { ServiceService } from "../service.service";
import { Artist } from "../artist";
import { Album } from "../Album";
import { ActivatedRoute , Params } from "@angular/router";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  id:string;
  album:Album[];

  constructor(private _spotifyservice:ServiceService , private _route:ActivatedRoute ){}


  ngOnInit(){
      this._route.params
      .map(params => params['id'])
      .subscribe((id) => {
          this._spotifyservice.getToken()
          .subscribe(data => {
              this._spotifyservice.getAlbum(id, data.access_token)
              .subscribe(album => {
                  this.album = album;
              })
          })
      })
  }


}

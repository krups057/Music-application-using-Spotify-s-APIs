import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Album } from '../Album'

@Component({
  selector: 'app-searchalbum',
  templateUrl: './searchalbum.component.html',
  styleUrls: ['./searchalbum.component.css'],
  providers: [ServiceService],
})
export class SearchalbumComponent implements OnInit {
  searchStr:string;
  searchRes : Album[];

  constructor(private _spotifyService:ServiceService) { }

  ngOnInit() {
  }
  searchMusica(){
    this._spotifyService.getToken()
    .subscribe(res => {
      this._spotifyService.searchMusica(this.searchStr,'album',res.access_token)
      .subscribe(res =>{
        this.searchRes = res.albums.items;
    })
  })

}
}

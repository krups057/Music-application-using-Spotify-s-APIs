import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Artist } from '../Artist'

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css'],
  providers: [ServiceService],
})
export class PlaylistComponent implements OnInit {
  
  searchRes : string[];
  constructor(private _spotifyService:ServiceService) { }

  ngOnInit() {
    this._spotifyService.getToken()
    .subscribe(res => {
      this._spotifyService.getplaylist(res.access_token)
      .subscribe(res =>{
        console.log(res)
        this.searchRes = res.items;
        

    })
  })

  }

  searchMusic(){
  

}

 


}

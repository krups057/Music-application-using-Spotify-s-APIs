import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Artist } from '../Artist'


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ServiceService],
})

export class SearchComponent implements OnInit {

  searchStr:string;
  searchRes : Artist[];
 
  constructor(private _spotifyService:ServiceService) {

   }

   ngOnInit() {
  }


  searchMusic(){
    this._spotifyService.getToken()
    .subscribe(res => {
      this._spotifyService.searchMusic(this.searchStr,'artist',res.access_token)
      .subscribe(res =>{
        this.searchRes = res.artists.items;
    })
  })

}
}

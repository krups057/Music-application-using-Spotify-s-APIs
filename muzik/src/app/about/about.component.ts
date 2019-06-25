import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Artist } from '../Artist'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [ServiceService],
})
export class AboutComponent implements OnInit {
  searchStr:string;
  searchRes : string[];
  constructor(private _spotifyService:ServiceService) { }

  ngOnInit() {
  }


  searchMusics(){
    this._spotifyService.getToken()
    .subscribe(res => {
      this._spotifyService.searchMusics(this.searchStr,'track',res.access_token)
      .subscribe(res =>{
        this.searchRes = res.tracks.items;
    })
  })

}

}

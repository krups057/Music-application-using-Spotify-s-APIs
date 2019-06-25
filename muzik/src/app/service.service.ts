import { Injectable } from '@angular/core';
import { Http,Headers,Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ServiceService {
  private searchUrl:string;
  private client_id ='dc1078b29afe49899d3ce17b871e05ad';
  private client_secret = 'cbab59455bad417b9e1fbeb0b57a9c2f';
  private ArtistUrl: string;
  private AlbumsUrl: string;
  private AlbumUrl: string;
  private encoded = btoa(this.client_id + ':' + this.client_secret);
  
  constructor(private _http:Http) { }

  // searchMusic(str:string,type='artist'){
  //   this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type+'&market=US';
  //   return this._http.get(this.searchUrl)
  //   .map(res => res.json())

  // }

  getToken(){
    // let params : URLSearchParams = new URLSearchParams();
    // params.set('grant_type' , 'client_credentials');
    // let body = params.toString();
     var params = ('grant_type=client_credentials');

     var headers = new Headers();
     headers.append( 'Authorization', 'Basic ' + this.encoded);
    
     headers.append('Content-Type' , 'application/x-www-form-urlencoded');

     return this._http.post('https://accounts.spotify.com/api/token', params , {headers : headers} )
     .map(res=> res.json());
  }

  getusername(token:string){
      console.log(this.encoded);
      this.searchUrl='https://api.spotify.com/v1/me';
      let headers = new Headers();
      headers.append('Authorization' , 'Bearer ' + token);
      return this._http.get(this.searchUrl , {headers : headers})
      .map((res: Response) => res.json())
  }

  getplaylist(token:string){
     
    console.log(this.encoded);
    this.searchUrl='https://api.spotify.com/v1/users/212uzew7ttksinacnuwhttupy/playlists';
    let headers = new Headers();
    headers.append('Authorization' , 'Bearer ' + token);

    return this._http.get(this.searchUrl , {headers : headers})
    .map((res: Response) => res.json())
    
  }


searchMusic(str:string, type='artist' ,token:string){
  
     
    console.log(this.encoded); 
    this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type;
    let headers = new Headers();
    headers.append('Authorization' , 'Bearer ' + token);

    return this._http.get(this.searchUrl , {headers : headers})
    .map((res: Response) => res.json())
}

searchMusics(str:string, type='track' ,token:string){
    
       
      console.log(this.encoded); 
      this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type;
      let headers = new Headers();
      headers.append('Authorization' , 'Bearer ' + token);
  
      return this._http.get(this.searchUrl , {headers : headers})
      .map((res: Response) => res.json())
  }

  searchMusica(str:string, type='album' ,token:string){
    
       
      console.log(this.encoded); 
      this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type;
      let headers = new Headers();
      headers.append('Authorization' , 'Bearer ' + token);
  
      return this._http.get(this.searchUrl , {headers : headers})
      .map((res: Response) => res.json())
  }



getArtist(id:string ,token:string){
  
    this.ArtistUrl = 'https://api.spotify.com/v1/artists/'+ id;
    let headers = new Headers();
    headers.append('Authorization' , 'Bearer ' + token);

    return this._http.get(this.ArtistUrl , {headers : headers})
    .map((res: Response) => res.json())

    
}


getAlbums(artistId:string ,token:string){
  
    this.AlbumsUrl = 'https://api.spotify.com/v1/artists/'+ artistId + '/albums/?query=&limit=50';
    let headers = new Headers();
    headers.append('Authorization' , 'Bearer ' + token);

    return this._http.get(this.AlbumsUrl , {headers : headers})
    .map((res: Response) => res.json())

    
}

getAlbum(id:string ,token:string){
  
    this.AlbumUrl = 'https://api.spotify.com/v1/albums/'+id;
    let headers = new Headers();
    headers.append('Authorization' , 'Bearer ' + token);

    return this._http.get(this.AlbumUrl , {headers : headers})
     .map((res: Response) => res.json())
 
}


}
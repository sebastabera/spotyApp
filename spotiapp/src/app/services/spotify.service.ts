import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }

  getQuery(query:string){
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDEgygQ0jsgGwkopvYGC6DsrnPP46DXTKLTdnIZpARhkH63hoxF0QkEUjGv_x3FT_PdV78Ft8UXrZef-yn7YE5rjs6AYEvklpBIhw-P4fwcm5qGew2f9dxXx325yQPuPE2H621F9hxbvIQPDYNtX4ZBm-q3tuSrYCXWew'
    });

    return this.http.get(url,{headers});

  }

  getNewReleases(){
    return this.getQuery('browse/new-releases?limit=20')
    .pipe( map(data => data['albums'].items));

  }

  getArtista(termino:string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
    .pipe( map(data=>data['artists'].items));
  }

}

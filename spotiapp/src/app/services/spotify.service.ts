import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }

  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDOsQeCFnPWrwLP3mZPvDCEDmOfmlS_N0osfEGoUWw-N5x8wG6iV2-cTIOHpCa3owbKY_8sWI7Rdsri3kA'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
    .subscribe(data => {
      console.log(data);
    };
  }

}

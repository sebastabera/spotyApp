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
      'Authorization': 'Bearer BQAJaDneIO9KXk2b6cntIcJpG9zSNzfyQ7rrCkM8FKKRYAq_p1cxcrAr1jfo_hrPxYdL0SF_TJGnDzS3wC68i-taWDI3Fh0SzZsuIaRqcQQbYDNA4nefNpRLuwolsHVpMnigEiAvW-AZ1WWUge_A4Pca_bfeMTb_788F8w'
    });

    return this.http.get(url,{headers});

  }

  getNewReleases(){
    return this.getQuery('browse/new-releases?limit=20')
    .pipe( map(data => data['albums'].items));

  }

  getArtistas(termino:string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
    .pipe( map(data=>data['artists'].items));
  }

  getArtista(id:string){
    return this.getQuery(`artists/${id}`);
  }

}

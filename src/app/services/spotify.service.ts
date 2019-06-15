import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { tokenKey } from '@angular/core/src/view';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('spotify service ready');
  }

  token: string = 'BQB3Zo2opRvEyED6VH4Pbj2BvSnWarUKcbFjiGLfLWph4LqktxRZkFp-tyoyERd4PfX8DTCbLm4Jl7kBHtM';

  getQuery(query: string){
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer '+ this.token
    });

    return this.http.get(url, {headers});
  }

  getNewReleases(){

    return this.getQuery('browse/new-releases?limit=20')
               .pipe( map( res => res['albums'].items ));

  }

/////////////////////////////////////////////////////////////////////////////////

  getArtists(term: string){

    return this.getQuery(`search?q=${term}&type=artist&market=EC`)
               .pipe( map( res => res['artists'].items));
  }

/////////////////////////////////////////////////////////////////////////////////

  getOneArtist(id: string){

    return this.getQuery(`artists/${id}`);
               //.pipe( map( res => res['artists'].items));

  }

/////////////////////////////////////////////////////////////////////////////////

getTopTracks(id: string){

  return this.getQuery(`artists/${id}/top-tracks?country=EC`)
             .pipe( map( res => res['tracks']));
}

}


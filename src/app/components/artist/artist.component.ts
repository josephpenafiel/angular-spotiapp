import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {


  artist: any = {};
  topTracks: any = {};
  loading: boolean;

  constructor(private activatedRoute: ActivatedRoute,
              private spotify: SpotifyService) {

    this.loading = true;
    this.activatedRoute.params.subscribe( params => {
      this.getArtist(params['id']);
      this.artistTopTracks(params['id']);
    });
  }

  getArtist(id: string){

    this.loading = true;
    this.spotify.getOneArtist(id)
                .subscribe( res => {
                  //console.log(res);
                  this.artist = res;
                  this.loading = false;
                })
  }

  artistTopTracks(id: string){

    this.spotify.getTopTracks(id)
                .subscribe( res => {
                  this.topTracks = res;
                  console.log(res);
                } )
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artists: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) { }

  ngOnInit() {
  }

  searchSong(term: string) {

    this.loading = true;
    this.spotify.getArtists(term)
            .subscribe( (res: any) => {
              this.artists = res;
              this.loading = false;
            });
  }

}

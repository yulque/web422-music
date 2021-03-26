import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { Subscription } from 'rxjs';
import { MusicDataService } from '../music-data.service';
import _ from 'lodash';

@Component({
  selector: 'app-artist-discography',
  templateUrl: './artist-discography.component.html',
  styleUrls: ['./artist-discography.component.css']
})
export class ArtistDiscographyComponent implements OnInit {

  albums: any;
  artist: any;
  paramSubscription: Subscription;
  unique: any;

  constructor(
    private route: ActivatedRoute,
    private dataService: MusicDataService
    ) {}

  ngOnInit(): void {
    this.paramSubscription = this.route.params.subscribe(
      (params: Params) =>{
        console.log('params: ', params);
        this.dataService.getAlbumsByArtistId(params.id).subscribe(
          albums => {
            console.log('albums info:', albums);
          const set = _.uniqBy(albums.items,"name");
          console.log(set);
          this.albums = set;
      }
      )
         this.dataService.getArtistById(params.id).subscribe(
          artist => {
          console.log('artist info:', artist);
          this.artist = artist;
      }
      )}
    );
  }

  ngOnDestroy(): void {
    this.paramSubscription.unsubscribe();
  }

}

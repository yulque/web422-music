import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { Subscription } from 'rxjs';
import { MusicDataService } from '../music-data.service';
import * as albumData from '../data/SearchResultsAlbums.json';
import * as artistData from '../data/SearchResultsArtist.json';
import { fromEventPattern } from 'rxjs';
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
    // this.albums = albumData.albums.items;
    // this.artist = (artistData as any).default;
    // console.log(this.albums);

    this.paramSubscription = this.route.params.subscribe(
      (params: Params) =>{
        console.log('params: ', params);
        this.dataService.getAlbumsByArtistId(params.id).subscribe(
          albums => {
            console.log('albums info:', albums);
          // const unique = albums.items.map(item => {return {
          //   name: item.name, 
          //   album_type: item.album_type, 
          //   release_date: item.release_date, 
          //   total_tracks: item.total_tracks,
          //   images: item.images}});
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

}

import { Component, OnInit, Output, OnDestroy, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params } from '@angular/router'
import { Subscription } from 'rxjs';
import { MusicDataService } from '../music-data.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  album : any;
  paramSubscription: Subscription;

  constructor(
    private snackbar: MatSnackBar,
    private route: ActivatedRoute,
    private dataService: MusicDataService
  ) {}

  ngOnInit(): void {
    this.paramSubscription = this.route.params.subscribe(
      (params:Params) => 
        this.dataService.getAlbumById(params.id).subscribe(
          album => this.album = album
        )
    );
  }

  ngOnDestroy(): void {
    this.paramSubscription.unsubscribe();
  }

  addToFavourites(trackId): void {
    this.dataService.addToFavourites(trackId)
    .subscribe(next => {
      console.log('what is returned from add to favourites function', next);
      this.snackbar.open("Adding to Favourites...", "Done", { duration: 1500 });
    }, err => {
      this.snackbar.open("Unable to add song to Favourites");
    })
    // if(this.dataService.addToFavourites(trackId))
    //   this.snackbar.open("Adding to Favourites...", "Done", { duration: 1500 });
  }

}

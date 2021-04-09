import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MusicDataService } from '../music-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  favourites: Array<any>;
  subscription: Subscription;

  constructor(
    private snackbar: MatSnackBar,
    private dataService: MusicDataService,
  ) {}

  ngOnInit(): void {
    
    this.subscription = this.dataService.getFavourites().subscribe( 
      data => {
        this.favourites = data.tracks;
        console.log('getFavourites data looks like : ', data);
      }
      );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
  iconClicked(id): void {
    this.dataService.removeFromFavourites(id)
    .subscribe(next => {
      console.log('what is returned from add to favourites function', next);
      this.favourites = next.tracks;
      
      this.snackbar.open("removed song from Favourites.", "Done", { duration: 1000 });
    }, err => {
      this.snackbar.open("Unable to remove the song from Favourites");
      console.log('error', err);
    })
  }

}

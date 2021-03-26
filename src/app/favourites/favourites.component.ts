import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MusicDataService } from '../music-data.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  favourites: Array<any>;
  subscription: Subscription;

  constructor(
    private dataService: MusicDataService,
  ) {}

  ngOnInit(): void {
    this.subscription = this.dataService.getFavourites().subscribe( 
      data => this.favourites = data.tracks
      );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
  iconClicked(id): void {
    this.dataService.removeFromFavourites(id);
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { MusicDataService } from '../music-data.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  results: any;
  searchString: any;
  paramSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private dataService: MusicDataService
  ) {}

  ngOnInit(): void {
    this.paramSubscription = this.route.queryParams.subscribe(
      (params: Params) => {
        this.searchString = params.q;
        this.dataService.searchArtists(this.searchString).subscribe(
        data => this.results = data.artists.items.filter(item => item.images.length>0)
      );
      }
    )
  }

  ngOnDestroy() : void {
    this.paramSubscription.unsubscribe();
  }
}

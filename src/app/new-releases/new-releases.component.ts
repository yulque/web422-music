import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MusicDataService } from '../music-data.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-releases',
  templateUrl: './new-releases.component.html',
  styleUrls: ['./new-releases.component.css']
})
export class NewReleasesComponent implements OnInit {

  releases : any;
  paramSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private dataService: MusicDataService
    ) {}

  ngOnInit(): void {
    this.paramSubscription = this.route.params.subscribe(
      (params: Params) =>
      this.dataService.getNewReleases().subscribe(
        newRelease => this.releases = newRelease.albums.items
      )
    );
  }

  ngOnDestroy(): void {
    this.paramSubscription.unsubscribe();
  }

}

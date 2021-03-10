import { Component, OnInit } from '@angular/core';
import * as data from '../data/NewReleasesAlbums.json';

@Component({
  selector: 'app-new-releases',
  templateUrl: './new-releases.component.html',
  styleUrls: ['./new-releases.component.css']
})
export class NewReleasesComponent implements OnInit {

  releases : Array<Object> = data.albums.items;;

  constructor() { 
  }

  getReleases(){ return this.releases.map(i=> JSON.stringify(i))};
  ngOnInit(): void {
   
  }

}

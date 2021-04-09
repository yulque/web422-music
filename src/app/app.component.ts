/*********************************************************************************
*  WEB422 – Assignment 06
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part of this
*  assignment has been copied manually or electronically from any other source (including web sites) or 
*  distributed to other students.
* 
*  Name: Yu Ri Yoon_ Student ID: 135023190_ Date: April 9 2021_
*
********************************************************************************/ 


import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'web422-a4';
  searchString: string;
  public token: any;

  constructor( 
    private router: Router,
    private auth: AuthService
  ){}

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if(event instanceof NavigationStart) {
        this.token = this.auth.readToken();
      }
    })
  }
  
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  handleSearch(){
    console.log('searchString' , this.searchString);
    this.router.navigate(['/search'], { queryParams: { q: this.searchString } });
    this.searchString = '';
   
  }
}

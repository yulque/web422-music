/*********************************************************************************
*  WEB422 – Assignment 05
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part of this
*  assignment has been copied manually or electronically from any other source (including web sites) or 
*  distributed to other students.
* 
*  Name: Yu Ri Yoon_ Student ID: 135023190_ Date: Mar 21 2021_
*
********************************************************************************/ 


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web422-a4';
  searchString: string;

  constructor( private router: Router ){}

  handleSearch(){
    console.log('searchString' , this.searchString);
    this.router.navigate(['/search'], { queryParams: { q: this.searchString } });
    this.searchString = '';
   
  }
  ngOnInit(): void {
    
  }
}

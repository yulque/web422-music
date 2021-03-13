import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  isShown: boolean;
  constructor() { }

  ngOnInit(): void {
    this.isShown = false;
  }
  clickMail(): void {
    this.isShown = true;
  }
}

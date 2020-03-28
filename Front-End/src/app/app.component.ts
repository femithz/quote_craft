import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  showsplash = true;
  title = 'app-front';

  constructor() {
    this.initializeApp();

  }

  initializeApp() {
        this.showsplash = false; 
        console.log('The lord is good');
  }

  ngOnInit() {

  }
}

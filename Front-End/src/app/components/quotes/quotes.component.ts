import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuotesService } from 'src/app/quote.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Object;

  constructor(private _router: Router, private _quoteService: QuotesService) { }

  ngOnInit() {
    this.getHistory();
  }
  home(){
    this._router.navigate(['/home']);
  }
 // Function to get wallet history 
 getHistory(){
  this._quoteService.getQuote().subscribe(data => {
    this.quotes= data;
  })
}
}

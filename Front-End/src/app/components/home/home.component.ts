import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AddQuoteComponent } from '../add-quote/add-quote.component';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { QuotesService } from 'src/app/quote.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selected = 'default';
  quoteFormGroup: FormGroup;
  successCaptured: any;
  // tslint:disable-next-line:max-line-length
  constructor( 
     private dialog: MatDialog ,
     private _fb: FormBuilder,
     private  _quoteService: QuotesService,
     private _toastrService: ToastrService,
     private _router:Router) {}

  ngOnInit() {
    // add faq Form
    this.quoteFormGroup = this._fb.group({
      author_name: [null, [Validators.required]],
      quote: [null, [Validators.required]],
    })
  }
 quotes(){
   this._router.navigate(['/quotes']);
 }

  // function to add quote
  addQuote(){
    console.log(this.quoteFormGroup.value);
  if(!this.quoteFormGroup.valid){

  } else {
   this._quoteService.add_quote(JSON.stringify(this.quoteFormGroup.value))
   .subscribe(data => {
    this.successCaptured = <any>data['message'];
    this._toastrService.success('',`${this.successCaptured}`, {
      timeOut: 3000
    });
    this._router.navigate(['/quotes']);
   },
   err=> {
    if (err.status == 0) {
      this._toastrService.error('','Check your Networkk Connection!!!');
     } else if (err) {
      this._toastrService.error('',err, {
        timeOut: 3000
      }); 
     } else {
      this._toastrService.error('','Service is unavailable!!!');
     }
   })
}
}
}


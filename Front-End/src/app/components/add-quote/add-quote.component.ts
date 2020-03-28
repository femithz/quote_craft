import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {
  // nomineesForm: FormGroup = new FormGroup({
  //   studentpreneur_name: new FormControl(null, Validators.required),
  //   business_name: new FormControl(null, Validators.required),
  //   business_num: new FormControl(null, Validators.required),
  //   business_category: new FormControl(null, Validators.required),
  //   nominee_phone_num: new FormControl(null, Validators.required),
  //   nominee_email: new FormControl(null, Validators.required),
  //   nominee_dept: new FormControl(null, Validators.required),
  //   nominee_level: new FormControl(null, Validators.required),
  //   nominee_name: new FormControl(null, Validators.required)
  // });
  constructor() { }

  ngOnInit() {
  }
  // nominate() {
  //   if (!this.nomineesForm.valid) {
  //     this.toastr.error('Recheck the Nomination Form', 'Error Message ', {
  //       timeOut: 3000
  //     }); return;
  //   } else {
  //     this._nomineesService.nominate(JSON.stringify(this.nomineesForm.value))
  //     .subscribe(data => {
  //       this.toastr.success('Thanks for nominating', 'Nomination Successful', {
  //         timeOut: 3000
  //       });
  //       this.nomineesForm.reset();
  //       this._router.navigate(['nominees']);
  //     },
  //     error => {
  //       this.toastr.error('Check your credentials', 'Error Message', {
  //         timeOut: 2000
  //       });
  //     }
  //     );
  //   }
  // }
}

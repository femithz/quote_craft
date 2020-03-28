import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AddQuoteComponent } from './components/add-quote/add-quote.component';
import { QuotesService } from './quote.service';
import { QuotesComponent } from './components/quotes/quotes.component';
// Material module importation start
import {
  MatDialogModule,
} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddQuoteComponent,
    QuotesComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    }),
    FormsModule,
    HttpClientModule
  ],
  providers: [QuotesService],
  bootstrap: [AppComponent],
  entryComponents:[
    AddQuoteComponent,
  ],
})
export class AppModule { }

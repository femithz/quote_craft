import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(private _http: HttpClient) { }

  add_quote(body: any) {
    return this._http.post('quote/add_quote', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
  getQuote() {
    return this._http.get('quote/quotes', {
    observe: 'body',
    headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
}

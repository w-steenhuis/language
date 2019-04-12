import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'language';
  data: any;

  constructor(private _http: HttpClient) {
    this.data = this._http.get('http://www.anwb.nl/feeds/gethf');
  }



}

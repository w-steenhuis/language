import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';

@Component({
  template: `
    <h1>{{ 'THANKS' | translate }}</h1>

    <ng-container *ngIf='(data | async) as trafficInfo'>
      <div *ngFor='let roadEntry of trafficInfo.roadEntries'>
        <ng-container *ngIf='roadEntry.events.trafficJams.length'>
          <div *ngFor='let incident of roadEntry.events.trafficJams'>
            {{ incident.location }} {{ incident.distance / 1000 | number }} km
            {{ incident.from }} - {{ incident.to }}
          </div>
        </ng-container>
      </div>
    </ng-container>
  `
})
export class EagerComponent {
  data: any;

  constructor(private _http: HttpClient) {
    this.data = this._http.get('http://www.anwb.nl/feeds/gethf');
  }
}

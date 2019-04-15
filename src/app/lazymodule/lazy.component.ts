import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';

@Component({
  template: `<div>LAZY Translated with shared module: {{ 'WELCOME' | translate }}`,
})
export class LazyComponent {
}

import { Component } from "@angular/core";

@Component({
  template: `
    <h1>{{ "LAZY_LOADING_TITLE" | translate }}</h1>
    <img src="https://www.gstatic.com/webp/gallery3/2.png" />
    <div class="balloon"
    >
      <h5 style="display: inline-block; margin: 50px;">{{ "THANKS" | translate }}</h5>
    </div>
  `
})
export class LazyComponent {}

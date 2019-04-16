import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'language';
  selected: string;
  languages: string[] = ['nl', 'en', 'fr', 'de'];

  constructor(private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.selected = 'nl';
    this.translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use(this.selected );
  }

  switchLanguage(lang: string) {
    this.selected = lang;
    this.translate.use(lang);
  }
}

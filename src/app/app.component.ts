import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TranslateModule, TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  constructor(
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.initI18n();
  }

  private initI18n() {
    this.translate.setDefaultLang('de_DE'); // default fallback language
    this.translate.use('de_DE'); // use german language

  }

  onTranslationButtonClick() {
    this.translate.use(this.translate.currentLang === this.translate.defaultLang ? 'en_EN' : 'de_DE');
  }
}

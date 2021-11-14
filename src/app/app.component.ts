import {Component} from '@angular/core';

import {locale} from "devextreme/localization";
import {AppService, Locale} from "./app.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [AppService]
})
export class AppComponent {
  locale: string;
  locales: Locale[];
  appDate: any = new Date(2021,0,19);

  constructor(private service: AppService) {
    this.locale = this.getLocale();
    this.locales = service.getLocales();
    locale(this.locale);
  }

  changeLocale(data: any) {
    this.setLocale(data.value);
    location.reload();
  }

  getLocale() {
    const locale = sessionStorage.getItem("locale");
    return locale != null ? locale : "en";
  }

  setLocale(locale: string) {
    sessionStorage.setItem("locale", locale);
  }

}

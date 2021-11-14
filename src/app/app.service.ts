import {Injectable} from '@angular/core';

export class Locale {
  Name: string;
  Value: string;
}

const locales: Locale[] = [
  {
    Name: "English",
    Value: "en"
  },
  {
    Name: "Deutsch",
    Value: "de"
  },
  {
    Name: "Русский",
    Value: "ru"
  },
  {
    Name: "Thai",
    Value: "th"
  }
];


@Injectable({
  providedIn: 'root'
})
export class AppService {

  getLocales() {
    return locales;
  }

}

import {Component, Input} from '@angular/core';
import {locale} from 'devextreme/localization';

@Component({
  selector: 'dx-date-box-custom',
  template: `
    <dx-date-box
      [(ngModel)]="date"
      (onKeyUp)="onKeyUp($event)"></dx-date-box>`
})
export class DxDateBoxCustomComponent{
  @Input() date: Date;
  locale: string;

  constructor() {
    locale('th-TH'); // Not necessary
  }

  getLocale() {
    const locale = sessionStorage.getItem("locale");
    return locale != null ? locale : "en";
  }

  onKeyUp(event: any) {
    if (this.getLocale() !== 'th') return;
    const inputValue = event.event.currentTarget.value;
    if (/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(inputValue)) {
      const [d, m, y] = inputValue.split('/');
      const utcYear = y - 543;
      this.date = new Date(utcYear, +m - 1, +d);
    }
  }
}

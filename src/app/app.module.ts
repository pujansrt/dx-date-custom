import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {DevExtremeModule, DxDataGridModule, DxDateBoxModule, DxSelectBoxModule} from 'devextreme-angular';
import {FormsModule} from '@angular/forms';
import {DxDateBoxCustomModule} from './dx-date-box-custom/dx-date-box-custom.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DxDateBoxModule,
    DxSelectBoxModule,
    DxDataGridModule,
    FormsModule,
    DevExtremeModule,
    DxDateBoxCustomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LocationComponent } from './location/location.component';
import { ResultComponent } from './result/result.component';

import { DataService} from './data.service'


@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

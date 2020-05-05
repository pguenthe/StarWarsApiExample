import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PeopleViewComponent } from './people-view/people-view.component';
import { PersonViewComponent } from './person-view/person-view.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleViewComponent,
    PersonViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

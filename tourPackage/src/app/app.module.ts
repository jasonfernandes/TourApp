import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClient, HttpClientModule} from '@angular/common/http';
import { TourPackageAllComponent } from './tour-package-all/tour-package-all.component';

import { ReactiveFormsModule } from '@angular/forms';
import { TotalFareComponent } from './total-fare/total-fare.component';

@NgModule({
  declarations: [
    AppComponent,
    TourPackageAllComponent,
    TotalFareComponent
 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

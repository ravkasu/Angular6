import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ApiService } from './api.service';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { MoviesComponent } from './movies/movies.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerComponent,
    MoviesComponent
  ],
  imports: [
    // NgbModule.forRoot(),
    AppRoutingModule,
    BrowserModule, FormsModule, HttpClientModule,HttpModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from "./app.routing";

import { AppComponent } from './app.component';
import { ParkingsComponent } from './parkings/parkings.component';

import { ParkingService } from './parkings/shared/parking.service';
import { ParkingFormComponent } from './parkings/parking-form/parking-form.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './_service/login.service';


@NgModule({
  declarations: [
    AppComponent,
    ParkingsComponent,
    ParkingFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ParkingService, LoginService],
  bootstrap: [AppComponent]
})

export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AccommodationComponent } from './pages/accommodation/accommodation.component';
import { RoomsComponent } from './pages/accommodation/rooms/rooms.component';
import { FoodAndBeverageComponent } from './pages/food-and-beverage/food-and-beverage.component';
import { RestaurantComponent } from './pages/food-and-beverage/restaurant/restaurant.component';
import { BarsComponent } from './pages/food-and-beverage/bars/bars.component';
import { LifestyleComponent } from './pages/lifestyle/lifestyle.component';
import { WellnessAndSpaComponent } from './pages/lifestyle/wellness-and-spa/wellness-and-spa.component';
import { ResortsActivitiesComponent } from './pages/lifestyle/resorts-activities/resorts-activities.component';
import { ExperiencesComponent } from './pages/lifestyle/experiences/experiences.component';
import { ExcursionsComponent } from './pages/lifestyle/excursions/excursions.component';
import { WeddingsComponent } from './pages/weddings/weddings.component';
import { WesternWeddingsComponent } from './pages/weddings/western-weddings/western-weddings.component';
import { CelebrationsComponent } from './pages/celebrations/celebrations.component';
import { OffersComponent } from './pages/offers/offers.component';
import { AuthComponent } from './pages/auth/auth.component';
import { SigninComponent } from './pages/auth/signin/signin.component';
import { SignupComponent } from './pages/auth/signup/signup.component';



@NgModule({
  declarations: [
    AppComponent,
    AccommodationComponent,
    RoomsComponent,
    FoodAndBeverageComponent,
    RestaurantComponent,
    BarsComponent,
    LifestyleComponent,
    WellnessAndSpaComponent,
    ResortsActivitiesComponent,
    ExperiencesComponent,
    ExcursionsComponent,
    WeddingsComponent,
    WesternWeddingsComponent,
    CelebrationsComponent,
    OffersComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

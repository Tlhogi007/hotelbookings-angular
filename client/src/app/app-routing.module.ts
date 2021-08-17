import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccommodationComponent } from './pages/accommodation/accommodation.component';
import { SigninComponent } from './pages/auth/signin/signin.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { CelebrationsComponent } from './pages/celebrations/celebrations.component';
import { FoodAndBeverageComponent } from './pages/food-and-beverage/food-and-beverage.component';
import { HomeComponent } from './pages/home/home.component';
import { LifestyleComponent } from './pages/lifestyle/lifestyle.component';
import { OffersComponent } from './pages/offers/offers.component';
import { WeddingsComponent } from './pages/weddings/weddings.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'accommodation',component:AccommodationComponent},
  {path :'food-and-beverage',component:FoodAndBeverageComponent},
  {path:'lifestyle',component:LifestyleComponent},
  {path :'weddings',component:WeddingsComponent},
  {path:'offers',component:OffersComponent},
  {path:"celebrations",component:CelebrationsComponent},
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

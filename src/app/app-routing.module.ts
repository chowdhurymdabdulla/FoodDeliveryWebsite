import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SettingComponent } from './setting/setting.component';
import { TrackingComponent } from './tracking/tracking.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'resetPassword', component: ResetPasswordComponent},
  {path: 'main', component: MainComponent},
  {path: 'navBar', component: NavBarComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'setting', component: SettingComponent},
  {path: 'traking', component: TrackingComponent},
  {path: 'cart', component: CartComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

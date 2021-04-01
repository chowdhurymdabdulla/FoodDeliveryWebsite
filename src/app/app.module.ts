import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingComponent } from './setting/setting.component';
import { TrackingComponent } from './tracking/tracking.component';
import { CartComponent } from './cart/cart.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { OrderListService } from './order-list.service';
import { PassMatchDirective } from './pass-match.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    NavBarComponent,
    ProfileComponent,
    SettingComponent,
    TrackingComponent,
    CartComponent,
    MainComponent,
    PassMatchDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [OrderListService],
  bootstrap: [AppComponent]
})
export class AppModule { }

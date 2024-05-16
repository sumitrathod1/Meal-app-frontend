import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { SignupComponent } from './Component/signup/signup.component';
import { HeaderComponent } from './Component/Header/header/header.component';
import { ForgotpasswordComponent } from './Component/forgotpassword/forgotpassword.component';
import { authGuard } from './guards/auth.guard';
import { HomeComponent } from './Component/Home/home/home.component';
import { AboutUsComponent } from './StaticPages/about-us/about-us.component';
import { PrivacyPolicyComponent } from './StaticPages/privacy-policy/privacy-policy.component';
import { ResetComponent } from './Component/reset/reset.component';
import { TermsAndConditionsComponent } from './StaticPages/terms-and-conditions/terms-and-conditions.component';
import { CalendarComponent } from './Component/Home/calendar/calendar.component';
import { BookingComponent } from './Component/Home/booking/booking.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'forget', component: ForgotpasswordComponent },
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  { path: 'calander', component: CalendarComponent, canActivate: [authGuard] },
  { path: 'aboutus', component: AboutUsComponent, canActivate: [authGuard] },
  {
    path: 'policy',
    component: PrivacyPolicyComponent,
    canActivate: [authGuard],
  },
  { path: 'reset', component: ResetComponent, canActivate: [authGuard] },
  {
    path: 'terms',
    component: TermsAndConditionsComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

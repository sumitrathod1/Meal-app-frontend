import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatRadioModule } from '@angular/material/radio';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Component/login/login.component';
import { SignupComponent } from './Component/signup/signup.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './Component/Header/header/header.component';
import { ForgotpasswordComponent } from './Component/forgotpassword/forgotpassword.component';
import { NgToastModule } from 'ng-angular-popup';
import { HomeComponent } from './Component/Home/home/home.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { AboutUsComponent } from './StaticPages/about-us/about-us.component';
import { PrivacyPolicyComponent } from './StaticPages/privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './StaticPages/terms-and-conditions/terms-and-conditions.component';
import { CalendarComponent } from './Component/Home/calendar/calendar.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NativeDateModule } from '@angular/material/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { ResetComponent } from './Component/reset/reset.component';
import { BookingComponent } from './Component/Home/booking/booking.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

// -----------------------------------------------------

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    ForgotpasswordComponent,
    HomeComponent,
    AboutUsComponent,
    PrivacyPolicyComponent,
    TermsAndConditionsComponent,
    CalendarComponent,
    ResetComponent,
    BookingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    NgToastModule,
    MatDatepickerModule,
    MatFormFieldModule,
    NativeDateModule,
    MatNativeDateModule,
    MatIconModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatRadioModule,
    MatRadioModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

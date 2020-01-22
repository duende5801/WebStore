import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ButtonModule} from 'primeng/button';
import {RatingModule} from 'primeng/rating';
import {SidebarModule} from 'primeng/sidebar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './views/pages/landing/landing.component';
import { ProductsComponent } from './views/pages/products/products.component';
import { ContactComponent } from './views/pages/contact/contact.component';
import { CartComponent } from './views/pages/cart/cart.component';
import { AccountProfileComponent } from './views/pages/account-profile/account-profile.component';
import { LogInComponent } from './views/pages/log-in/log-in.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    LandingComponent,
    ProductsComponent,
    ContactComponent,
    CartComponent,
    AccountProfileComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    RatingModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

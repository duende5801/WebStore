import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidebarModule} from 'primeng/sidebar';
import {RatingModule} from 'primeng/rating';
import {PasswordModule} from 'primeng/password';

import { LandingComponent } from './pages/landing/landing.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { CartComponent } from './pages/cart/cart.component';
import { AccountProfileComponent } from './pages/account-profile/account-profile.component';
import { ProductsComponent } from './pages/products/products.component';
import { LogInComponent } from './pages/log-in/log-in.component';


@NgModule({
  declarations: [LandingComponent, ContactComponent, AboutComponent, CartComponent, AccountProfileComponent, ProductsComponent, LogInComponent],
  imports: [
    CommonModule,
    RatingModule,
    SidebarModule,
    PasswordModule
  ]
})
export class ViewsModule { }

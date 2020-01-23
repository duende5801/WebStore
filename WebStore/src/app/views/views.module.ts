import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidebarModule} from 'primeng/sidebar';
import {RatingModule} from 'primeng/rating';
import {PasswordModule} from 'primeng/password';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import { LandingComponent } from './pages/landing/landing.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CartComponent } from './pages/cart/cart.component';
import { AccountProfileComponent } from './pages/account-profile/account-profile.component';
import { ProductsComponent } from './pages/products/products.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { ShippingFormComponent } from './pages/shipping-form/shipping-form.component';
import { CreditFormComponent } from './pages/credit-form/credit-form.component';


@NgModule({
  declarations: [LandingComponent, ContactComponent, CartComponent, AccountProfileComponent, ProductsComponent, LogInComponent, ShippingFormComponent, CreditFormComponent],
  imports: [
    CommonModule,
    RatingModule,
    SidebarModule,
    PasswordModule,
    OverlayPanelModule
  ]
})
export class ViewsModule { }

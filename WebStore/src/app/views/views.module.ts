import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './pages/landing/landing.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { CartComponent } from './pages/cart/cart.component';
import { AccountProfileComponent } from './pages/account-profile/account-profile.component';
import { ProductsComponent } from './pages/products/products.component';



@NgModule({
  declarations: [LandingComponent, ContactComponent, AboutComponent, CartComponent, AccountProfileComponent, ProductsComponent],
  imports: [
    CommonModule
  ]
})
export class ViewsModule { }

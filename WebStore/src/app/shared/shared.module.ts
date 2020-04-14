import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountProfileComponent } from './components/account-profile/account-profile.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { HeaderComponent } from './components/header/header.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ResultComponent } from './components/result/result.component';


@NgModule({
  declarations: [
    AccountProfileComponent,
    CartComponent,
    ProductsComponent,
    HeaderComponent,
    CheckoutComponent,
    ResultComponent
  ],
  imports: [
    CommonModule,
    OverlayPanelModule,
    SidebarModule,
    ButtonModule,
    RatingModule,
    FormsModule,
    ToastModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    AccountProfileComponent,
    CartComponent,
    ProductsComponent,
    HeaderComponent,
    OverlayPanelModule,
    SidebarModule,
    ToastModule,
    ButtonModule,
    RatingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }

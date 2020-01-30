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
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AccountProfileComponent,
    CartComponent,
    ProductsComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    OverlayPanelModule,
    SidebarModule,
    ButtonModule,
    RatingModule,
    FormsModule,
    ToastModule,
    RouterModule
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
    FormsModule
  ]
})
export class SharedModule { }

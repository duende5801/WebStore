import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountProfileComponent } from './components/account-profile/account-profile.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { HeaderComponent } from './components/header/header.component';
import { OverlayPanelModule } from 'primeng/overlaypanel/overlaypanel';


@NgModule({
  declarations: [
    AccountProfileComponent,
    CartComponent,
    ProductsComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    OverlayPanelModule

  ],
  exports: [
    AccountProfileComponent,
    CartComponent,
    ProductsComponent,
    HeaderComponent
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { PasswordModule } from 'primeng/password';

import { LandingComponent } from './pages/landing/landing.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ShippingFormComponent } from './pages/shipping-form/shipping-form.component';
import { CreditFormComponent } from './pages/credit-form/credit-form.component';
import { PreviewCartComponent } from '../main/views/preview-cart/preview-cart.component';
import { SharedModule } from 'primeng/api/shared';


@NgModule({
  declarations: [LandingComponent, ContactComponent, ShippingFormComponent, CreditFormComponent, PreviewCartComponent],
  imports: [
    CommonModule,
    SidebarModule,
    PasswordModule,
    SharedModule
  ]
})
export class ViewsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { RatingModule } from 'primeng/rating';
import { PasswordModule } from 'primeng/password';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ToastModule } from 'primeng/toast';

import { LandingComponent } from './pages/landing/landing.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { ShippingFormComponent } from './pages/shipping-form/shipping-form.component';
import { CreditFormComponent } from './pages/credit-form/credit-form.component';
import { PreviewCartComponent } from '../main/views/preview-cart/preview-cart.component';
import { SharedModule } from 'primeng/api/shared';


@NgModule({
  declarations: [LandingComponent, ContactComponent, LogInComponent, ShippingFormComponent, CreditFormComponent, PreviewCartComponent],
  imports: [
    CommonModule,
    RatingModule,
    SidebarModule,
    PasswordModule,
    OverlayPanelModule,
    ToastModule,
    SharedModule
  ]
})
export class ViewsModule { }

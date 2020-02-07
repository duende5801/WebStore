import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './views/pages/landing/landing.component';
import { ContactComponent } from './views/pages/contact/contact.component';
import { ShippingFormComponent } from './views/pages/shipping-form/shipping-form.component';
import { CreditFormComponent } from './views/pages/credit-form/credit-form.component';
import { SharedModule } from './shared/shared.module';
import { CompletePurchaseComponent } from './views/pages/complete-purchase/complete-purchase.component';
import { OrderCompleteComponent } from './views/pages/order-complete/order-complete.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LandingComponent,
    ContactComponent,
    ShippingFormComponent,
    CreditFormComponent,
    CompletePurchaseComponent,
    OrderCompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

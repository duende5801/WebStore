import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './views/pages/landing/landing.component';
import { ProductsComponent } from './views/pages/products/products.component';
import { CartComponent } from './views/pages/cart/cart.component';
import { LogInComponent } from './views/pages/log-in/log-in.component';
import { ContactComponent } from './views/pages/contact/contact.component';


const routes: Routes = [
  {path: 'home', component: LandingComponent },
  {path: 'products', component: ProductsComponent },
  {path: 'cart', component: CartComponent },
  {path: 'LogIn', component: LogInComponent },
  {path: 'contact', component: ContactComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

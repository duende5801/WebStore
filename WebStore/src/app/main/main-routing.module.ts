import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { ProductsComponent } from '../shared/components/products/products.component';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from '../shared/components/cart/cart.component';

const routes: Routes = [
  {
    path: '', // == /main
    component: MainComponent,
    children: [
      { path: 'products/:id', component: ProductsComponent},
      { path: 'cart', component: CartComponent} // main/cart
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MainRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './views/pages/landing/landing.component';
import { ContactComponent } from './views/pages/contact/contact.component';
import { AccountProfileComponent } from './shared/components/account-profile/account-profile.component';
import { CompletePurchaseComponent } from './views/pages/complete-purchase/complete-purchase.component';


const routes: Routes = [
  { path: 'home', component: LandingComponent },
  { path: 'profile', component: AccountProfileComponent },
  { path: 'main', loadChildren: './main/main.module#MainModule' },
  { path: 'contact', component: ContactComponent },
  { path: 'complete-purchase', component: CompletePurchaseComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FaqComponent } from './faq/faq.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { CheckOutComponent } from './all-products/check-out/check-out.component';
import { ProductDetailsViewComponent } from './all-products/product-details-view/product-details-view.component';

const routes: Routes = [
  { path:'', pathMatch:'full', component: HomeComponent},
  { path:'about-us', component: AboutUsComponent},
  { path:'login', component: LogInComponent},
  { path:'sign-up', component: SignUpComponent},
  { path:'reset-password', component: ResetPasswordComponent},
  { path:'faq', component: FaqComponent},
  { path:'contact', component: ContactComponent},
  { path:'all-products', component: AllProductsComponent},
  { path:'all-products/check-out', component: CheckOutComponent},
  { path:'product-details', component:ProductDetailsViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled'})],
   exports: [RouterModule]
})
export class AppRoutingModule { }

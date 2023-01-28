import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { DayOfferService } from './services/day-offer.service';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { QuickViewAddCartComponent } from './all-products/quick-view-add-cart/quick-view-add-cart.component';
import { CheckOutComponent } from './all-products/check-out/check-out.component';
import { ImageViewComponent } from './all-products/image-view/image-view.component';
import { ProductDetailsViewComponent } from './all-products/product-details-view/product-details-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    AboutUsComponent,
    LogInComponent,
    SignUpComponent,
    ResetPasswordComponent,
    FaqComponent,
    ContactComponent,
    AllProductsComponent,
    QuickViewAddCartComponent,
    CheckOutComponent,
    ImageViewComponent,
    ProductDetailsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [DayOfferService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { MoviedisplayComponent } from './moviedisplay/moviedisplay.component';
import { Rentalcartcomponent } from './rentalcart/rental-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    Rentalcartcomponent,
    MoviedisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

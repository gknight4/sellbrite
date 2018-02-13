import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ItemComponent } from './item/item.component';
// import { CartpageComponent } from './cartpage/cartpage.component';
import { CartComponent } from './cart/cart.component';
import { AppProduct } from './catalog/catalog.product.model';
// import { CartService } from './cart.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CatalogComponent,
    ItemComponent,
    // CartpageComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    // CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

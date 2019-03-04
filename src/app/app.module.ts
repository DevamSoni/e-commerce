import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { NavigationModule } from './navigation/navigation.module';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { ProductParentModule } from './product-parent/product-parent.module';
import { LoginModule } from './login/login.module';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { CartModule } from './cart/cart.module';
// import { EllipsisPipe } from './pipes/ellipsis.pipe';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    NavigationModule,
    ProductParentModule,
    LoginModule,
    RouterModule,
    CartModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

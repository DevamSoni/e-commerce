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
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";




  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDEFwS4MmlTW_QfXGMnkYs93O2oP0Lbe4I",
    authDomain: "angular-auth-firebase-d7e1e.firebaseapp.com",
    databaseURL: "https://angular-auth-firebase-d7e1e.firebaseio.com",
    projectId: "angular-auth-firebase-d7e1e",
    storageBucket: "angular-auth-firebase-d7e1e.appspot.com",
    messagingSenderId: "639806368995"
  };
  
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
    CartModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

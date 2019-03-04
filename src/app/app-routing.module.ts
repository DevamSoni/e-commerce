import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/compiler/src/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductParentComponent } from './product-parent/product-parent/product-parent.component';
import { LoginComponent } from './login/login/login.component';
import { CategoriesComponent } from './categories/categories/categories.component';
import { ProductsComponent } from './products/products/products.component';
import { AuthGuard } from './auth.guard';
import { CartComponent } from './cart/cart/cart.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: ProductParentComponent, canActivate:[AuthGuard]},
  {path:'cart', component:CartComponent}
  // { path:'login', component:LoginComponent},
  // { path: 'category', component: CategoriesComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

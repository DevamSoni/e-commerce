import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductParentComponent } from './product-parent/product-parent.component';
import { CategoriesModule } from '../categories/categories.module';
import { ProductsModule } from '../products/products.module';
import { ProductService } from '../services/product.service';

@NgModule({
  declarations: [ProductParentComponent],
  imports: [
    CommonModule,
    CategoriesModule,
    ProductsModule
  ],
  exports: [
    ProductParentComponent
  ],
  providers:[ProductService],
})
export class ProductParentModule { }

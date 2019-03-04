import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductsComponent } from "./products/products.component";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { EllipsisPipe } from '../pipes/ellipsis.pipe';
import { AppRoutingModule } from '../app-routing.module';
import { ProductService } from '../services/product.service';
@NgModule({
  declarations: [ProductsComponent, EllipsisPipe],
  imports: [CommonModule, ScrollingModule, AppRoutingModule],
  exports: [ProductsComponent],
  providers:[ProductService],
})
export class ProductsModule { }

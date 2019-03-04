import { Component, OnInit, Input } from '@angular/core';
import { Product } from './../../entity/product.entity';
import { ProductService } from './../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() productList;
  LikeButton(id) {
    const currentProduct = this.productList.find((item) => item.id === id)
    if (currentProduct.numberLike === 0) {
      currentProduct.numberLike++;
    }
    else {
      currentProduct.numberLike--;
    }
  }




  private products: Product[];


  constructor(private productService: ProductService) { }
  public count: number;
  sendNumber() {
    this.productService.sendNumber(this.increament);
  }


  increament():void{
    this.count += 1;
    console.log("done");
  }
  ngOnInit() {
    this.products = this.productService.findAll();
  }

}

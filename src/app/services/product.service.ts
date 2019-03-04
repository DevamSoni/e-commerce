import { Injectable } from '@angular/core';
import { Product } from '../entity/product.entity';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class ProductService {
  private products: Product[];
  constructor() {
    this.products = [
      { id: 'p01', name: 'Beardo', price: 100, photo:'../../assets/p1.gif'},
      { id: 'p02', name: 'Beardo', price: 200, photo:'https://www.roadgods.com/pub/media/catalog/product/cache/696c1cf6d42ac1dfca877ef53143b9a0/g/o/gods_ghost_anti-theft_laptop_backpack_daring_texture_.jpg' },
      { id: 'p03', name: 'Beardo', price: 300, photo: 'https://beardoc.s3.ap-south-1.amazonaws.com/uploads/x300-banner-2-1284.jpg' },
    ];
  }

  findAll(): Product[] {
    return this.products;
  }

  find(id: string): Product {
    return this.products[this.getSelectedIndex(id)];
  }

  private getSelectedIndex(id: string) {
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
        return i;
      }
    }
    return -1;
  }

  private subject = new Subject<any>();

  sendNumber(number:number){
    this.subject.next({text:number});
  }

  getNumber():Observable<any>{
    return this.subject.asObservable();
  }
}

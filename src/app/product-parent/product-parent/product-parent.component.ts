import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-parent',
  templateUrl: './product-parent.component.html',
  styleUrls: ['./product-parent.component.css']
})
export class ProductParentComponent implements OnInit {

  product=[
    {id: 1, category:"beauty", price:100, name:"Fair&lovely", numberLike: 0, img:"https://media.self.com/photos/5b6b43b256b2e2706f755867/4:3/w_728/exfoliation-products.gif"},
    {id: 2, category:"accesories", price:200, name:"Bag", numberLike: 0, img:"https://www.roadgods.com/pub/media/catalog/product/cache/696c1cf6d42ac1dfca877ef53143b9a0/g/o/gods_ghost_anti-theft_laptop_backpack_daring_texture_.jpg"},
    {id: 3, category:"beauty", price:999, name:"Beardo", numberLike: 0, img:"https://beardoc.s3.ap-south-1.amazonaws.com/uploads/x300-banner-2-1284.jpg"},
    {id: 4, category:"beauty", price:999, name:"Beardo", numberLike: 0, img:"https://beardoc.s3.ap-south-1.amazonaws.com/uploads/x300-banner-2-1284.jpg"},
    {id: 5, category:"beauty", price:999, name:"Beardo", numberLike: 0, img:"https://beardoc.s3.ap-south-1.amazonaws.com/uploads/x300-banner-2-1284.jpg"},
    {id: 6, category:"beauty", price:999, name:"Beardo", numberLike: 0, img:"https://beardoc.s3.ap-south-1.amazonaws.com/uploads/x300-banner-2-1284.jpg"},
    {id: 7, category:"beauty", price:999, name:"Beardo", numberLike: 0, img:"https://beardoc.s3.ap-south-1.amazonaws.com/uploads/x300-banner-2-1284.jpg"}
  ];
  productList=[];
  constructor() { }

  ngOnInit() {
    this.productList = this.product;
  }
  handleCategoryChange(selectedCategory) {
    this.filterBy(selectedCategory);
  }

  isBeauty(element, index, array) {
    return (element.category === "beauty");
  }
  isAccesories(element, index, array) {
    return (element.category === "accesories");
  }

  filterBy(filter: string) {
    switch (filter) {
      case 'Beauty':
        this.productList = this.product.filter(this.isBeauty);
        // console.log("beauty");
        break;
      case 'Accesories':
        this.productList = this.product.filter(this.isAccesories);
        // console.log("accessories");
        break;
      case 'All':
        this.productList = this.product;
        // console.log("all");
        break;
    }
  }

}

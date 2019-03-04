import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {
  // badgeCount = "6";
  number: any;
  subscription: Subscription;

  constructor(private productService: ProductService) {
    this.subscription = this.productService.getNumber().subscribe(number => { this.number = number });
  }

  ngOnInit() {
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}

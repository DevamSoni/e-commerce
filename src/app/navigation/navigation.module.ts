import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from '../app-routing.module';
import { AuthService } from '../auth.service';
import { AuthGuard } from '../auth.guard';
import {FormsModule} from '@angular/forms';
import { ProductService } from '../services/product.service';

@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  exports:[
    NavigationComponent
  ],
  providers:[AuthService, AuthGuard, ProductService]
})
export class NavigationModule { }


import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: any[] = [];
  newItem: any = {};

  constructor(private Service: UserService) { }

  ngOnInit(): void {
    this.fetchCartItems();
  }

  fetchCartItems() {
    this.Service.getAllItems().subscribe(
      (data: any[]) => {
        this.cartItems = data;
      },
     
    );
  }

  addToCart() {
    this.Service.addItem(this.newItem).subscribe(
      (data: any) => {
        console.log('Item added to cart:', data);
        this.fetchCartItems();
        this.newItem = {data}; 
      },
      
    );
  }
}

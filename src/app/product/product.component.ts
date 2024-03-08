import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products : any;

  constructor(){
    this.products = [{ id: 1001, name: 'ijazphone', description: '', price: 999999.99, imagePath: 'assets/images/ijazphone.jpeg' }, 
    

     { id: 1002, name: 'shirts', description: 'No cost EMI from ₹1,499/month.', price:999999.99, imagePath: 'assets/images/ijaz bike.webp' }, 

     { id: 1003, name: 'paints', description: 'No cost EMI from ₹1,499/month.', price: 999999.99, imagePath: 'assets/images/ijaz car.jpg' }, 

     { id: 1004, name: 'T-shirt', description: 'No cost EMI from ₹1,499/month.', price:999999.99, imagePath: 'assets/images/ijaz house.jpeg' }, 

     { id: 1005, name: 'ijazflight', description: 'No cost EMI from ₹1,499/month.', price:999999.99, imagePath: 'assets/images/ijazflight.jpeg' },
     { id: 1002, name: 'ijazbike', description: 'No cost EMI from ₹1,499/month.', price:999999.99, imagePath: 'assets/images/ijaz bike.webp' },
     { id: 1002, name: 'ijazbike', description: 'No cost EMI from ₹1,499/month.', price:999999.99, imagePath: 'assets/images/ijaz bike.webp' },
     { id: 1002, name: 'ijazbike', description: 'No cost EMI from ₹1,499/month.', price:999999.99, imagePath: 'assets/images/ijaz bike.webp' },
     { id: 1002, name: 'ijazbike', description: 'No cost EMI from ₹1,499/month.', price:999999.99, imagePath: 'assets/images/ijaz bike.webp' },];

  }
}

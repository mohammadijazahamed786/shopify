import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-t-shirt',
  templateUrl: './t-shirt.component.html',
  styleUrls: ['./t-shirt.component.css']
})
export class TShirtComponent {
  products: any[] = [
    {
      id: 1,
      name: 'T-Shirt 1',
      description: 'Hand Wash Only',
      image: 'assets/image/t-shirt men/t1.jpg',
    },
    {
      id: 2,
      name: 'T-Shirt 2',
      description: ' Hand Wash Only',
      image: 'assets/image/t-shirt men/t2.jpg',
    },
    {
      id: 3,
      name: 'T-Shirt 3',
      description: ' Hand Wash Only',
      image: 'assets/image/t-shirt men/t3.jpg',
    },
    {
      id: 4,
      name: 'T-Shirt 4',
      description: ' Hand Wash Only',
      image: 'assets/image/t-shirt men/t4.jpg',
    },
    {
      id: 5,
      name: 'T-Shirt 5',
      description: ' Hand Wash Only',
      image: 'assets/image/t-shirt men/t5.jpg',
    },
    {
      id: 6,
      name: 'T-Shirt 6',
      description: ' Hand Wash Only',
      image: 'assets/image/t-shirt men/t6.jpg',
    },
    {
      id: 7,
      name: 'T-Shirt 7',
      description: ' Hand Wash Only',
      image: 'assets/image/t-shirt men/t7.jpg',
    },
    {
      id: 8,
      name: 'T-Shirt 8',
      description: ' Hand Wash Only',
      image: 'assets/image/t-shirt men/t8.jpg',
    },
    {
      id: 9,
      name: 'T-Shirt 9',
      description: ' Hand Wash Only',
      image: 'assets/image/t-shirt men/t9.jpg',
    },
    {
      id: 10,
      name: 'T-Shirt 10',
      description: ' Hand Wash Only',
      image: 'assets/image/t-shirt men/t10.jpg',
    },
    {
      id: 11,
      name: 'T-Shirt 11',
      description: ' Hand Wash Only',
      image: 'assets/image/t-shirt men/t11.jpg',
    },
    {
      id: 12,
      name: 'T-Shirt 12',
      description: ' Hand Wash Only',
      image: 'assets/image/t-shirt men/t12.jpg',
    },
    {
      id: 13,
      name: 'T-Shirt 13',
      description: ' Hand Wash Only',
      image: 'assets/image/t-shirt men/t13.jpg',
    },
    {
      id: 14,
      name: 'T-Shirt 14',
      description: ' Hand Wash Only',
      image: 'assets/image/t-shirt men/t14.jpg',
    },
    {
      id: 15,
      name: 'T-Shirt 15',
      description: ' Hand Wash Only',
      image: 'assets/image/t-shirt men/t15.jpg',
    },
    {
      id: 16,
      name: 'T-Shirt 16',
      description: ' Hand Wash Only',
      image: 'assets/image/t-shirt men/t16.jpg',
    },
    {
      id: 17,
      name: 'T-Shirt 17',
      description: 'Hand Wash Only',
      image: 'assets/image/t-shirt men/t17.jpg',
    },
    {
      id: 18,
      name: 'T-Shirt 18',
      description: 'Hand Wash Only',
      image: 'assets/image/t-shirt men/t18.jpg',
    }
  ];

  constructor(private service: UserService) {}

  addToCart(product: any) {
    this.service.selectedProducts(product); 
  }

}

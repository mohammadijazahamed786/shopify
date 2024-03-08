import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-t-shirts',
  templateUrl: './t-shirts.component.html',
  styleUrls: ['./t-shirts.component.css']
})
export class TShirtsComponent {

  products: any[] = [
    {
      id: 1,
      name: 'T-Shirt 1',
      description: 'Description of T-Shirt 1.',
      image: 'assets/image/tshirts women/1 (1).jpg',
    },
    {
      id: 2,
      name: 'T-Shirt 2',
      description: 'Hand Wash Only',
      image: 'assets/image/tshirts women/2 (1).jpg',
    },
    {
      id: 3,
      name: 'T-Shirt 3',
      description: 'Hand Wash Only',
      image: 'assets/image/tshirts women/3 (1).jpg',
    },
    {
      id: 4,
      name: 'T-Shirt 4',
      description: 'Hand Wash Only',
      image: 'assets/image/tshirts women/4 (1).jpg',
    },
    {
      id: 5,
      name: 'T-Shirt 5',
      description: 'Hand Wash Only',
      image: 'assets/image/tshirts women/5 (1).jpg',
    },
    {
      id: 6,
      name: 'T-Shirt 6',
      description: 'Hand Wash Only',
      image: 'assets/image/tshirts women/6 (1).jpg',
    },
    {
      id: 7,
      name: 'T-Shirt 7',
      description: 'Hand Wash Only',
      image: 'assets/image/tshirts women/7 (1).jpg',
    },
    {
      id: 8,
      name: 'T-Shirt 8',
      description: 'Hand Wash Only',
      image: 'assets/image/tshirts women/8 (1).jpg',
    },
    {
      id: 9,
      name: 'T-Shirt 9',
      description: 'Hand Wash Only',
      image: 'assets/image/tshirts women/9 (1).jpg',
    },
    {
      id: 10,
      name: 'T-Shirt 10',
      description: 'Hand Wash Only',
      image: 'assets/image/tshirts women/10 (1).jpg',
    },
    {
      id: 11,
      name: 'T-Shirt 11',
      description: 'Hand Wash Only',
      image: 'assets/image/tshirts women/11 (1).jpg',
    },
    {
      id: 12,
      name: 'T-Shirt 12',
      description: 'Hand Wash Only',
      image: 'assets/image/tshirts women/12 (1).jpg',
    },
    {
      id: 13,
      name: 'T-Shirt 13',
      description: 'Hand Wash Only',
      image: 'assets/image/tshirts women/13 (1).jpg',
    },
    {
      id: 14,
      name: 'T-Shirt 14',
      description: 'Hand Wash Only',
      image: 'assets/image/tshirts women/14 (1).jpg',
    },
    {
      id: 15,
      name: 'T-Shirt 15',
      description: 'Hand Wash Only',
      image: 'assets/image/tshirts women/15 (1).jpg',
    },
    {
      id: 16,
      name: 'T-Shirt 16',
      description: 'Hand Wash Only',
      image: 'assets/image/tshirts women/16 (1).jpg',
    },
    {
      id: 17,
      name: 'T-Shirt 17',
      description: 'Hand Wash Only',
      image: 'assets/image/tshirts women/17 (1).jpg',
    },
    {
      id: 18,
      name: 'T-Shirt 18',
      description: 'Hand Wash Only',
      image: 'assets/image/tshirts women/18 (1).jpg',
    }
  ];
  
  constructor(private service: UserService) {}

  addToCart(product: any) {
    this.service.selectedProducts(product); 
  }

}

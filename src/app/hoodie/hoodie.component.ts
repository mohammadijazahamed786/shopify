import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-hoodie',
  templateUrl: './hoodie.component.html',
  styleUrls: ['./hoodie.component.css']
})
export class HoodieComponent {
  products: any[] = [
    {
      id: 1,
      name: 'Hoodie 1',
      description: 'Hand Wash Only',
      image: 'assets/image/hoodies men/1.jpeg',
    },
    {
      id: 2,
      name: 'Hoodie 2',
      description: 'Hand Wash Only',
      image: 'assets/image/hoodies men/2.jpeg',
    },
    {
      id: 3,
      name: 'Hoodie 3',
      description: 'Hand Wash Only',
      image: 'assets/image/hoodies men/3.jpeg',
    },
    {
      id: 4,
      name: 'Hoodie 4',
      description: 'Hand Wash Only',
      image: 'assets/image/hoodies men/4.jpeg',
    },
    {
      id: 5,
      name: 'Hoodie 5',
      description: 'Hand Wash Only',
      image: 'assets/image/hoodies men/5.jpeg',
    },
    {
      id: 6,
      name: 'Hoodie 6',
      description: 'Hand Wash Only',
      image: 'assets/image/hoodies men/6.jpeg',
    },
    {
      id: 7,
      name: 'Hoodie 7',
      description: 'Hand Wash Only',
      image: 'assets/image/hoodies men/7.jpeg',
    },
    {
      id: 8,
      name: 'Hoodie 8',
      description: 'Hand Wash Only',
      image: 'assets/image/hoodies men/8.jpeg',
    },
    {
      id: 9,
      name: 'Hoodie 9',
      description: 'Hand Wash Only',
      image: 'assets/image/hoodies men/9.jpeg',
    },
    {
      id: 10,
      name: 'Hoodie 10',
      description: 'Hand Wash Only',
      image: 'assets/image/hoodies men/10.jpeg',
    },
    {
      id: 11,
      name: 'Hoodie 11',
      description: 'Hand Wash Only',
      image: 'assets/image/hoodies men/11.jpeg',
    },
    {
      id: 12,
      name: 'Hoodie 12',
      description: 'Hand Wash Only',
      image: 'assets/image/hoodies men/12.jpeg',
    },
    {
      id: 13,
      name: 'Hoodie 13',
      description: 'Hand Wash Only',
      image: 'assets/image/hoodies men/13.jpeg',
    },
    {
      id: 14,
      name: 'Hoodie 14',
      description: 'Hand Wash Only',
      image: 'assets/image/hoodies men/14.jpeg',
    },
    {
      id: 15,
      name: 'Hoodie 15',
      description: 'Hand Wash Only',
      image: 'assets/image/hoodies men/15.jpeg',
    },
    {
      id: 16,
      name: 'Hoodie 16',
      description: 'Hand Wash Only',
      image: 'assets/image/hoodies men/16.jpeg',
    }, 
    {
      id: 17,
      name: 'Hoodie 17',
      description: 'Hand wash only',
      image: 'assets/image/hoodies men/17.jpeg',
    },
    {
      id: 18,
      name: 'Hoodie 18',
      description: 'Hand wash only',
      image: 'assets/image/hoodies men/18.jpeg',
    }
  ];

  constructor(private service: UserService) {}

  addToCart(product: any) {
    this.service.selectedProducts(product); 
  }
}

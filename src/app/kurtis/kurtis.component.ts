import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-kurtis',
  templateUrl: './kurtis.component.html',
  styleUrls: ['./kurtis.component.css']
})
export class KurtisComponent {
  products: any[] = [
    {
      id: 1,
      name: 'Kurti 1',
      description: 'Hand Wash Only',
      image: 'assets/image/kurtis women/1.jpg',
    },
    {
      id: 2,
      name: 'Kurti 2',
      description: 'Hand Wash Only',
      image: 'assets/image/kurtis women/2.jpg',
    },
    {
      id: 3,
      name: 'Kurti 3',
      description: 'Hand Wash Only',
      image: 'assets/image/kurtis women/3.jpg',
    },
    {
      id: 4,
      name: 'Kurti 4',
      description: 'Hand Wash Only',
      image: 'assets/image/kurtis women/4.jpg',
    },
    {
      id: 5,
      name: 'Kurti 5',
      description: 'Hand Wash Only',
      image: 'assets/image/kurtis women/5.jpg',
    },
    {
      id: 6,
      name: 'Kurti 6',
      description: 'Hand Wash Only',
      image: 'assets/image/kurtis women/6.jpg',
    },
    {
      id: 7,
      name: 'Kurti 7',
      description: 'Hand Wash Only',
      image: 'assets/image/kurtis women/7.jpg',
    },
    {
      id: 8,
      name: 'Kurti 8',
      description: 'Hand Wash Only',
      image: 'assets/image/kurtis women/8.jpg',
    },
    {
      id: 9,
      name: 'Kurti 9',
      description: 'Hand Wash Only',
      image: 'assets/image/kurtis women/9.jpg',
    },
    {
      id: 10,
      name: 'Kurti 10',
      description: 'Hand Wash Only',
      image: 'assets/image/kurtis women/10.jpg',
    },
    {
      id: 11,
      name: 'Kurti 11',
      description: 'Hand Wash Only',
      image: 'assets/image/kurtis women/11.jpg',
    },
    {
      id: 12,
      name: 'Kurti 12',
      description: 'Hand Wash Only',
      image: 'assets/image/kurtis women/12.jpg',
    },
    {
      id: 13,
      name: 'Kurti 13',
      description: 'Hand Wash Only',
      image: 'assets/image/kurtis women/13.jpg',
    },
    {
      id: 14,
      name: 'Kurti 14',
      description: 'Hand Wash Only',
      image: 'assets/image/kurtis women/14.jpg',
    },
    {
      id: 15,
      name: 'Kurti 15',
      description: 'Hand Wash Only',
      image: 'assets/image/kurtis women/15.jpg',
    },
    {
      id: 16,
      name: 'Kurti 16',
      description: 'Hand Wash Only',
      image: 'assets/image/kurtis women/16.jpg',
    },
    {
      id: 17,
      name: 'Kurti 17',
      description: 'Hand Wash Only',
      image: 'assets/image/kurtis women/17.jpg',
    },
    {
      id: 18,
      name: 'Kurti 18',
      description: 'Hand Wash Only',
      image: 'assets/image/kurtis women/18.jpg',
    }
  ];

  constructor(private service: UserService) {}

  addToCart(product: any) {
    this.service.selectedProducts(product); 
  }
}

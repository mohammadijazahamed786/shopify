import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent {
  products: any[] = [
    {
      id: 1,
      name: 'Top 1',
      description: 'Hand Wash Only',
      image: 'assets/image/tops girls/1.jpg',
    },
    {
      id: 2,
      name: 'Top 2',
      description: 'Hand Wash Only',
      image: 'assets/image/tops girls/2.jpg',
    },
    {
      id: 3,
      name: 'Top 3',
      description: 'Hand Wash Only',
      image: 'assets/image/tops girls/3.jpg',
    },
    {
      id: 4,
      name: 'Top 4',
      description: 'Hand Wash Only',
      image: 'assets/image/tops girls/4.jpg',
    },
    {
      id: 5,
      name: 'Top 5',
      description: 'Hand Wash Only',
      image: 'assets/image/tops girls/5.jpg',
    },
    {
      id: 6,
      name: 'Top 6',
      description: 'Hand Wash Only',
      image: 'assets/image/tops girls/6.jpg',
    },
    {
      id: 7,
      name: 'Top 7',
      description: 'Hand Wash Only',
      image: 'assets/image/tops girls/7.jpg',
    },
    {
      id: 8,
      name: 'Top 8',
      description: 'Hand Wash Only',
      image: 'assets/image/tops girls/8.jpg',
    },
    {
      id: 9,
      name: 'Top 9',
      description: 'Hand Wash Only',
      image: 'assets/image/tops girls/9.jpg',
    },
    {
      id: 10,
      name: 'Top 10',
      description: 'Hand Wash Only',
      image: 'assets/image/tops girls/10.jpg',
    },
    {
      id: 11,
      name: 'Top 11',
      description: 'Hand Wash Only',
      image: 'assets/image/tops girls/11.jpg',
    },
    {
      id: 12,
      name: 'Top 12',
      description: 'Hand Wash Only',
      image: 'assets/image/tops girls/12.jpg',
    },
    {
      id: 13,
      name: 'Top 13',
      description: 'Hand Wash Only',
      image: 'assets/image/tops girls/13.jpg',
    },
    {
      id: 14,
      name: 'Top 14',
      description: 'Hand Wash Only',
      image: 'assets/image/tops girls/14.jpg',
    },
    {
      id: 15,
      name: 'Top 15',
      description: 'Hand Wash Only',
      image: 'assets/image/tops girls/15.jpg',
    },
    {
      id: 16,
      name: 'Top 16',
      description: 'Hand Wash Only',
      image: 'assets/image/tops girls/16.jpg',
    },
    {
      id: 17,
      name: 'Top 17',
      description: 'Hand Wash Only',
      image: 'assets/image/tops girls/17.jpg',
    },
    {
      id: 18,
      name: 'Top 18',
      description: 'Hand Wash Only',
      image: 'assets/image/tops girls/18.jpeg',
    }
  ];

  constructor(private service: UserService) {}

  addToCart(product: any) {
    this.service.selectedProducts(product); 
  }

}

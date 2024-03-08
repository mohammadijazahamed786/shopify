import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-suit',
  templateUrl: './suit.component.html',
  styleUrls: ['./suit.component.css']
})
export class SuitComponent {
  products: any[] = [
    {
      id: 1,
      name: 'Suit 1',
      description: 'Hand wash only',
      image: 'assets/image/suits men/1.jpeg',
    },
    {
      id: 2,
      name: 'Suit 2',
      description: 'Hand wash only',
      image: 'assets/image/suits men/2.jpeg',
    },
    {
      id: 3,
      name: 'Suit 3',
      description: 'Hand wash only',
      image: 'assets/image/suits men/3.jpeg',
    },
    {
      id: 4,
      name: 'Suit 4',
      description: 'Hand wash only',
      image: 'assets/image/suits men/4.jpeg',
    },
    {
      id: 5,
      name: 'Suit 5',
      description: 'Hand wash only',
      image: 'assets/image/suits men/5.jpeg',
    },
    {
      id: 6,
      name: 'Suit 6',
      description: 'Hand wash only',
      image: 'assets/image/suits men/6.jpeg',
    },
    {
      id: 7,
      name: 'Suit 7',
      description: 'Hand wash only',
      image: 'assets/image/suits men/7.jpeg',
    },
    {
      id: 8,
      name: 'Suit 8',
      description: 'Hand wash only',
      image: 'assets/image/suits men/8.jpeg',
    },
    {
      id: 9,
      name: 'Suit 9',
      description: 'Hand wash only',
      image: 'assets/image/suits men/9.jpeg',
    },
    {
      id: 10,
      name: 'Suit 10',
      description: 'Hand wash only',
      image: 'assets/image/suits men/10.jpeg',
    },
    {
      id: 11,
      name: 'Suit 11',
      description: 'Hand wash only',
      image: 'assets/image/suits men/11.jpeg',
    },
    {
      id: 12,
      name: 'Suit 12',
      description: 'Hand wash only',
      image: 'assets/image/suits men/12.jpeg',
    },
    {
      id: 13,
      name: 'Suit 13',
      description: 'Hand wash only',
      image: 'assets/image/suits men/13.jpeg',
    },
    {
      id: 14,
      name: 'Suit 14',
      description: 'Hand wash only',
      image: 'assets/image/suits men/14.jpeg',
    },
    {
      id: 15,
      name: 'Suit 15',
      description: 'Hand wash only',
      image: 'assets/image/suits men/15.jpeg',
    },
    {
      id: 16,
      name: 'Suit 16',
      description: 'Hand wash only',
      image: 'assets/image/suits men/16.jpeg',
    },
    {
      id: 17,
      name: 'Suit 17',
      description: 'Hand wash only',
      image: 'assets/image/suits men/17.jpeg',
    },
    {
      id: 18,
      name: 'Suit 18',
      description: 'Hand wash only',
      image: 'assets/image/suits men/18.jpeg',
    }
  ];

  constructor(private service: UserService) {}

  addToCart(product: any) {
    this.service.selectedProducts(product); 
  }
}

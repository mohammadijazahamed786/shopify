import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-suits',
  templateUrl: './suits.component.html',
  styleUrls: ['./suits.component.css']
})
export class SuitsComponent {
  products: any[] = [
    {
      id: 1,
      name: 'Suit 1',
      description: 'Hand wash only',
      image: 'assets/image/suit boy/suit1.jpg',
    },
    {
      id: 2,
      name: 'Suit 2',
      description: 'Hand wash only',
      image: 'assets/image/suit boy/suit2.jpg',
    },
    {
      id: 3,
      name: 'Suit 3',
      description: 'Hand wash only',
      image: 'assets/image/suit boy/suit3.jpg',
    },
    {
      id: 4,
      name: 'Suit 4',
      description: 'Hand wash only',
      image: 'assets/image/suit boy/suit4.webp',
    },
    {
      id: 5,
      name: 'Suit 5',
      description: 'Hand wash only',
      image: 'assets/image/suit boy/suit5.jpg',
    },
    {
      id: 6,
      name: 'Suit 6',
      description: 'Hand wash only',
      image: 'assets/image/suit boy/suit6.jpg',
    },
    {
      id: 7,
      name: 'Suit 7',
      description: 'Hand wash only',
      image: 'assets/image/suit boy/suit7.jpg',
    },
    {
      id: 8,
      name: 'Suit 8',
      description: 'Hand wash only',
      image: 'assets/image/suit boy/suit8.jpg',
    },
    {
      id: 9,
      name: 'Suit 9',
      description: 'Hand wash only',
      image: 'assets/image/suit boy/suit9.jpg',
    },
    {
      id: 10,
      name: 'Suit 10',
      description: 'Hand wash only',
      image: 'assets/image/suit boy/suit10.jpg',
    },
    {
      id: 11,
      name: 'Suit 11',
      description: 'Hand wash only',
      image: 'assets/image/suit boy/suit11.jpg',
    },
    {
      id: 12,
      name: 'Suit 12',
      description: 'Hand wash only',
      image: 'assets/image/suit boy/suit1.jpg',
    },
    {
      id: 13,
      name: 'Suit 13',
      description: 'Hand wash only',
      image: 'assets/image/suit boy/suit12.jpg',
    },
    {
      id: 14,
      name: 'Suit 14',
      description: 'Hand wash only',
      image: 'assets/image/suit boy/suit14.jpg',
    },
    {
      id: 15,
      name: 'Suit 15',
      description: 'Hand wash only',
      image: 'assets/image/suit boy/suit15.jpg',
    },
    {
      id: 16,
      name: 'Suit 16',
      description: 'Hand wash only',
      image: 'assets/image/suit boy/suit16.jpg',
    },
    {
      id: 17,
      name: 'Suit 17',
      description: 'Hand wash only',
      image: 'assets/image/suit boy/suit17.jpg',
    },
    {
      id: 18,
      name: 'Suit 18',
      description: 'Hand wash only',
      image: 'assets/image/suit boy/suit18.jpg',
    }
  ];

  constructor(private service: UserService) {}

  addToCart(product: any) {
    this.service.selectedProducts(product); 
  }

}

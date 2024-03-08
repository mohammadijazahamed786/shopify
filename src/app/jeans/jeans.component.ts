import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-jeans',
  templateUrl: './jeans.component.html',
  styleUrls: ['./jeans.component.css']
})
export class JeansComponent {
  products: any[] = [
    {
      id: 1,
      name: 'Jeans 1',
      description: 'Hand wash only',
      image: 'assets/image/jeans women/10073.webp',
    },
    {
      id: 2,
      name: 'Jeans 2',
      description: 'Hand wash only',
      image: 'assets/image/jeans women/10075.webp',
    },
    {
      id: 3,
      name: 'Jeans 3',
      description: 'Hand wash only',
      image: 'assets/image/jeans women/10078.webp',
    },
    {
      id: 4,
      name: 'Jeans 4',
      description: 'Hand wash only',
      image: 'assets/image/jeans women/10079.webp',
    },
    {
      id: 5,
      name: 'Jeans 5',
      description: 'Hand wash only',
      image: 'assets/image/jeans women/10080.webp',
    },
    {
      id: 6,
      name: 'Jeans 6',
      description: 'Hand wash only',
      image: 'assets/image/jeans women/10081.webp',
    },
    {
      id: 7,
      name: 'Jeans 7',
      description: 'Hand wash only',
      image: 'assets/image/jeans women/10082.webp',
    },
    {
      id: 8,
      name: 'Jeans 8',
      description: 'Hand wash only',
      image: 'assets/image/jeans women/10083.webp',
    },
    {
      id: 9,
      name: 'Jeans 9',
      description: 'Hand wash only',
      image: 'assets/image/jeans women/10084.jpg',
    },
    {
      id: 10,
      name: 'Jeans 10',
      description: 'Hand wash only',
      image: 'assets/image/jeans women/10085.webp',
    },
    {
      id: 11,
      name: 'Jeans 11',
      description: 'Hand wash only',
      image: 'assets/image/jeans women/10086.jpg',
    },
    {
      id: 12,
      name: 'Jeans 12',
      description: 'Hand wash only',
      image: 'assets/image/jeans women/10087.webp',
    },
    {
      id: 13,
      name: 'Jeans 13',
      description: 'Hand wash only',
      image: 'assets/image/jeans women/10088.webp',
    },
    {
      id: 14,
      name: 'Jeans 14',
      description: 'Hand wash only',
      image: 'assets/image/jeans women/10089.webp',
    },
    {
      id: 15,
      name: 'Jeans 15',
      description: 'Hand wash only',
      image: 'assets/image/jeans women/10090.webp',
    },
    {
      id: 16,
      name: 'Jeans 16',
      description: 'Hand wash only',
      image: 'assets/image/jeans women/10091.webp',
    },
    {
      id: 17,
      name: 'Jeans 17',
      description: 'Hand wash only',
      image: 'assets/image/jeans women/10099.jpg',
    },
    {
      id: 18,
      name: 'Jeans 118',
      description: 'Hand wash only ',
      image: 'assets/image/jeans women/10101.webp',
    }
  ];

  constructor(private service: UserService) {}

  addToCart(product: any) {
    this.service.selectedProducts(product); 
  }
}

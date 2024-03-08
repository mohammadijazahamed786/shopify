import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-tops',
  templateUrl: './tops.component.html',
  styleUrls: ['./tops.component.css']
})
export class TopsComponent {
  products: any[] = [
    {
      id: 1,
      name: 'Top 1',
      description: 'Hand Wash Only',
      image: 'assets/image/tops women/1 (2).jpg',
    },
    {
      id: 2,
      name: 'Top 2',
      description: 'Hand Wash Only',
      image: 'assets/image/tops women/1 (2).jpg',
    },
    {
      id: 3,
      name: 'Top 3',
      description: 'Hand Wash Only',
      image: 'assets/image/tops women/3 (2).jpg',
    },
    {
      id: 4,
      name: 'Top 4',
      description: 'Hand Wash Only',
      image: 'assets/image/tops women/4 (2).jpg',
    },
    {
      id: 5,
      name: 'Top 5',
      description: 'Hand Wash Only',
      image: 'assets/image/tops women/5 (2).jpg',
    },
    {
      id: 6,
      name: 'Top 6',
      description: 'Hand Wash Only',
      image: 'assets/image/tops women/6 (2).jpg',
    },
    {
      id: 7,
      name: 'Top 7',
      description: 'Hand Wash Only',
      image: 'assets/image/tops women/7 (2).jpg',
    },
    {
      id: 8,
      name: 'Top 8',
      description: 'Hand Wash Only',
      image: 'assets/image/tops women/8 (2).jpg',
    },
    {
      id: 9,
      name: 'Top 9',
      description: 'Hand Wash Only',
      image: 'assets/image/tops women/9 (2).jpg',
    },
    {
      id: 10,
      name: 'Top 10',
      description: 'Hand Wash Only',
      image: 'assets/image/tops women/10 (2).jpg',
    },
    {
      id: 11,
      name: 'Top 11',
      description: 'Hand Wash Only',
      image: 'assets/image/tops women/11 (2).jpg',
    },
    {
      id: 12,
      name: 'Top 12',
      description: 'Hand Wash Only',
      image: 'assets/image/tops women/12 (2).jpg',
    },
    {
      id: 13,
      name: 'Top 13',
      description: 'Hand Wash Only',
      image: 'assets/image/tops women/13 (2).jpg',
    },
    {
      id: 14,
      name: 'Top 14',
      description: 'Hand Wash Only',
      image: 'assets/image/tops women/14 (2).jpg',
    },
    {
      id: 15,
      name: 'Top 15',
      description: 'Hand Wash Only',
      image: 'assets/image/tops women/15 (2).jpg',
    },
    {
      id: 16,
      name: 'Top 16',
      description: 'Hand Wash Only',
      image: 'assets/image/tops women/16 (2).jpg',
    },
    {
      id: 17,
      name: 'Top 17',
      description: 'Hand Wash Only',
      image: 'assets/image/tops women/17 (2).jpg',
    },
    {
      id: 18,
      name: 'Top 18',
      description: 'Hand Wash Only',
      image: 'assets/image/tops women/18 (2).jpg',
    }
  ];

  constructor(private service: UserService) {}

  addToCart(product: any) {
    this.service.selectedProducts(product); 
  }
}

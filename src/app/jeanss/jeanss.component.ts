import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-jeanss',
  templateUrl: './jeanss.component.html',
  styleUrls: ['./jeanss.component.css']
})
export class JeanssComponent {
  products: any[] = [
    {
      id: 1,
      name: 'Jeans 1',
      description: 'Hand wash only',
      image: 'assets/image/jeans girl/1.jpg',
    },
    {
      id: 2,
      name: 'Jeans 2',
      description: 'Hand wash only',
      image: 'assets/image/jeans girl/2.jpg',
    },
    {
      id: 3,
      name: 'Jeans 3',
      description: 'Hand wash only',
      image: 'assets/image/jeans girl/3.jpg',
    },
    {
      id: 4,
      name: 'Jeans 4',
      description: 'Hand wash only',
      image: 'assets/image/jeans girl/4.jpg',
    },
    {
      id: 5,
      name: 'Jeans 5',
      description: 'Hand wash only',
      image: 'assets/image/jeans girl/5.jpg',
    },
    {
      id: 6,
      name: 'Jeans 6',
      description: 'Hand wash only',
      image: 'assets/image/jeans girl/6.jpg',
    },
    {
      id: 7,
      name: 'Jeans 7',
      description: 'Hand wash only',
      image: 'assets/image/jeans girl/7.jpg',
    },
    {
      id: 8,
      name: 'Jeans 8',
      description: 'Hand wash only',
      image: 'assets/image/jeans girl/8.jpg',
    },
    {
      id: 9,
      name: 'Jeans 9',
      description: 'Hand wash only',
      image: 'assets/image/jeans girl/9.jpg',
    },
    {
      id: 10,
      name: 'Jeans 10',
      description: 'Hand wash only',
      image: 'assets/image/jeans girl/10.jpg',
    },
    {
      id: 11,
      name: 'Jeans 11',
      description: 'Hand wash only',
      image: 'assets/image/jeans girl/11.jpg',
    },
    {
      id: 12,
      name: 'Jeans 12',
      description: 'Hand wash only',
      image: 'assets/image/jeans girl/12.jpg',
    },
    {
      id: 13,
      name: 'Jeans 13',
      description: 'Hand wash only',
      image: 'assets/image/jeans girl/13.jpg',
    },
    {
      id: 14,
      name: 'Jeans 14',
      description: 'Hand wash only',
      image: 'assets/image/jeans girl/14.jpg',
    },
    {
      id: 15,
      name: 'Jeans 15',
      description: 'Hand wash only',
      image: 'assets/image/jeans girl/15.jpg',
    },
    {
      id: 16,
      name: 'Jeans 16',
      description: 'Hand wash only',
      image: 'assets/image/jeans girl/16.jpg',
    },
    {
      id: 17,
      name: 'Jeans 17',
      description: 'Hand wash only',
      image: 'assets/image/jeans girl/17.jpg',
    },
    {
      id: 18,
      name: 'Jeans 118',
      description: 'Hand wash only ',
      image: 'assets/image/jeans girl/18.jpg',
    }
  ];

  constructor(private service: UserService) {}

  addToCart(product: any) {
    this.service.selectedProducts(product); 
  }

}

import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-shirt',
  templateUrl: './shirt.component.html',
  styleUrls: ['./shirt.component.css']
})
export class ShirtComponent {
  products: any[] = [
    {
      id: 1,
      name: 'Shirt 1',
      description: 'Hand wash only ',
      image: 'assets/image/men shirt/1.jpeg',
    },
    {
      id: 2,
      name: 'Shirt 2',
      description: 'Hand wash only ',
      image: 'assets/image/men shirt/b8y9l_512.jpg',
    },
    {
      id: 3,
      name: 'Shirt 3',
      description: 'Hand wash only ',
      image: 'assets/image/men shirt/3.jpeg',
    },
    {
      id: 4,
      name: 'Shirt 4',
      description: 'Hand wash only ',
      image: 'assets/image/men shirt/4.jpeg',
    },
    {
      id: 5,
      name: 'Shirt 5',
      description: 'Hand wash only ',
      image: 'assets/image/men shirt/5.jpeg',
    },
    {
      id: 6,
      name: 'Shirt 6',
      description: 'Hand wash only ',
      image: 'assets/image/men shirt/6.jpeg',
    },
    {
      id: 7,
      name: 'Shirt 7',
      description: 'Hand wash only ',
      image: 'assets/image/men shirt/7.jpeg',
    },
    {
      id: 8,
      name: 'Shirt 8',
      description: 'Hand wash only ',
      image: 'assets/image/men shirt/8.jpeg',
    },
    {
      id: 9,
      name: 'Shirt 9',
      description: 'Hand wash only ',
      image: 'assets/image/men shirt/9.jpeg',
    },
    {
      id: 10,
      name: 'Shirt 10',
      description: 'Hand wash only ',
      image: 'assets/image/men shirt/10.jpeg',
    },
    {
      id: 11,
      name: 'Shirt 11',
      description: 'Hand wash only ',
      image: 'assets/image/men shirt/11.jpeg',
    },
    {
      id: 12,
      name: 'Shirt 12',
      description: 'Hand wash only ',
      image: 'assets/image/men shirt/12.jpeg',
    },
    {
      id: 13,
      name: 'Shirt 13',
      description: 'Hand wash only ',
      image: 'assets/image/men shirt/13.jpeg',
    },
    {
      id: 14,
      name: 'Shirt 14',
      description: 'Hand wash only ',
      image: 'assets/image/men shirt/14.jpeg',
    },
    {
      id: 15,
      name: 'Shirt 15',
      description: 'Hand wash only ',
      image: 'assets/image/men shirt/15.jpeg',
    },
    {
      id: 16,
      name: 'Shirt 16',
      description: 'Hand wash only ',
      image: 'assets/image/men shirt/16.jpeg',
    },
    {
      id: 17,
      name: 'Shirt 17',
      description: 'Hand wash only',
      image: 'assets/image/men shirt/17.jpeg',
    },
    {
      id: 18,
      name: 'Shirt 18',
      description: 'Hand wash only',
      image: 'assets/image/men shirt/18.jpeg',
    }
  ];

  constructor(private service: UserService) {}

  addToCart(product: any) {
    this.service.selectedProducts(product); 
  }
}

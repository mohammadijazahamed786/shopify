import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sareess',
  templateUrl: './sareess.component.html',
  styleUrls: ['./sareess.component.css']
})
export class SareessComponent {
  products: any[] = [
    {
      id: 1,
      name: 'Saree 1',
      description: 'Hand Wash Only',
      image: 'assets/image/sarees girls/1.jpg',
    },
    {
      id: 2,
      name: 'Saree 2',
      description: 'Hand Wash Only',
      image: 'assets/image/sarees girls/2.jpg',
    },
    {
      id: 3,
      name: 'Saree 3',
      description: 'Hand Wash Only',
      image: 'assets/image/sarees girls/3.jpg',
    },
    {
      id: 4,
      name: 'Saree 4',
      description: 'Hand Wash Only',
      image: 'assets/image/sarees girls/4.jpg',
    },
    {
      id: 5,
      name: 'Saree 5',
      description: 'Hand Wash Only',
      image: 'assets/image/sarees girls/5.jpg',
    },
    {
      id: 6,
      name: 'Saree 6',
      description: 'Hand Wash Only',
      image: 'assets/image/sarees girls/6.jpg',
    },
    {
      id: 7,
      name: 'Saree 7',
      description: 'Hand Wash Only',
      image: 'assets/image/sarees girls/7.jpg',
    },
    {
      id: 8,
      name: 'Saree 8',
      description: 'Hand Wash Only',
      image: 'assets/image/sarees girls/8.jpg',
    },
    {
      id: 9,
      name: 'Saree 9',
      description: 'Hand Wash Only',
      image: 'assets/image/sarees girls/9.jpg',
    },
    {
      id: 10,
      name: 'Saree 10',
      description: 'Hand Wash Only',
      image: 'assets/image/sarees girls/10.jpg',
    },
    {
      id: 11,
      name: 'Saree 11',
      description: 'Hand Wash Only',
      image: 'assets/image/sarees girls/11.jpg',
    },
    {
      id: 12,
      name: 'Saree 12',
      description: 'Hand Wash Only',
      image: 'assets/image/sarees girls/12.jpg',
    },
    {
      id: 13,
      name: 'Saree 13',
      description: 'Hand Wash Only',
      image: 'assets/image/sarees girls/13.jpg',
    },
    {
      id: 14,
      name: 'Saree 14',
      description: 'Hand Wash Only',
      image: 'assets/image/sarees girls/14.jpg',
    },
    {
      id: 15,
      name: 'Saree 15',
      description: 'Hand Wash Only',
      image: 'assets/image/sarees girls/15.jpg',
    },
    {
      id: 16,
      name: 'Saree 16',
      description: 'Hand Wash Only',
      image: 'assets/image/sarees girls/16.jpg',
    },
    {
      id: 17,
      name: 'Saree 17',
      description: 'Hand Wash Only',
      image: 'assets/image/sarees girls/17.jpg',
    },
    {
      id: 18,
      name: 'Saree 18',
      description: 'Hand Wash Only',
      image: 'assets/image/sarees girls/18.jpeg',
    }
  ];

  constructor(private service: UserService) {}

  addToCart(product: any) {
    this.service.selectedProducts(product); 
  }

}

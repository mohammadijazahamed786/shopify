import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sarees',
  templateUrl: './sarees.component.html',
  styleUrls: ['./sarees.component.css']
})
export class SareesComponent {
  products: any[] = [
    {
      id: 1,
      name: 'Saree 1',
      description: 'Hand Wash Only',
      image: 'assets/image/sarees women/11.jpeg',
    },
    {
      id: 2,
      name: 'Saree 2',
      description: 'Hand Wash Only',
      image: 'assets/image/sarees women/2.jpeg',
    },
    {
      id: 3,
      name: 'Saree 3',
      description: 'Hand Wash Only',
      image: 'assets/image/sarees women/3.jpeg',
    },
    {
      id: 4,
      name: 'Saree 4',
      description: 'Hand Wash Only',
      image: 'assets/image/sarees women/4.jpeg',
    },
    {
      id: 5,
      name: 'Saree 5',
      description: 'Hand Wash Only',
      image: 'assets/image/sarees women/5.jpeg',
    },
    {
      id: 6,
      name: 'Saree 6',
      description: 'Hand Wash Only',
      image: 'assets/image/sarees women/6.jpeg',
    },
    {
      id: 7,
      name: 'Saree 7',
      description: 'Hand Wash Only',
      image: 'assets/image/sarees women/7.jpeg',
    },
    {
      id: 8,
      name: 'Saree 8',
      description: 'Hand Wash Only',
      image: 'assets/image/sarees women/8.jpeg',
    },
    {
      id: 9,
      name: 'Saree 9',
      description: 'Hand Wash Only',
      image: 'assets/image/sarees women/9.jpeg',
    },
    {
      id: 10,
      name: 'Saree 10',
      description: 'Hand Wash Only',
      image: 'assets/image/sarees women/10.jpeg',
    },
    {
      id: 11,
      name: 'Saree 11',
      description: 'Hand Wash Only',
      image: 'assets/image/sarees women/11.jpeg',
    },
    {
      id: 12,
      name: 'Saree 12',
      description: 'Hand Wash Only',
      image: 'assets/image/sarees women/12.jpeg',
    },
    {
      id: 13,
      name: 'Saree 13',
      description: 'Hand Wash Only',
      image: 'assets/image/sarees women/13.jpg',
    },
    {
      id: 14,
      name: 'Saree 14',
      description: 'Hand Wash Only',
      image: 'assets/image/sarees women/14.jpeg',
    },
    {
      id: 15,
      name: 'Saree 15',
      description: 'Hand Wash Only',
      image: 'assets/image/sarees women/15.jpeg',
    },
    {
      id: 16,
      name: 'Saree 16',
      description: 'Hand Wash Only',
      image: 'assets/image/sarees women/16.jpeg',
    },
    {
      id: 17,
      name: 'Saree 17',
      description: 'Hand Wash Only',
      image: 'assets/image/sarees women/17.webp',
    },
    {
      id: 18,
      name: 'Saree 18',
      description: 'Hand Wash Only',
      image: 'assets/image/sarees women/2.jpeg',
    }
  ];

  constructor(private service: UserService) {}

  addToCart(product: any) {
    this.service.selectedProducts(product); 
  }
}

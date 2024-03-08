import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-shirts',
  templateUrl: './shirts.component.html',
  styleUrls: ['./shirts.component.css']
})
export class ShirtsComponent {

  products: any[] = [
    {
      id: 1,
      name: 'Shirt 1',
      description: 'Hand Wash Only',
      image: 'assets/image/shirts boys/1.jpeg',
    },
    {
      id: 2,
      name: 'Shirt 2',
      description: ' Hand Wash Only',
      image: 'assets/image/shirts boys/2.jpeg',
    },
    {
      id: 3,
      name: 'Shirt 3',
      description: ' Hand Wash Only',
      image: 'assets/image/shirts boys/3.jpeg',
    },
    {
      id: 4,
      name: 'Shirt 4',
      description: ' Hand Wash Only',
      image: 'assets/image/shirts boys/4.jpeg',
    },
    {
      id: 5,
      name: 'Shirt 5',
      description: ' Hand Wash Only',
      image: 'assets/image/shirts boys/5.jpeg',
    },
    {
      id: 6,
      name: 'Shirt 6',
      description: ' Hand Wash Only',
      image: 'assets/image/shirts boys/6.jpeg',
    },
    {
      id: 7,
      name: 'Shirt 7',
      description: ' Hand Wash Only',
      image: 'assets/image/shirts boys/7.jpeg',
    },
    {
      id: 8,
      name: 'Shirt 8',
      description: ' Hand Wash Only',
      image: 'assets/image/shirts boys/8.jpeg',
    },
    {
      id: 9,
      name: 'Shirt 9',
      description: ' Hand Wash Only',
      image: 'assets/image/shirts boys/9.jpeg',
    },
    {
      id: 10,
      name: 'Shirt 10',
      description: ' Hand Wash Only',
      image: 'assets/image/shirts boys/10.jpeg',
    },
    {
      id: 11,
      name: 'Shirt 11',
      description: ' Hand Wash Only',
      image: 'assets/image/shirts boys/11.jpeg',
    },
    {
      id: 12,
      name: 'Shirt 12',
      description: ' Hand Wash Only',
      image: 'assets/image/shirts boys/12.jpeg',
    },
    {
      id: 13,
      name: 'Shirt 13',
      description: ' Hand Wash Only',
      image: 'assets/image/shirts boys/13.jpeg',
    },
    {
      id: 14,
      name: 'Shirt 14',
      description: ' Hand Wash Only',
      image: 'assets/image/shirts boys/14.jpeg',
    },
    {
      id: 15,
      name: 'Shirt 15',
      description: ' Hand Wash Only',
      image: 'assets/image/shirts boys/15.jpeg',
    },
    {
      id: 16,
      name: 'Shirt 16',
      description: ' Hand Wash Only',
      image: 'assets/image/shirts boys/16.jpeg',
    },
    {
      id: 17,
      name: 'Shirt 17',
      description: 'Hand Wash Only',
      image: 'assets/image/shirts boys/17.jpeg',
    },
    {
      id: 18,
      name: 'Shirt 18',
      description: 'Hand Wash Only',
      image: 'assets/image/shirts boys/18.jpeg',
    }
  ];


  constructor(private service: UserService) {}

  addToCart(product: any) {
    this.service.selectedProducts(product); 
  }
}

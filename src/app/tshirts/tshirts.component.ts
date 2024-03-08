import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-tshirts',
  templateUrl: './tshirts.component.html',
  styleUrls: ['./tshirts.component.css']
})
export class TshirtsComponent {

 
  products: any[] = [
    {
      id: 1,
      name: 'T-Shirt 1',
      description: 'Hand Wash Only',
      image: 'assets/image/tshits boys/1.jpeg',
    },
    {
      id: 2,
      name: 'T-Shirt 2',
      description: ' Hand Wash Only',
      image: 'assets/image/tshits boys/2.jpeg' ,
    },
    {
      id: 3,
      name: 'T-Shirt 3',
      description: ' Hand Wash Only',
      image: 'assets/image/tshits boys/3.jpeg',
    },
    {
      id: 4,
      name: 'T-Shirt 4',
      description: ' Hand Wash Only',
      image: 'assets/image/tshits boys/4.jpeg',
    },
    {
      id: 5,
      name: 'T-Shirt 5',
      description: ' Hand Wash Only',
      image: 'assets/image/tshits boys/5.jpeg',
    },
    {
      id: 6,
      name: 'T-Shirt 6',
      description: ' Hand Wash Only',
      image: 'assets/image/tshits boys/6.jpeg',
    },
    {
      id: 7,
      name: 'T-Shirt 7',
      description: ' Hand Wash Only',
      image: 'assets/image/tshits boys/7.jpeg',
    },
    {
      id: 8,
      name: 'T-Shirt 8',
      description: ' Hand Wash Only',
      image: 'assets/image/tshits boys/8.jpeg',
    },
    {
      id: 9,
      name: 'T-Shirt 9',
      description: ' Hand Wash Only',
      image: 'assets/image/tshits boys/9.jpeg',
    },
    {
      id: 10,
      name: 'T-Shirt 10',
      description: ' Hand Wash Only',
      image: 'assets/image/tshits boys/10.jpeg',
    },
    {
      id: 11,
      name: 'T-Shirt 11',
      description: ' Hand Wash Only',
      image: 'assets/image/tshits boys/11.jpeg',
    },
    {
      id: 12,
      name: 'T-Shirt 12',
      description: ' Hand Wash Only',
      image: 'assets/image/tshits boys/12.jpeg',
    },
    {
      id: 13,
      name: 'T-Shirt 13',
      description: ' Hand Wash Only',
      image: 'assets/image/tshits boys/13.jpeg',
    },
    {
      id: 14,
      name: 'T-Shirt 14',
      description: ' Hand Wash Only',
      image: 'assets/image/tshits boys/14.jpeg',
    },
    {
      id: 15,
      name: 'T-Shirt 15',
      description: ' Hand Wash Only',
      image: 'assets/image/tshits boys/15.jpeg',
    },
    {
      id: 16,
      name: 'T-Shirt 16',
      description: ' Hand Wash Only',
      image: 'assets/image/tshits boys/16.jpeg',
    },
    {
      id: 17,
      name: 'T-Shirt 17',
      description: 'Hand Wash Only',
      image: 'assets/image/tshits boys/17.jpeg',
    },
    {
      id: 18,
      name: 'T-Shirt 18',
      description: 'Hand Wash Only',
      image: 'assets/image/tshits boys/18.jpeg',
    }
  ];
  constructor(private service: UserService) {}

  addToCart(product: any) {
    this.service.selectedProducts(product); 
  }
}

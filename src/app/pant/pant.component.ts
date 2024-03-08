import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-pant',
  templateUrl: './pant.component.html',
  styleUrls: ['./pant.component.css']
})
export class PantComponent {

  products: any[] = [
    {
      id: 1,
      name: 'Pants 1',
      description: 'Hand Wash Only',
      image: 'assets/image/pant boys/pant1.jpg',
    },
    {
      id: 2,
      name: 'Pants 2',
      description: 'Hand Wash Only',
      image: 'assets/image/pant boys/pant3.jpg',
    },
    {
      id: 3,
      name: 'Pants 3',
      description: 'Hand Wash Only',
      image: 'assets/image/pant boys/pant4.jpg',
    },
    {
      id: 4,
      name: 'Pants 4',
      description: 'Hand Wash Only',
      image: 'assets/image/pant boys/pant5.jpg',
    },
    {
      id: 5,
      name: 'Pants 5',
      description: 'Hand Wash Only',
      image: 'assets/image/pant boys/pant6.jpg',
    },
    {
      id: 6,
      name: 'Pants 6',
      description: 'Hand Wash Only',
      image: 'assets/image/pant boys/pant7.jpg',
    },
    {
      id: 7,
      name: 'Pants 7',
      description: 'Hand Wash Only',
      image: 'assets/image/pant boys/pant8.jpg',
    },
    {
      id: 8,
      name: 'Pants 8',
      description: 'Hand Wash Only',
      image: 'assets/image/pant boys/pant9.jpg',
    },
    {
      id: 9,
      name: 'Pants 9',
      description: 'Hand Wash Only',
      image: 'assets/image/pant boys/pant10.jpg',
    },
    {
      id: 10,
      name: 'Pants 10',
      description: 'Hand Wash Only',
      image: 'assets/image/pant boys/pant11.jpg',
    },
    {
      id: 11,
      name: 'Pants 11',
      description: 'Hand Wash Only',
      image: 'assets/image/pant boys/pant12.jpg',
    },
    {
      id: 12,
      name: 'Pants 12',
      description: 'Hand Wash Only',
      image: 'assets/image/pant boys/pant13.jpg',
    },
    {
      id: 13,
      name: 'Pants 13',
      description: 'Hand Wash Only',
      image: 'assets/image/pant boys/pant14.jpg',
    },
    {
      id: 14,
      name: 'Pants 14',
      description: 'Hand Wash Only',
      image: 'assets/image/pant boys/pant15.jpg',
    },
    {
      id: 15,
      name: 'Pants 15',
      description: 'Hand Wash Only',
      image: 'src/assets/image/pant boys/pant20.jpg',
    },
    {
      id: 16,
      name: 'Pants 16',
      description: 'Hand Wash Only',
      image: 'assets/image/pant boys/pant17.jpg',
    },
    {
      id: 17,
      name: 'Pants 17',
      description: 'Hand Wash Only',
      image: 'assets/image/pant boys/pant18.jpg',
    },
    {
      id: 18,
      name: 'Pants 18',
      description: 'Hand Wash Only',
      image: 'assets/image/pant boys/pant19.jpg',
    }
  ];

  constructor(private service: UserService) {}

  addToCart(product: any) {
    this.service.selectedProducts(product); 
  }
}

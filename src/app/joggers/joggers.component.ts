import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-joggers',
  templateUrl: './joggers.component.html',
  styleUrls: ['./joggers.component.css']
})
export class JoggersComponent {
  products: any[] = [
    {
      id: 1,
      name: 'Joggers 1',
      description: 'Hand wash only',
      image: 'assets/image/joggers men/1.jpeg',
    },
    {
      id: 2,
      name: 'Joggers 2',
      description: 'Hand wash only',
      image: 'assets/image/joggers men/2.jpeg',
    },
    {
      id: 3,
      name: 'Joggers 3',
      description: 'Hand wash only',
      image: 'assets/image/joggers men/3.jpeg',
    },
    {
      id: 4,
      name: 'Joggers 4',
      description: 'Hand wash only',
      image: 'assets/image/joggers men/4.jpeg',
    },
    {
      id: 5,
      name: 'Joggers 5',
      description: 'Hand wash only',
      image: 'assets/image/joggers men/5.jpeg',
    },
    {
      id: 6,
      name: 'Joggers 6',
      description: 'Hand wash only',
      image: 'assets/image/joggers men/6.jpeg',
    },
    {
      id: 7,
      name: 'Joggers 7',
      description: 'Hand wash only',
      image: 'assets/image/joggers men/7.jpeg',
    },
    {
      id: 8,
      name: 'Joggers 8',
      description: 'Hand wash only',
      image: 'assets/image/joggers men/8.jpeg',
    },
    {
      id: 9,
      name: 'Joggers 9',
      description: 'Hand wash only',
      image: 'assets/image/joggers men/9.jpeg',
    },
    {
      id: 10,
      name: 'Joggers 10',
      description: 'Hand wash only',
      image: 'assets/image/joggers men/10.jpeg',
    },
    {
      id: 11,
      name: 'Joggers 11',
      description: 'Hand wash only',
      image: 'assets/image/joggers men/11.jpeg',
    },
    {
      id: 12,
      name: 'Joggers 12',
      description: 'Hand wash only',
      image: 'assets/image/joggers men/12.jpeg',
    },
    {
      id: 13,
      name: 'Joggers 13',
      description: 'Hand wash only',
      image: 'assets/image/joggers men/13.jpeg',
    },
    {
      id: 14,
      name: 'Joggers 14',
      description: 'Hand wash only',
      image: 'assets/image/joggers men/14.jpeg',
    },
    {
      id: 15,
      name: 'Joggers 15',
      description: 'Hand wash only',
      image: 'assets/image/joggers men/15.jpeg',
    },
    {
      id: 16,
      name: 'Joggers 16',
      description: 'Hand wash only',
      image: 'assets/image/joggers men/16.jpeg',
    },
    {
      id: 17,
      name: 'Joggers 17',
      description: 'Hand wash only',
      image: 'assets/image/joggers men/17.jpeg',
    },
    {
      id: 18,
      name: 'Joggers 18',
      description: 'Hand wash only',
      image: 'assets/image/joggers men/18.jpeg',
    }
  ];

  constructor(private service: UserService) {}

  addToCart(product: any) {
    this.service.selectedProducts(product); 
  }
}

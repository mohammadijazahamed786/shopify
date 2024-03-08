import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-jogger',
  templateUrl: './jogger.component.html',
  styleUrls: ['./jogger.component.css']
})
export class JoggerComponent {
  products: any[] = [
    {
      id: 1,
      name: 'Joggers 1',
      description: 'Hand wash only',
      image: 'assets/image/jogger boys/1.jpeg',
    },
    {
      id: 2,
      name: 'Joggers 2',
      description: 'Hand wash only',
      image: 'assets/image/jogger boys/2.jpeg',
    },
    {
      id: 3,
      name: 'Joggers 3',
      description: 'Hand wash only',
      image: 'assets/image/jogger boys/3.jpeg',
    },
    {
      id: 4,
      name: 'Joggers 4',
      description: 'Hand wash only',
      image: 'assets/image/jogger boys/4.jpeg',
    },
    {
      id: 5,
      name: 'Joggers 5',
      description: 'Hand wash only',
      image: 'assets/image/jogger boys/jgger1.jpg',
    },
    {
      id: 6,
      name: 'Joggers 6',
      description: 'Hand wash only',
      image: 'assets/image/jogger boys/jgger2.jpg',
    },
    {
      id: 7,
      name: 'Joggers 7',
      description: 'Hand wash only',
      image: 'assets/image/jogger boys/jgger3.jpg',
    },
    {
      id: 8,
      name: 'Joggers 8',
      description: 'Hand wash only',
      image: 'assets/image/jogger boys/jgger4.jpg',
    },
    {
      id: 9,
      name: 'Joggers 9',
      description: 'Hand wash only',
      image: 'assets/image/jogger boys/jgger5.jpg',
    },
    {
      id: 10,
      name: 'Joggers 10',
      description: 'Hand wash only',
      image: 'assets/image/jogger boys/jgger7.jpg',
    },
    {
      id: 11,
      name: 'Joggers 11',
      description: 'Hand wash only',
      image: 'assets/image/jogger boys/jgger8.jpg',
    },
    {
      id: 12,
      name: 'Joggers 12',
      description: 'Hand wash only',
      image: 'assets/image/jogger boys/jgger9.jpg',
    },
    {
      id: 13,
      name: 'Joggers 13',
      description: 'Hand wash only',
      image: 'assets/image/jogger boys/jgger10.jpg',
    },
    {
      id: 14,
      name: 'Joggers 14',
      description: 'Hand wash only',
      image: 'assets/image/jogger boys/jgger11.jpg',
    },
    {
      id: 15,
      name: 'Joggers 15',
      description: 'Hand wash only',
      image: 'assets/image/jogger boys/jgger12.jpg',
    },
    {
      id: 16,
      name: 'Joggers 16',
      description: 'Hand wash only',
      image: 'assets/image/jogger boys/jgger16.jpg',
    },
    {
      id: 17,
      name: 'Joggers 17',
      description: 'Hand wash only',
      image: 'assets/image/jogger boys/jgger17.jpg',
    },
    {
      id: 18,
      name: 'Joggers 18',
      description: 'Hand wash only',
      image: 'assets/image/jogger boys/jgger18.jpg',
    }
  ];

  constructor(private service: UserService) {}

  addToCart(product: any) {
    this.service.selectedProducts(product); 
  }

}

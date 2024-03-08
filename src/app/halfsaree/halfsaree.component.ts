import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-halfsaree',
  templateUrl: './halfsaree.component.html',
  styleUrls: ['./halfsaree.component.css']
})
export class HalfsareeComponent {
  products: any[] = [
    {
      id: 1,
      name: 'Half Saree 1',
      description: 'Hand Wash Only',
      image: 'assets/image/halfsarees women/1.jpg',
    },
    {
      id: 2,
      name: 'Half Saree 2',
      description: 'Hand Wash Only',
      image: 'assets/image/halfsarees women/2.jpg',
    },
    {
      id: 3,
      name: 'Half Saree 3',
      description: 'Hand Wash Only',
      image: 'assets/image/halfsarees women/3.jpg',
    },
    {
      id: 4,
      name: 'Half Saree 4',
      description: 'Hand Wash Only',
      image: 'assets/image/halfsarees women/4.jpg',
    },
    {
      id: 5,
      name: 'Half Saree 5',
      description: 'Hand Wash Only',
      image: 'assets/image/halfsarees women/5.jpg',
    },
    {
      id: 6,
      name: 'Half Saree 6',
      description: 'Hand Wash Only',
      image: 'assets/image/halfsarees women/6.jpg',
    },
    {
      id: 7,
      name: 'Half Saree 7',
      description: 'Hand Wash Only',
      image: 'assets/image/halfsarees women/7.jpg',
    },
    {
      id: 8,
      name: 'Half Saree 8',
      description: 'Hand Wash Only',
      image: 'assets/image/halfsarees women/8.jpg',
    },
    {
      id: 9,
      name: 'Half Saree 9',
      description: 'Hand Wash Only',
      image: 'assets/image/halfsarees women/9.jpg',
    },
    {
      id: 10,
      name: 'Half Saree 10',
      description: 'Hand Wash Only',
      image: 'assets/image/halfsarees women/10.jpg',
    },
    {
      id: 11,
      name: 'Half Saree 11',
      description: 'Hand Wash Only',
      image: 'assets/image/halfsarees women/11.jpg',
    },
    {
      id: 12,
      name: 'Half Saree 12',
      description: 'Hand Wash Only',
      image: 'assets/image/halfsarees women/12.jpg',
    },
    {
      id: 13,
      name: 'Half Saree 13',
      description: 'Hand Wash Only',
      image: 'assets/image/halfsarees women/13.jpg',
    },
    {
      id: 14,
      name: 'Half Saree 14',
      description: 'Hand Wash Only',
      image: 'assets/image/halfsarees women/14.jpg',
    },
    {
      id: 15,
      name: 'Half Saree 15',
      description: 'Hand Wash Only',
      image: 'assets/image/halfsarees women/15.jpg',
    },
    {
      id: 16,
      name: 'Half Saree 16',
      description: 'Hand Wash Only',
      image: 'assets/image/halfsarees women/16.jpg',
    },
    {
      id: 17,
      name: 'Half Saree 17',
      description: 'Hand Wash Only',
      image: 'assets/image/halfsarees women/17.jpg',
    },
    {
      id: 18,
      name: 'Half Saree 18',
      description: 'Hand Wash Only',
      image: 'assets/image/halfsarees women/18.jpg',
    }
  ];

  constructor(private service: UserService) {}

  addToCart(product: any) {
    this.service.selectedProducts(product); 
  }
}

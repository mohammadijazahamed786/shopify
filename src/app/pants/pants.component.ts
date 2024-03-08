import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-pants',
  templateUrl: './pants.component.html',
  styleUrls: ['./pants.component.css']
})
export class PantsComponent {
  products: any[] = [
    {
      id: 1,
      name: 'Pants 1',
      description: 'Hand Wash Only',
      image: 'assets/image/pants men/32-18298-1059-levi-s-original-imagfrr8zppyvczq.webp',
    },
    {
      id: 2,
      name: 'Pants 2',
      description: 'Hand Wash Only',
      image: 'assets/image/pants men/32-36087-0599-levi-s-original-imagfrvhhb9kznnf.webp',
    },
    {
      id: 3,
      name: 'Pants 3',
      description: 'Hand Wash Only',
      image: 'assets/image/pants men/32-209464001-jack-jones-original-imafnvfheanqf4zk.webp',
    },
    {
      id: 4,
      name: 'Pants 4',
      description: 'Hand Wash Only',
      image: 'assets/image/pants men/32-aldnvskf570796-allen-solly-original-imagrzn9hmfgghqg.webp',
    },
    {
      id: 5,
      name: 'Pants 5',
      description: 'Hand Wash Only',
      image: 'assets/image/pants men/32-pm207364j678-pepe-jeans-original-imagqhdgeqhsq2eq (3).webp',
    },
    {
      id: 6,
      name: 'Pants 6',
      description: 'Hand Wash Only',
      image: 'assets/image/pants men/34-bhdi23265-black-tone-being-human-original-imagpgkh8uzejyys.webp',
    },
    {
      id: 7,
      name: 'Pants 7',
      description: 'Hand Wash Only',
      image: 'assets/image/pants men/34-o-8560100-002-red-chief-original-imagn57yhzgs9ybg.webp',
    },
    {
      id: 8,
      name: 'Pants 8',
      description: 'Hand Wash Only',
      image: 'assets/image/pants men/34-bhdi23265-black-tone-being-human-original-imagpgkh8uzejyys.webp',
    },
    {
      id: 9,
      name: 'Pants 9',
      description: 'Hand Wash Only',
      image: 'assets/image/pants men/32-pm207364j678-pepe-jeans-original-imagqhdgeqhsq2eq (3).webp',
    },
    {
      id: 10,
      name: 'Pants 10',
      description: 'Hand Wash Only',
      image: 'assets/image/pants men/32-pm207364j678-pepe-jeans-original-imagqhdgeqhsq2eq (3).webp',
    },
    {
      id: 11,
      name: 'Pants 11',
      description: 'Hand Wash Only',
      image: 'assets/image/pants men/32-pm206800d741-pepe-jeans-original-imagqhmbgxgxuh9g.webp',
    },
    {
      id: 12,
      name: 'Pants 12',
      description: 'Hand Wash Only',
      image: 'assets/image/pants men/32-eckn-01bb-037-spykar-original-imaghwjggwkrycdz.webp',
    },
    {
      id: 13,
      name: 'Pants 13',
      description: 'Hand Wash Only',
      image: 'assets/image/pants men/32-bhdi23254-dark-tone-being-human-original-imagpfd5gaqtwzqw.webp',
    },
    {
      id: 14,
      name: 'Pants 14',
      description: 'Hand Wash Only',
      image: 'assets/image/pants men/32-bhdi23243-light-tone-being-human-original-imagpgkhatezjeby.webp',
    },
    {
      id: 15,
      name: 'Pants 15',
      description: 'Hand Wash Only',
      image: 'assets/image/pants men/32-bhdi23097-light-tone-being-human-original-imagpeexrdwmhxxe.webp',
    },
    {
      id: 16,
      name: 'Pants 16',
      description: 'Hand Wash Only',
      image: 'assets/image/pants men/32-bhdi22607-being-human-original-imaghnmyyzq2venn.webp',
    },
    {
      id: 17,
      name: 'Pants 17',
      description: 'Hand Wash Only',
      image: 'assets/image/pants men/32-bhdi22545-being-human-original-imagq465mbk3geyz.webp',
    },
    {
      id: 18,
      name: 'Pants 18',
      description: 'Hand Wash Only',
      image: 'assets/image/pants men/32-bhdi21567-being-human-original-imagg69arz9xbnez.webp',
    }
  ];

  constructor(private service: UserService) {}

  addToCart(product: any) {
    this.service.selectedProducts(product); 
  }
}

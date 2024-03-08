import { Component } from '@angular/core';
import { UserService } from '../user.service';


declare var jQuery: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  Users: any;
  editObject: any;

  constructor(private service: UserService) {
    this.editObject = { id: '', name: '', emailid: '', gender: '', password: '', phonenumber: '' };
  }

  getUserById(userId: number): void {
    this.service.getUserById(userId).subscribe(
      (user: any) => {
        this.Users = [user]; 
      },
      (error) => {
        console.log('Error fetching user:', error);
        this.Users = [];
      }
    );
  }

  deleteUser(id: any): void {
    console.log(id);
    this.service.deleteUser(id).subscribe(
      (data: any) => {
        console.log('User deleted:', data);
      },
     
    );

    const i = this.Users.findIndex((element: any) => element.id == id);
    this.Users.splice(i, 1);
  }

  showEditPopup(user: any): void {
    this.editObject = { ...user };
    jQuery('#UserModel').modal('show');
  }

  updateUsers(): void {
    this.service.updateUsers(this.editObject).subscribe(
      () => {
        console.log('User updated:', this.editObject);
      },
      (error) => {
        console.log('Error updating user:', error);
      }
    );
  }
}

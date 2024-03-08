import { Component } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  constructor(private service: UserService) {}

  submitForm() {
    const contactData = {
      name: this.name,
      email: this.email,
      message: this.message
    };

    this.service.submitContactForm(contactData).subscribe(
      () => {
        console.log('Form submitted successfully.');
      
        this.name = '';
        this.email = '';
        this.message = '';
      },
      (error) => {
        console.error('Form submission error:', error);
      }
    );
  }
}

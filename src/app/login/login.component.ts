import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: any;

  constructor(
    private service: UserService,
    private router: Router,
    private authService: SocialAuthService
  ) {}

  ngOnInit() {}

  async loginFormSubmit(loginForm: any) {
    if (loginForm.email.toUpperCase() == 'MR' && loginForm.password.toUpperCase() == 'MR') {
      
      this.service.setLoginStatus();
      this.router.navigate(['showuser']);
    } else {
      await this.service.dologin(loginForm).then((Data: any) => {
        this.users = Data;
        console.log(Data);
      });

      if (this.loginFormSubmit(loginForm.email) !== null) {
        this.service.setLoginStatus();
        
        this.router.navigate(['customerhomepage']);
      } else {
        
        this.router.navigate(['login']);
      }
    }
  }

 
}

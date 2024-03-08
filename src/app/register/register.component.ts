import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  

countriesList: any;
  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.service.getAllCountries().subscribe((data: any)=>{
      this.countriesList = data;
      console.log(data);
    });
  }

  CustomerRegistration(regForm: any){
    this.service.registerUser(regForm).subscribe((data: any) =>{
      console.log("Returned Error Message");
      console.log(HttpErrorResponse);      
    });
    console.log(regForm)
  }
}
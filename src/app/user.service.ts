import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  addItemToCart(newItem: any) {
    throw new Error('Method not implemented.');
  }
  getCartItems() {
    throw new Error('Method not implemented.');
  }
  getUser(loginForm: any) {
    throw new Error('Method not implemented.');
  }
  
  loginStatus:any;
  selectedProducts: any;

  constructor(private httpClient : HttpClient) {
    this.loginStatus=false;
   }
   getLoginStatus(){
    return this.loginStatus;
   }
   setLoginStatus(){
    this.loginStatus=true;
   }
   setLogoutStatus(){
    this.loginStatus=false;
   }
   getAllUsers(){
    return this.httpClient.get('getAllUsers');
   }
   dologin(loginForm:any):any{
    console.log(loginForm)
    return this.httpClient.post("login/",loginForm).toPromise();
   }
   registerUser(regFrom:any){
    return this.httpClient.post('registerUser',regFrom);
   }
   deleteUser(Id: any): any {
    return this.httpClient.delete('deleteUser/' + Id);
  }
   updateUsers(userObject: any) {
    return this.httpClient.put('updateUsers', userObject);
   }
   googleLogin(email:any):any{
    return this.httpClient.get('getUser'+email);
  }
  getUserById(userId: number) {
    return this.httpClient.get(`getUserById/${userId}`);
  }
  submitContactForm(contactData: any) {
    return this.httpClient.post('contact', contactData);
  }
  getAllItems() {
    return this.httpClient.get<any[]>(`/getAllItems`);
  }

  addItem(item: any) {
    return this.httpClient.post<any>(`/addItem`, item);
  }

  

   getAllCountries(){
    return this.httpClient.get('https://restcountries.com/v2/all'); 
  }
  

}

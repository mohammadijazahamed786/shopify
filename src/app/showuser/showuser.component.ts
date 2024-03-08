import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

declare var jQuery: any;

@Component({
  selector: 'app-showuser',
  templateUrl: './showuser.component.html',
  styleUrls: ['./showuser.component.css']
})
export class ShowuserComponent implements OnInit {
 Users : any;
 editObject : any;
 constructor(private service:UserService){
  this.editObject={id:'',name:'',emailid:'',gender:'',password:'',phonenumber:''};
 }
 ngOnInit(): void {
  this.service.getAllUsers().subscribe((data: any)=>{
    this.Users = data;
    console.log(data);
  });
}
deleteUser(id: any) {
  console.log(id)
  this.service.deleteUser(id).subscribe((data: any) => {
    console.log(data);
  });

  const i = this.Users.findIndex((element: any) => {
    return element.id == id;
  });

  this.Users.splice(i, 1);

}

showEditPopup(user:any){
this.editObject=user;
jQuery('#UserModel').modal('show');
}
updateUsers(){
  this.service.updateUsers(this.editObject).subscribe();
  console.log(this.editObject);

}

}
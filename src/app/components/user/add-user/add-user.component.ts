import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user-model/user';
import { UserService } from '../user-service/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(public userService:UserService,
    private router:Router) { }

  ngOnInit(): void {
  }

  submitForm(userForm:NgForm){
    if(userForm.value.id==null){
      this.userService.createUser(userForm.value)
      .subscribe((response)=>{
        this.router.navigate([""]);
      });
    }else{
      console.log(userForm.value);
      this.userService.updateUser(userForm.value.id,userForm.value)
      .subscribe((response)=>{
        this.router.navigate([""]);
      });
    }
    this.resetForm(userForm);
  }

  resetForm(userForm:NgForm){
    if(userForm!=null){
      userForm.reset();
      this.userService.selectUser=new User();
    }
  }

}

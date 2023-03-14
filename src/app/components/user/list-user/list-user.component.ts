import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user-model/user';
import { UserService } from '../user-service/user.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  listUsers:any=[];

  

  constructor(public cs:UserService,private router:Router) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(){
    return this.cs.getUsers().subscribe((data:{})=>{
      console.log(data);
      this.listUsers=data;
    })
  }

  onEdit(user:User){
    console.log(user);
    this.cs.selectUser=Object.assign({},user);
    this.router.navigate(["/add-user"]);
  }

  onDelete(id:number){
    this.cs.deleteUser(id).subscribe((response)=>{
      this.loadUsers();
    })
    


    
  }

 
 
 
 

}


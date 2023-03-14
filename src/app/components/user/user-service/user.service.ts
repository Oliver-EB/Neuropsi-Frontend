import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user-model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url='http://127.0.0.1:8000/api/users';
  url2='http://127.0.0.1:8000/api/users_delete';
  url3='http://127.0.0.1:8000/api/users_edit';
  url4='http://127.0.0.1:8000/api/register';

  

  selectUser:User=new User();

  reqHeader=new HttpHeaders({
    'Content-Type':'aplication/json'
  });

  constructor(private http:HttpClient) { }

  getUsers():Observable<User>{
    return this.http.get<User>(this.url);
  }

  createUser(user:User):Observable<User>{
    return this.http.post(this.url4,user,{headers:this.reqHeader});
  }

  updateUser(id:number, user:User){
    return this.http.put(this.url3+'/'+id+'/',user,{headers:this.reqHeader});
  }

  deleteUser(id:number){
    return this.http.delete(this.url2+'/'+id+'/');
  }
}

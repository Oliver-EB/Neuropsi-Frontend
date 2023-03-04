import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from '../interfaces/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {
url:string = "http://192.168.100.8:8000/api/"

  constructor(private  http:HttpClient) {
  }
getAllUsers():Observable<User[]>{
let direccion = this.url + "users";
return this.http.get<User[]>(direccion);
}
createUsers(user:User):Observable<User>{
let direccion = this.url + "users";
  return this.http.post<User>(direccion, user);
};

updateUsers(from:User, id:any):Observable<User>{
  let direccion = this.url + "users/" + id;
  return this.http.put<User>(direccion, from);
}

deleteUsers(from:User, id:any):Observable<User>{
  let direccion = this.url + "users/" + id;
  return this.http.delete<User>(direccion);
}

}

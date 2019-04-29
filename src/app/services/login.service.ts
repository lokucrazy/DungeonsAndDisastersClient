import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User';
import { Observable , of } from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  link = 'http://ec2-3-93-4-109.compute-1.amazonaws.com/api/v1/users';
  users = this.getUsers();
  found: boolean;

  loginrequest(user: User) {
    this.found = this.users.find(x => x.username === user.username);
    
  }

  getUsers(): Observable<User> {
    return this.http.get<User>(this.link);
  }
}

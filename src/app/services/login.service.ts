import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User';
import { Observable , of } from 'rxjs';
import { filter } from 'rxjs/operators';
import { identifierModuleUrl } from '@angular/compiler';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit {

  link = 'http://ec2-54-89-116-106.compute-1.amazonaws.com/api/v1/users';
  users: User[];
  foundUser: User;
  found = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }


  loginrequest(user: User) {

    this.http.get<User[]>(this.link)
    .subscribe(data => {

      this.users = data;
      console.log(this.users);
      for (const i of this.users) {
        if (i.username === user.username && i.password === user.password) {
          console.log(i);
          this.foundUser = i;
          localStorage.setItem('currentUser', JSON.stringify(this.foundUser));
          this.found = true;
        }
      }
    });
    return this.found;
  }
}

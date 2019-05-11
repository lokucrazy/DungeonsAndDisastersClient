import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService implements OnInit {

  link = 'http://ec2-3-93-4-109.compute-1.amazonaws.com/api/v1/login/';
  found = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  loginrequest(user: User): Observable <User> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params: new HttpParams().set('password', user.password)
    };

    return this.http.post<User>(this.link + user.username, user, httpOptions);
  }
}

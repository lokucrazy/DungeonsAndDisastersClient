import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable , of } from 'rxjs';
import { User } from './models/User';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CreateuserService {

  link = 'http://ec2-18-232-96-251.compute-1.amazonaws.com:8080/post/';
  request: string;

  constructor(private http: HttpClient) { }

  createUser(user: User): Observable <User[]> {
    console.log(user);
    this.request = this.link.concat(user.username);
    return this.http.post<User[]>(this.request, httpOptions);
  }
}

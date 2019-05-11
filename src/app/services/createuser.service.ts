import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable , throwError } from 'rxjs';
import { User } from '../models/User';
import { catchError } from 'rxjs/operators';
import { stringify } from '@angular/core/src/render3/util';
import { LoginService } from './login.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CreateuserService {

  link = 'http://ec2-3-93-4-109.compute-1.amazonaws.com/api/v1/users';
  request: string;

  constructor(private http: HttpClient,
              private getUser: LoginService) { }

  createUser(user: User): Observable <User[]> {
    console.log(user);
    // this.request = this.link.concat(user.username);
    // if (!this.getUser.loginrequest(user)) {
    //   return this.http.post<User[]>(this.link, user, httpOptions);
    // } else {
    //   console.log('User already exists');
    // }
    return this.http.post<User[]>(this.link, user, httpOptions);
  }
}

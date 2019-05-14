import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GetuserService } from '../services/getuser.service';
import { User } from '../models/User';
import { Session } from '../models/Session';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {

  currentUser: User;
  link = 'http://ec2-3-93-4-109.compute-1.amazonaws.com/api/v1/sessions/';
  request: string;

  constructor(
    private http: HttpClient,
    private getUserService: GetuserService
  ) { }

  ngOnInit() {
    this.currentUser = this.getUserService.getUser();
  }

  connectToSession(sessionID: string) {
    this.request = this.link.concat(sessionID.concat('/users/'.concat(this.currentUser.identifier)));
    console.log(this.request);
    this.http.put<Session>(this.request, httpOptions)
      .subscribe(
        data => { localStorage.setItem('activeSession', JSON.stringify(data));
        },
        err => console.log(err)
       );
  }
}

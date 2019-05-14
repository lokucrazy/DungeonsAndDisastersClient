import { Component, OnInit } from '@angular/core';
import { GetuserService } from '../services/getuser.service';

import { User } from '../models/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Messenger } from '../models/Messenger';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-personal-notes',
  templateUrl: './personal-notes.component.html',
  styleUrls: ['./personal-notes.component.css']
})
export class PersonalNotesComponent implements OnInit {
  user: User;

  turbolink: string;
  notes: string[];
  message: Messenger = {body: ''};


  link = 'http://ec2-3-93-4-109.compute-1.amazonaws.com/api/v1/users/';

  constructor(private getuserservice: GetuserService,
              private http: HttpClient) { }

  ngOnInit() {
    this.user = this.getuserservice.getUser();

    this.turbolink = this.link.concat(this.user.identifier.concat('/notes'));
    this.http.get<string[]>(this.turbolink, httpOptions)
    .subscribe(data => {
      this.notes = data;
      this.notes.reverse();
    });
  }

  public save(newNote: string) {
    this.message.body = newNote;
    this.http.post<User>(this.turbolink, this.message, httpOptions)
      .subscribe(
        data => {
          this.user = data;
          localStorage.setItem('currentUser', JSON.stringify(this.user));
          this.notes = this.user.notes;
          this.notes.reverse();
      }
    );

  }
}

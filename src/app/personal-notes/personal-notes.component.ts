import { Component, OnInit } from '@angular/core';
import { GetuserService } from '../services/getuser.service';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  link = 'http://ec2-3-93-4-109.compute-1.amazonaws.com/api/v1/users/';

  constructor(private getuserservice: GetuserService,
              private http: HttpClient) { }

  ngOnInit() {
    this.user = this.getuserservice.getUser();
  }

  save(notes) {
    this.user.notes = notes;
    localStorage.setItem('currentUser', JSON.stringify(this.user));
    this.http.put(this.link, this.user.identifier, httpOptions);
  }
}

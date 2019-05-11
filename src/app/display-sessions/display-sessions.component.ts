import { Component, OnInit } from '@angular/core';
import { GetuserService } from '../services/getuser.service';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GetsessionsService } from '../services/getsessions.service';
import { Session } from '../models/Session';

@Component({
  selector: 'app-display-sessions',
  templateUrl: './display-sessions.component.html',
  styleUrls: ['./display-sessions.component.css']
})
export class DisplaySessionsComponent implements OnInit {

  constructor(private getuserservice: GetuserService,
              private http: HttpClient,
              private getsessionservice: GetsessionsService) { }

  user: User;
  sessionflag: boolean;
  sessions: Session[];

  ngOnInit() {
    this.user = this.getuserservice.getUser();
    if ( this.user.sessions === undefined || this.user.sessions.length === 0 ){
      this.sessionflag = false;
    } else {
      this.sessionflag = true;
      this.sessions = this.getsessionservice.getSessions(this.user.sessions);
    }
  }
}

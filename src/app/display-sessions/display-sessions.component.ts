import { Component, OnInit } from '@angular/core';
import { GetuserService } from '../services/getuser.service';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GetsessionsService } from '../services/getsessions.service';
import { Session } from '../models/Session';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

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
  DMsessionflag: boolean;
  Playersessionflag: boolean;
  playerSessions: Session[];
  DMsessions: Session[];
  link: 'http://ec2-3-93-4-109.compute-1.amazonaws.com/api/v1/sessions/';

  ngOnInit() {
    this.user = this.getuserservice.getUser();
    if ( this.user.dm_session_ids === undefined || this.user.dm_session_ids.length === 0) {
      this.DMsessionflag = false;
    } else if (this.user.dm_session_ids === undefined || this.user.dm_session_ids.length === 0 ) {
      this.Playersessionflag = false;
    } else {
      this.DMsessionflag = true;
      this.Playersessionflag = true;
      this.DMsessions = this.getsessionservice.getSessions(this.user.dm_session_ids);
      this.playerSessions = this.getsessionservice.getSessions(this.user.session_ids);
    }
  }

  public DMconnect(sessionID: string) {

    this.http.patch(this.link.concat(sessionID + '/'), true, httpOptions)
      .subscribe(
        err => {console.log(err)}
    );
  }

  public Playerconnect(sessionID: string, dmID: string) {

  }
}

